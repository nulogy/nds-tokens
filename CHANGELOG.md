# [6.1.0](https://github.com/nulogy/nds-tokens/compare/v6.0.0...v6.1.0) (2025-03-10)


### Bug Fixes

* Add units to font-size values ([6dbc8ef](https://github.com/nulogy/nds-tokens/commit/6dbc8efaf6e04791d1b2b0af5605f5d6ed2f771b))
* properly format camelCaseValues ([e2e9dd0](https://github.com/nulogy/nds-tokens/commit/e2e9dd0f1ed4f2f209b345ec6166c5bbac3767a7))


### Features

* add breakpoints tokens ([586392f](https://github.com/nulogy/nds-tokens/commit/586392f1d1b0641b220c527707284e58d732c023))
* add font-weight tokens ([a8ec096](https://github.com/nulogy/nds-tokens/commit/a8ec0968ea1457968c69f48d23e064fe8716b55d))
* Add shadow tokens ([10f0a47](https://github.com/nulogy/nds-tokens/commit/10f0a477a8ad7c0b1d2f7da7e3b0097d5095caee))
* Add z-index tokens ([e4b908a](https://github.com/nulogy/nds-tokens/commit/e4b908a23078f9eb5921a79a952b29fef3ee6996))

# [6.0.0](https://github.com/nulogy/nds-tokens/compare/v5.4.0...v6.0.0) (2025-03-07)


### Features

* generate tokens using base units per device ([#60](https://github.com/nulogy/nds-tokens/issues/60)) ([608e793](https://github.com/nulogy/nds-tokens/commit/608e793027bfe2527b4ad794b84eb0778b23ed8f))


### BREAKING CHANGES

* this change overhauls the tokens package and changes
the way the tokens are generated, as well as the final output of both
the JavaScript constants and the CSS variables.

* CSS variables now use this format:
```
      nds-tablet-border-radius-medium
      \_/ \____/ \___________/ \____/
       |    |         |          |
  Prefix  Device    Token       Type
```

* JavaScript constants use this format:
```
    tablet_border_radius_large
    \____/ \___________/ \___/
      |          |         |
    Device     Token      Type
```

# [5.4.0](https://github.com/nulogy/nds-tokens/compare/v5.3.0...v5.4.0) (2022-12-01)


### Features

* change the size and height of heading1 ([#53](https://github.com/nulogy/nds-tokens/issues/53)) ([a9feb96](https://github.com/nulogy/nds-tokens/commit/a9feb96a4c3b44e5d9732891ecaf679bfcc13085))

# [5.3.0](https://github.com/nulogy/nds-tokens/compare/v5.2.0...v5.3.0) (2022-06-06)


### Features

* update box shadows ([#49](https://github.com/nulogy/nds-tokens/issues/49)) ([88707c5](https://github.com/nulogy/nds-tokens/commit/88707c5337ed4fee03753bdd6b7173248b4a2a02))

# [5.2.0](https://github.com/nulogy/nds-tokens/compare/v5.1.0...v5.2.0) (2022-02-01)


### Features

* add new z-index ([#47](https://github.com/nulogy/nds-tokens/issues/47)) ([45c6936](https://github.com/nulogy/nds-tokens/commit/45c6936512fd5550a14a1e82d8097c94f353aed8))

# [5.1.0](https://github.com/nulogy/nds-tokens/compare/v5.0.0...v5.1.0) (2021-11-10)


### Features

* add midGrey colour ([#46](https://github.com/nulogy/nds-tokens/issues/46)) ([2c4585b](https://github.com/nulogy/nds-tokens/commit/2c4585bd3968892a598635891ff3f07ea573d54a))

# [5.0.0](https://github.com/nulogy/nds-tokens/compare/v4.14.1...v5.0.0) (2021-04-16)


### Bug Fixes

* removes` zIndex` object, it is replaced with `zIndices` ([#25](https://github.com/nulogy/nds-tokens/issues/25)) ([eeb9336](https://github.com/nulogy/nds-tokens/commit/eeb93367c3350136957edb60cec4d357915a7bd6))


### BREAKING CHANGES

* the zIndex object in the theme has been replaced with zIndices. Please replace references to theme.zIndex to theme.zIndices

## [4.14.1](https://github.com/nulogy/nds-tokens/compare/v4.14.0...v4.14.1) (2021-01-26)


### Bug Fixes

* sidebar casing ([2b0b431](https://github.com/nulogy/nds-tokens/commit/2b0b431c3b628d2d7a3352e9211b7385cabc5943))

# [4.14.0](https://github.com/nulogy/nds-tokens/compare/v4.13.1...v4.14.0) (2021-01-08)


### Features

* add navBar z-index token ([83b85d4](https://github.com/nulogy/nds-tokens/commit/83b85d48ac37f93d34c361872375b30633a814ec))

## [4.13.1](https://github.com/nulogy/nds-tokens/compare/v4.13.0...v4.13.1) (2021-01-08)


### Bug Fixes

* add zIndices so that zIndex styled props work ([6772986](https://github.com/nulogy/nds-tokens/commit/6772986c3ce25229de91a9c5b2000562d8810f3b))

# [4.13.0](https://github.com/nulogy/nds-tokens/compare/v4.12.0...v4.13.0) (2021-01-08)


### Features

* add sideBar z-index ([0ad9030](https://github.com/nulogy/nds-tokens/commit/0ad90306d8610644c0455454e790e9bc3d94bc31))

# [4.12.0](https://github.com/nulogy/nds-tokens/compare/v4.11.0...v4.12.0) (2020-12-17)


### Features

* adds a zIndex for modal headers and open controls ([69f33ff](https://github.com/nulogy/nds-tokens/commit/69f33ff1c8ad86dfbba7de344cb4c80d98859ac4))

# [4.11.0](https://github.com/nulogy/nds-tokens/compare/v4.10.2...v4.11.0) (2020-11-23)


### Features

* adds a zIndex for table headers ([1d51232](https://github.com/nulogy/nds-tokens/commit/1d512325b4cf5e2ae3a37a4a0722691175e8369f))

## [4.10.2](https://github.com/nulogy/nds-tokens/compare/v4.10.1...v4.10.2) (2020-10-22)


### Bug Fixes

* for release tests ([6eba41f](https://github.com/nulogy/nds-tokens/commit/6eba41fdf7940d9f2626691fc67a4c23d71d342e))

# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.9.1](https://github.com/nulogy/design-system/compare/v4.9.0...v4.9.1) (2020-10-02)


### Bug Fixes

* corrects categorical colour mapping ([#781](https://github.com/nulogy/design-system/issues/781)) ([4f968b7](https://github.com/nulogy/design-system/commit/4f968b78602c7391948f8ba70c288e50bfc68083))





# [4.9.0](https://github.com/nulogy/design-system/compare/v4.8.1...v4.9.0) (2020-09-30)


### Features

* Add secondary colours ([#780](https://github.com/nulogy/design-system/issues/780)) ([058ec3a](https://github.com/nulogy/design-system/commit/058ec3a2f696cdd7af852d42ccedcfd34a79ba31))





## [4.1.3](https://github.com/nulogy/design-system/compare/v4.1.2...v4.1.3) (2020-07-23)

**Note:** Version bump only for package @nulogy/tokens





## [4.1.2](https://github.com/nulogy/design-system/compare/v4.1.1...v4.1.2) (2020-07-23)


### Reverts

* Revert "chore: improve our directory structure (#719)" ([54c850b](https://github.com/nulogy/design-system/commit/54c850ba21d0e2659e639b444cc8962f712e7b98)), closes [#719](https://github.com/nulogy/design-system/issues/719)





## [4.1.1](https://github.com/nulogy/design-system/compare/v4.1.0...v4.1.1) (2020-07-22)

**Note:** Version bump only for package @nulogy/tokens





# [4.0.0](https://github.com/nulogy/design-system/compare/v3.11.0...v4.0.0) (2020-07-17)

**Note:** Version bump only for package @nulogy/tokens

# [3.11.0](https://github.com/nulogy/design-system/compare/v3.10.0...v3.11.0) (2020-07-16)

### Features

- Updates to typography styles, replaced Title, SectionTitle and SubSectionTitle with Heading1, Heading2 and Heading3 components ([#717](https://github.com/nulogy/design-system/issues/717)) ([4291444](https://github.com/nulogy/design-system/commit/42914446ce4c42c8f8273c4e500e35ad49f117c8))

# [3.1.0](https://github.com/nulogy/design-system/compare/v3.0.4...v3.1.0) (2020-06-25)

### Features

- add support for Simplified Chinese ([#688](https://github.com/nulogy/design-system/issues/688)) ([4a46f83](https://github.com/nulogy/design-system/commit/4a46f830c48db8ccbe3995da67d9b881e1e555d2))

## [3.0.2](https://github.com/nulogy/design-system/compare/v3.0.1...v3.0.2) (2020-06-23)

**Note:** Version bump only for package @nulogy/tokens

## [2.13.1](https://github.com/nulogy/design-system/compare/v2.13.0...v2.13.1) (2020-06-05)

### Bug Fixes

- typo in zIndex tokens ([#669](https://github.com/nulogy/design-system/issues/669)) ([71207a0](https://github.com/nulogy/design-system/commit/71207a0bb98d31b812a7c5320c8dfee11c78ff52))

# [2.13.0](https://github.com/nulogy/design-system/compare/v2.12.1...v2.13.0) (2020-06-03)

### Features

- add overlay css component ([#666](https://github.com/nulogy/design-system/issues/666)) ([1cf892a](https://github.com/nulogy/design-system/commit/1cf892a85798c40702aad86ee6d5f34037307c8e))

# [2.0.0](https://github.com/nulogy/design-system/compare/v1.6.1...v2.0.0) (2020-03-25)

**Note:** Version bump only for package @nulogy/tokens

# [1.0.0](https://github.com/nulogy/design-system/compare/v0.24.3...v1.0.0) (2020-02-19)

**Note:** Version bump only for package @nulogy/tokens

# [0.24.0](https://github.com/nulogy/design-system/compare/v0.23.0...v0.24.0) (2020-02-13)

**Note:** Version bump only for package @nulogy/tokens

# [0.23.0](https://github.com/nulogy/design-system/compare/v0.22.1...v0.23.0) (2020-02-11)

**Note:** Version bump only for package @nulogy/tokens

# [0.22.0](https://github.com/nulogy/design-system/compare/v0.21.1...v0.22.0) (2020-02-07)

**Note:** Version bump only for package @nulogy/tokens

# [0.21.0](https://github.com/nulogy/design-system/compare/v0.20.0...v0.21.0) (2020-01-29)

**Note:** Version bump only for package @nulogy/tokens

# [0.20.0](https://github.com/nulogy/design-system/compare/v0.19.0...v0.20.0) (2020-01-20)

**Note:** Version bump only for package @nulogy/tokens

# [0.19.0](https://github.com/nulogy/design-system/compare/v0.18.2...v0.19.0) (2020-01-10)

**Note:** Version bump only for package @nulogy/tokens

# [0.18.0](https://github.com/nulogy/design-system/compare/v0.16.10...v0.18.0) (2020-01-06)

**Note:** Version bump only for package @nulogy/tokens

# [0.17.0](https://github.com/nulogy/design-system/compare/v0.16.10...v0.17.0) (2019-12-06)

**Note:** Version bump only for package @nulogy/tokens
