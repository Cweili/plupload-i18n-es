const { format } = require('util');
const { resolve } = require('path');
const {
  readdir,
  readFileSync,
  writeFileSync,
  createReadStream,
  createWriteStream
} = require('fs');

const template = 'export default function(plupload) { %s }';

function cp(from, to) {
  createReadStream(resolve(__dirname, from))
    .pipe(createWriteStream(resolve(__dirname, to)));
}

readdir(resolve(__dirname, '../plupload/js/i18n'), (err, files) => {
  if (err) {
    throw err;
  }
  for (const file of files) {
    writeFileSync(
      resolve(__dirname, '../dist', file),
      format(template, readFileSync(resolve(__dirname, '../plupload/js/i18n', file), 'utf8'))
    );
  }
});

for (const file of [
  'package.json',
  'README.md',
  'LICENSE'
]) {
  cp(`../${file}`, `../dist/${file}`);
}
