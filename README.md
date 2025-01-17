# werforge

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

Dev kit for me.

## Usage

### Install

```bash
pnpm add werforge commitlint lint-staged simple-git-hooks -D
```

### Init

```bash
npx werforge init
```

then you can see `.config` folder in your project root.

### Git Commit

> Powered by `commitizen`.

add `commit` script to your `package.json`:

```json
{
  "scripts": {
    "commit": "werforge commit"
  }
}
```

then you can use `pnpm run commit` to commit your code with `commitlint` and `lint-staged`.

## License

[MIT](./LICENSE) License © 2025-PRESENT [Werheng Zhang](https://github.com/werheng)

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/werforge?style=flat&colorA=080f12&colorB=1fa669
[npm-version-href]: https://npmjs.com/package/werforge
[npm-downloads-src]: https://img.shields.io/npm/dm/werforge?style=flat&colorA=080f12&colorB=1fa669
[npm-downloads-href]: https://npmjs.com/package/werforge
[license-src]: https://img.shields.io/github/license/werheng/werforge.svg?style=flat&colorA=080f12&colorB=1fa669
[license-href]: https://github.com/werheng/werforge/blob/master/LICENSE
