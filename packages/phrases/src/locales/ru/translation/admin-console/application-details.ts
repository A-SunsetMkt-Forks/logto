const application_details = {
  page_title: 'Детали приложения',
  back_to_applications: 'Вернуться к приложениям',
  check_guide: 'Проверить гид',
  settings: 'Настройки',
  settings_description:
    '«Приложение» — это зарегистрированное программное обеспечение или сервис, которое может получать доступ к информации пользователя либо действовать от его имени. Приложения помогают узнавать, кто запрашивает какие данные у Logto и обрабатывать вход и разрешения. Заполните необходимые поля для аутентификации.',
  integration: 'Интеграция',
  integration_description:
    'Развертывайте защищенные рабочие процессы Logto, работающие на сети реберного узла Cloudflare, для обеспечения высочайшей производительности и нулевого времени запуска в любой точке мира.',
  service_configuration: 'Конфигурация службы',
  service_configuration_description: 'Завершите необходимые настройки в своем сервисе.',
  session: 'Сессия',
  endpoints_and_credentials: 'Конечные точки и учетные данные',
  endpoints_and_credentials_description:
    'Используйте следующие конечные точки и учетные данные для настройки соединения OIDC в своем приложении.',
  refresh_token_settings: 'Обновить токен',
  refresh_token_settings_description:
    'Управляйте правилами обновления токенов для этого приложения.',
  machine_logs: 'Машинные журналы',
  application_name: 'Название приложения',
  application_name_placeholder: 'Мое приложение',
  description: 'Описание',
  description_placeholder: 'Введите описание своего приложения',
  config_endpoint: 'Конечная точка конфигурации OpenID Provider',
  issuer_endpoint: 'Конечная точка издателя',
  authorization_endpoint: 'Конечная точка авторизации',
  authorization_endpoint_tip:
    'Конечная точка для аутентификации и авторизации. Он используется для аутентификации <a>OpenID Connect</a>.',
  show_endpoint_details: 'Показать подробности конечной точки',
  hide_endpoint_details: 'Скрыть подробности конечной точки',
  logto_endpoint: 'Конечная точка Logto',
  application_id: 'ID приложения',
  application_id_tip:
    'Уникальный идентификатор приложения, обычно генерируемый Logto. Он также означает «<a>client_id</a>» в OpenID Connect.',
  application_secret: 'Секрет приложения',
  application_secret_other: 'Секреты приложения',
  redirect_uri: 'URI перенаправления',
  redirect_uris: 'URI перенаправления',
  redirect_uri_placeholder: 'https://ваш.вебсайт.com/приложение',
  redirect_uri_placeholder_native: 'io.logto://callback',
  redirect_uri_tip:
    'URI перенаправляется после входа пользователя (успешного или нет). См. OpenID Connect <a>AuthRequest</a> для получения дополнительной информации.',
  /** UNTRANSLATED */
  mixed_redirect_uri_warning:
    'Your application type is not compatible with at least one of the redirect URIs. It does not follow best practices and we strongly recommend keeping the redirect URIs consistent.',
  post_sign_out_redirect_uri: 'URI перенаправления после выхода из системы',
  post_sign_out_redirect_uris: 'URI перенаправления после выхода из системы',
  post_sign_out_redirect_uri_placeholder: 'https://ваш.вебсайт.com/домашняя страница',
  post_sign_out_redirect_uri_tip:
    'URI перенаправляется после выхода пользователя (необязательно). Это может не иметь практического эффекта в некоторых типах приложений.',
  cors_allowed_origins: 'Разрешенные источники CORS',
  cors_allowed_origins_placeholder: 'https://ваш.вебсайт.com',
  cors_allowed_origins_tip:
    'По умолчанию разрешены все источники URI перенаправления. Обычно для этого поля не требуется никаких действий. См. <a>Документацию MDN</a> для получения подробной информации.',
  token_endpoint: 'Конечная точка токена',
  user_info_endpoint: 'Конечная точка информации о пользователе',
  enable_admin_access: 'Включить доступ администратора',
  enable_admin_access_label:
    'Включить или отключить доступ к API управления. После включения вы можете использовать токены доступа для вызова API управления от имени этого приложения.',
  always_issue_refresh_token: 'Всегда выдавать Refresh Token',
  always_issue_refresh_token_label:
    'Включение этой настройки позволит Logto всегда выдавать Refresh Tokens, независимо от того, была ли в запросе на аутентификацию предложена команда `prompt=consent`. Однако данная практика не рекомендуется, если это необходимо, поскольку она несовместима с OpenID Connect и может вызвать проблемы.',
  refresh_token_ttl: 'Time to Live (TTL) Refresh Token в днях',
  refresh_token_ttl_tip:
    'Продолжительность, на протяжении которой Refresh Token может использоваться для запроса новых токенов доступа, прежде чем он истечет и станет недействительным. Запросы токенов будут продлевать TTL Refresh Token до этого значения.',
  rotate_refresh_token: 'Поворот Refresh Token',
  rotate_refresh_token_label:
    'При включении Logto будет выдавать новый Refresh Token для запросов токенов, когда пройдет 70% изначального Time to Live (TTL) или будут выполнены определенные условия. <a>Узнать больше</a>',
  /** UNTRANSLATED */
  rotate_refresh_token_label_for_public_clients:
    'When enabled, Logto will issue a new refresh token for each token request. <a>Learn more</a>',
  backchannel_logout: 'Отключение обратного канала',
  backchannel_logout_description:
    'Настройте конечную точку отключения обратного канала OpenID Connect и требуется ли сеанс для этого приложения.',
  backchannel_logout_uri: 'URI для отключения обратного канала',
  backchannel_logout_uri_session_required: 'Требуется ли сеанс?',
  backchannel_logout_uri_session_required_description:
    'При включении RP требует, чтобы претензия `sid` (идентификатор сеанса) была включена в токен выхода, чтобы идентифицировать сеанс RP с OP, когда используется `backchannel_logout_uri`.',
  delete_description:
    'Это действие нельзя отменить. Оно навсегда удалит приложение. Введите название приложения <span> {{name}} </span>, чтобы подтвердить.',
  enter_your_application_name: 'Введите название своего приложения',
  application_deleted: 'Приложение {{name}} успешно удалено',
  redirect_uri_required: 'Вы должны ввести по крайней мере один URI перенаправления',
  app_domain_description_1:
    'Не стесняйтесь использовать ваш домен с {{domain}}, под управлением Logto, который имеет постоянную действительность.',
  app_domain_description_2:
    'Смело используйте ваш домен <domain>{{domain}}</domain>, который имеет постоянную действительность.',
  custom_rules: 'Пользовательские правила аутентификации',
  custom_rules_placeholder: '^/(admin|privacy)/.+$',
  custom_rules_description:
    'Установите правила с использованием регулярных выражений для требуемых маршрутов, требующих аутентификации. По умолчанию: защита всего сайта, если оставить пустым.',
  authentication_routes: 'Маршруты аутентификации',
  custom_rules_tip:
    "Вот два варианта сценариев:<ol><li>Для защиты только маршрутов '/admin' и '/privacy' аутентификацией: ^/(admin|privacy)/.*</li><li>Для исключения из аутентификации изображений JPG: ^(?!.*\\.jpg$).*$</li></ol>",
  authentication_routes_description:
    'Перенаправьте вашу кнопку аутентификации, используя указанные маршруты. Примечание: Эти маршруты незаменяемы.',
  protect_origin_server: 'Защита вашего исходного сервера',
  protect_origin_server_description:
    'Обеспечьте защиту вашего исходного сервера от прямого доступа. Обратитесь к руководству для получения более <a>подробных инструкций</a>.',
  session_duration: 'Продолжительность сеанса (дни)',
  try_it: 'Попробуйте',
  no_organization_placeholder: 'Организация не найдена. <a>Перейти к организациям</a>',
  field_custom_data: 'Пользовательские данные',
  field_custom_data_tip:
    'Дополнительная информация о приложении, не указанная в предопределенных свойствах приложения, такая как настройки и конфигурации, специфичные для бизнеса.',
  custom_data_invalid: 'Пользовательские данные должны быть допустимым объектом JSON',
  branding: {
    name: 'Брендинг',
    description: 'Настройте отображаемое имя и логотип вашего приложения на экране согласия.',
    description_third_party:
      'Настройте отображаемое имя и логотип вашего приложения на экране согласия.',
    app_logo: 'Логотип приложения',
    app_level_sie: 'Опыт входа на уровне приложения',
    app_level_sie_switch:
      'Включите опыт входа на уровне приложения и настройте брендинг для приложения. Если отключено, будет использоваться омни-опыт входа.',
    more_info: 'Дополнительная информация',
    more_info_description:
      'Предлагайте пользователям больше информации о вашем приложении на экране согласия.',
    display_name: 'Отображаемое имя',
    application_logo: 'Логотип приложения',
    application_logo_dark: 'Логотип приложения (темный)',
    brand_color: 'Цвет бренда',
    brand_color_dark: 'Цвет бренда (темный)',
    terms_of_use_url: 'URL условий использования приложения',
    privacy_policy_url: 'URL политики конфиденциальности приложения',
  },
  permissions: {
    name: 'Разрешения',
    description:
      'Выберите разрешения, которые требуются стороннему приложению для получения авторизации пользователя на доступ к определенным типам данных.',
    user_permissions: 'Персональные данные пользователя',
    organization_permissions: 'Доступ организации',
    table_name: 'Предоставление разрешений',
    field_name: 'Разрешение',
    field_description: 'Отображается на экране согласия',
    delete_text: 'Удалить разрешение',
    permission_delete_confirm:
      'Это действие отозвет предоставленные разрешения стороннему приложению, препятствуя запросу пользователя на авторизацию к определенным типам данных. Вы уверены, что хотите продолжить?',
    permissions_assignment_description:
      'Выберите разрешения, которые стороннее приложение запрашивает для авторизации пользователя к определенным типам данных.',
    user_profile: 'Данные пользователя',
    api_permissions: 'API-разрешения',
    organization: 'Разрешения организации',
    user_permissions_assignment_form_title: 'Добавить разрешения на профиль пользователя',
    organization_permissions_assignment_form_title: 'Добавить разрешения на организацию',
    api_resource_permissions_assignment_form_title: 'Добавить разрешения на ресурс API',
    user_data_permission_description_tips:
      'Вы можете изменить описание персональных данных пользователя через "Опыт входа -> Содержание -> Управление языком".',
    permission_description_tips:
      'Когда Logto используется в качестве поставщика идентификации (IdP) для аутентификации в сторонних приложениях, и пользователи запрашивают авторизацию, данное описание отображается на экране согласия.',
    user_title: 'Пользователь',
    user_description:
      'Выберите разрешения, запрошенные сторонним приложением для доступа к определенным данным пользователя.',
    grant_user_level_permissions: 'Предоставить разрешения на данные пользователя',
    organization_title: 'Организация',
    organization_description:
      'Выберите разрешения, которые запрашиваются сторонним приложением для доступа к определенным данным организации.',
    grant_organization_level_permissions: 'Предоставить разрешения на данные организации',
  },
  roles: {
    assign_button: 'Назначить роли между машинами',
    delete_description:
      'Это действие удалит эту роль из этого приложения. Сама роль останется, но больше не будет связана с этим приложением.',
    deleted: '{{name}} успешно удалено у этого пользователя.',
    assign_title: 'Назначить роли между машинами для {{name}}',
    assign_subtitle:
      'Приложения типа «машина к машине» должны иметь соответствующие роли для доступа к связанным ресурсам API.',
    assign_role_field: 'Назначить роли между машинами',
    role_search_placeholder: 'Поиск по названию роли',
    added_text: '{{value, number}} добавлено',
    assigned_app_count: '{{value, number}} приложений',
    confirm_assign: 'Назначить роли между машинами',
    role_assigned: 'Роль(и) успешно назначены',
    search: 'Поиск по названию роли, описанию или ID',
    empty: 'Нет доступных ролей',
  },
  secrets: {
    value: 'Значение',
    empty: 'Приложение не имеет секретов.',
    created_at: 'Создано в',
    expires_at: 'Истекает в',
    never: 'Никогда',
    create_new_secret: 'Создать новый секрет',
    delete_confirmation:
      'Это действие нельзя отменить. Вы уверены, что хотите удалить этот секрет?',
    /** UNTRANSLATED */
    deleted: 'The secret has been successfully deleted.',
    /** UNTRANSLATED */
    activated: 'The secret has been successfully activated.',
    /** UNTRANSLATED */
    deactivated: 'The secret has been successfully deactivated.',
    legacy_secret: 'Устаревший секрет',
    expired: 'Истек',
    expired_tooltip: 'Секрет истек {{date}}.',
    create_modal: {
      title: 'Создать секрет приложения',
      expiration: 'Срок действия',
      expiration_description: 'Секрет истечет {{date}}.',
      expiration_description_never:
        'Секрет никогда не истечет. Мы рекомендуем установить дату истечения для повышения безопасности.',
      days: '{{count}} день',
      days_other: '{{count}} дней',
      /** UNTRANSLATED */
      years: '{{count}} year',
      /** UNTRANSLATED */
      years_other: '{{count}} years',
      created: 'Секрет {{name}} успешно создан.',
    },
    edit_modal: {
      title: 'Изменить секрет приложения',
      edited: 'Секрет {{name}} успешно изменен.',
    },
  },
  saml_idp_config: {
    /** UNTRANSLATED */
    title: 'SAML IdP metadata',
    /** UNTRANSLATED */
    description:
      'Use the following metadata and certificate to configure the SAML IdP in your application.',
    /** UNTRANSLATED */
    metadata_url_label: 'IdP metadata URL',
    /** UNTRANSLATED */
    single_sign_on_service_url_label: 'Single sign-on service URL',
    /** UNTRANSLATED */
    idp_entity_id_label: 'IdP entity ID',
  },
  saml_idp_certificates: {
    /** UNTRANSLATED */
    title: 'SAML signing certificate',
    /** UNTRANSLATED */
    expires_at: 'Expires at',
    /** UNTRANSLATED */
    finger_print: 'Fingerprint',
    /** UNTRANSLATED */
    status: 'Status',
    /** UNTRANSLATED */
    active: 'Active',
    /** UNTRANSLATED */
    inactive: 'Inactive',
  },
  saml_idp_name_id_format: {
    /** UNTRANSLATED */
    title: 'Name ID format',
    /** UNTRANSLATED */
    description: 'Select the name ID format of the SAML IdP.',
    /** UNTRANSLATED */
    persistent: 'Persistent',
    /** UNTRANSLATED */
    persistent_description: 'Use Logto user ID as Name ID',
    /** UNTRANSLATED */
    transient: 'Transient',
    /** UNTRANSLATED */
    transient_description: 'Use one-time user ID as Name ID',
    /** UNTRANSLATED */
    unspecified: 'Unspecified',
    /** UNTRANSLATED */
    unspecified_description: 'Use Logto user ID as Name ID',
    /** UNTRANSLATED */
    email_address: 'Email address',
    /** UNTRANSLATED */
    email_address_description: 'Use email address as Name ID',
  },
  saml_encryption_config: {
    /** UNTRANSLATED */
    encrypt_assertion: 'Encrypt SAML assertion',
    /** UNTRANSLATED */
    encrypt_assertion_description: 'By enabling this option, the SAML assertion will be encrypted.',
    /** UNTRANSLATED */
    encrypt_then_sign: 'Encrypt then sign',
    /** UNTRANSLATED */
    encrypt_then_sign_description:
      'By enabling this option, the SAML assertion will be encrypted and then signed; otherwise, the SAML assertion will be signed and then encrypted.',
    /** UNTRANSLATED */
    certificate: 'Certificate',
    /** UNTRANSLATED */
    certificate_tooltip:
      'Copy and paste the x509 certificate you get from your service provider to encrypt the SAML assertion.',
    /** UNTRANSLATED */
    certificate_placeholder:
      '-----BEGIN CERTIFICATE-----\nMIICYDCCAcmgAwIBA...\n-----END CERTIFICATE-----\n',
    /** UNTRANSLATED */
    certificate_missing_error: 'Certificate is required.',
    /** UNTRANSLATED */
    certificate_invalid_format_error:
      'Invalid certificate format detected. Please check the certificate format and try again.',
  },
  saml_app_attribute_mapping: {
    /** UNTRANSLATED */
    name: 'Attribute mappings',
    /** UNTRANSLATED */
    title: 'Base attribute mappings',
    /** UNTRANSLATED */
    description: 'Add attribute mappings to sync user profile from Logto to your application.',
    /** UNTRANSLATED */
    col_logto_claims: 'Value of Logto',
    /** UNTRANSLATED */
    col_sp_claims: 'Value name of your application',
    /** UNTRANSLATED */
    add_button: 'Add another',
  },
};

export default Object.freeze(application_details);
