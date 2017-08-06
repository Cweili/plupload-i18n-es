# Plupload i18n ES2015 modules

Export Plupload i18n language packs as ES2015 modules.

Use [Plupload Language Pack](http://www.plupload.com/docs/Plupload-in-Your-Language) with [Browserify](http://browserify.org/) or [Webpack](https://webpack.js.org/).

See [original README](https://github.com/moxiecode/plupload).

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
