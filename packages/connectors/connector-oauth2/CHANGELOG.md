# @logto/connector-oauth

## 1.7.0

### Minor Changes

- 0343699d7: feat: add token storage support to social connectors

  The connector has been updated to support token storage. When enabled, Logto will securely store the token set issued by social providers in the [Secret Vault](https://docs.logto.io/secret-vault/) after successful user authentication. This allows your application to retrieve the access token later and access third-party APIs without requiring the user to reauthenticate. Please check the [Federated token set storage](https://docs.logto.io/secret-vault/federated-token-set) for more details.

- 34964af46: feat: support custom scope in the `getAuthorizationUri` method

  This change allows the `getAuthorizationUri` method in the social connectors to accept an extra `scope` parameter, enabling more flexible authorization requests.

  If the scope is provided, it will be used in the authorization request; otherwise, the default scope configured in the connector settings will be used.

### Patch Changes

- Updated dependencies [34964af46]
  - @logto/connector-kit@4.4.0

## 1.6.0

### Minor Changes

- 2961d355d: bump node version to ^22.14.0

### Patch Changes

- Updated dependencies [2961d355d]
  - @logto/connector-kit@4.3.0
  - @logto/shared@3.2.0

## 1.5.1

### Patch Changes

- e11e57de8: bump dependencies for security update
- Updated dependencies [e11e57de8]
  - @logto/connector-kit@4.1.1
  - @logto/shared@3.1.4

## 1.5.0

### Minor Changes

- 27d2c91d2: adding support for nested attributes

## 1.4.0

### Minor Changes

- 510f681fa: use tsup for building

  We've updated some of the packages to use `tsup` for building. This will make the build process faster, and should not affect the functionality of the packages.

  Use minor version bump to catch your attention.

## 1.3.1

### Patch Changes

- Updated dependencies [6308ee185]
- Updated dependencies [15953609b]
- Updated dependencies [6308ee185]
  - @logto/connector-kit@4.0.0

## 1.3.0

### Minor Changes

- f9c7a72d5: Support `client_secret_basic` and `client_secret_jwt` token endpoint auth method for oauth & oidc connectors

### Patch Changes

- Updated dependencies [21bb35b12]
  - @logto/shared@3.1.1

## 1.2.0

### Minor Changes

- 57d97a4df: return and store social connector raw data

### Patch Changes

- Updated dependencies [57d97a4df]
- Updated dependencies [57d97a4df]
- Updated dependencies [57d97a4df]
- Updated dependencies [2c10c2423]
  - @logto/connector-kit@3.0.0

## 1.1.0

### Minor Changes

- 31e60811d: use Node 20 LTS for engine requirement.

  Note: We mark it as minor because Logto is shipping with Docker image and it's not a breaking change for users.

### Patch Changes

- 9089dbf84: upgrade TypeScript to 5.3.3
- Updated dependencies [9089dbf84]
- Updated dependencies [31e60811d]
- Updated dependencies [570a4ea9e]
- Updated dependencies [570a4ea9e]
- Updated dependencies [6befe6014]
  - @logto/connector-kit@2.1.0

## 1.0.1

### Patch Changes

- Updated dependencies [d24aaedf5]
  - @logto/connector-kit@2.0.0
