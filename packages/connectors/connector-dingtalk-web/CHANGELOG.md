# @logto/connector-dingtalk-web

## 0.4.0

### Minor Changes

- 34964af46: feat: support custom scope in the `getAuthorizationUri` method

  This change allows the `getAuthorizationUri` method in the social connectors to accept an extra `scope` parameter, enabling more flexible authorization requests.

  If the scope is provided, it will be used in the authorization request; otherwise, the default scope configured in the connector settings will be used.

### Patch Changes

- Updated dependencies [34964af46]
  - @logto/connector-kit@4.4.0

## 0.3.0

### Minor Changes

- 2961d355d: bump node version to ^22.14.0

### Patch Changes

- Updated dependencies [2961d355d]
  - @logto/connector-kit@4.3.0

## 0.2.1

### Patch Changes

- e11e57de8: bump dependencies for security update
- Updated dependencies [e11e57de8]
  - @logto/connector-kit@4.1.1

## 0.2.0

### Minor Changes

- 510f681fa: use tsup for building

  We've updated some of the packages to use `tsup` for building. This will make the build process faster, and should not affect the functionality of the packages.

  Use minor version bump to catch your attention.

## 0.1.1

### Patch Changes

- Updated dependencies [6308ee185]
- Updated dependencies [15953609b]
- Updated dependencies [6308ee185]
  - @logto/connector-kit@4.0.0

## 0.1.0

### Minor Changes

- 0b5b15b96: add DingTalk web connector
