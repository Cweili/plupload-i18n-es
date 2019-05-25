# Plupload i18n ES2015 modules

[![npm][npm-version]][npm]
[![npm][npm-downloads]][npm]
[![npm][npm-license]][npm]
[![github][github-issues]][github]

Export Plupload i18n language packs as ES2015 modules.

Use [Plupload Language Pack](plupload-language-pack) with [Browserify](browserify) or [Webpack](webpack).

See [original README](plupload).

# Usage

```js
import plupload from 'plupload';
import pluploadI18nZhCN from 'plupload-i18n-es/zh_CN';

pluploadI18nZhCN(plupload);
```

# How

Wrap `export default` to original language pack.

```js
export default function(plupload) {
  plupload.addI18n({...});
}
```

[npm]: https://www.npmjs.com/package/plupload-i18n-es
[npm-version]: https://img.shields.io/npm/v/plupload-i18n-es.svg
[npm-downloads]: https://img.shields.io/npm/dt/plupload-i18n-es.svg
[npm-license]: https://img.shields.io/npm/l/plupload-i18n-es.svg

[github]: https://github.com/Cweili/plupload-i18n-es
[github-issues]: https://img.shields.io/github/issues/Cweili/plupload-i18n-es.svg

[plupload]: https://github.com/moxiecode/plupload
[plupload-language-pack]: http://www.plupload.com/docs/Plupload-in-Your-Language
[browserify]: http://browserify.org/
[webpack]: https://webpack.js.org/
