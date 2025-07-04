import { sql } from '@silverhand/slonik';

import type { AlterationScript } from '../lib/types/alteration.js';

import { applyTableRls, dropTableRls } from './utils/1704934999-tables.js';

const alteration: AlterationScript = {
  up: async (pool) => {
    await pool.query(sql`
      create table secret_connector_relations (
        tenant_id varchar(21) not null
          references tenants (id) on update cascade on delete cascade,
        secret_id varchar(21) not null
          references secrets (id) on update cascade on delete cascade,
        /** Social connector ID foreign reference. Only present for secrets that store social connector tokens. Note: avoid directly cascading deletes here, need to delete the secrets first.*/
        connector_id varchar(128)
          references connectors (id) on update cascade,
        /** SSO connector ID foreign reference. Only present for secrets that store SSO connector tokens. Note: avoid directly cascading deletes here, need to delete the secrets first.*/
        sso_connector_id varchar(128)
          references sso_connectors (id) on update cascade,
        /** The target of the social connector. e.g. 'github', 'google', etc. */
        social_connector_target varchar(256),
        /** User social identity ID foreign reference. Only present for secrets that store social identity tokens. */
        social_identity_id varchar(128),
        /** User sso connector issuer. Only present for secrets that store SSO connector tokens. */
        sso_connector_issuer varchar(256),
        /** User SSO identity ID. Only present for secrets that store SSO identity tokens. */
        sso_identity_id varchar(128),
        primary key (tenant_id, secret_id),
        /** Ensures that each social identity is associated with only one secret. */
        constraint secret_connector_relations__target__social_identity_id
          unique (tenant_id, social_connector_target, social_identity_id),
        /** Ensures that each SSO identity is associated with only one secret. */
        foreign key (tenant_id, sso_connector_issuer, sso_identity_id)
          references user_sso_identities (tenant_id, issuer, identity_id) on update cascade,
        /** Ensure that each secret is associated with a social connector or SSO connector, but not both at the same time. */
        constraint secret_connector_relations__connector_id__sso_connector_id
          check (
            (
              connector_id is not null and social_connector_target is not null and social_identity_id is not null and
              sso_connector_id is null and sso_identity_id is null
            ) or (
              connector_id is null and social_connector_target is null and social_identity_id is null and
              sso_connector_id is not null and sso_identity_id is not null
            )
          )
      );
    `);

    /** Trigger function to delete secrets when the social connector is deleted. */
    await pool.query(sql`
      create function delete_secrets_on_social_connector_delete()
      returns trigger as $$
      begin
        delete from secrets
        where id in (
          select secret_id from secret_connector_relations
          where tenant_id = old.tenant_id and connector_id = old.id
        );
        return old;
      end;
      $$ language plpgsql;

      create trigger delete_secrets_before_social_connector_delete
        before delete on connectors
        for each row
        execute procedure delete_secrets_on_social_connector_delete();
    `);

    /** Trigger function to delete secrets when the SSO connector is deleted. */
    await pool.query(sql`
      create function delete_secrets_on_sso_connector_delete()
      returns trigger as $$
      begin
        delete from secrets
        where id in (
          select secret_id from secret_connector_relations
          where tenant_id = old.tenant_id and sso_connector_id = old.id
        );
        return old;
      end;
      $$ language plpgsql;

      create trigger delete_secrets_before_sso_connector_delete
        before delete on sso_connectors
        for each row
        execute procedure delete_secrets_on_sso_connector_delete();
    `);

    await applyTableRls(pool, 'secret_connector_relations');
  },
  down: async (pool) => {
    await pool.query(sql`
      drop trigger if exists delete_secrets_before_social_connector_delete on connectors;
      drop function if exists delete_secrets_on_social_connector_delete;

      drop trigger if exists delete_secrets_before_sso_connector_delete on sso_connectors;
      drop function if exists delete_secrets_on_sso_connector_delete;
    `);

    await dropTableRls(pool, 'secret_connector_relations');

    await pool.query(sql`
      drop table secret_connector_relations;
    `);
  },
};

export default alteration;
