# @ianwalter/bcrypt
> Generate bcrypt hashes from the command-line

[![npm page][npmImage]][npmUrl]

## Installation

```console
npm install -g @ianwalter/bcrypt
```

## Usage

The first argument is the password to be hashed and the second argument is the
number of rounds used to generate the salt (optional, defaults to `10`).

```console
bcrypt somePassword 14
```

## License

Apache 2.0 with Commons Clause - See [LICENSE][licenseUrl]

&nbsp;

&copy; [Ian Walter](https://iankwalter.com)

[npmImage]: https://img.shields.io/npm/v/@ianwalter/bcrypt.svg
[npmUrl]: https://www.npmjs.com/package/@ianwalter/bcrypt
[licenseUrl]: https://github.com/ianwalter/bcrypt/blob/master/LICENSE

