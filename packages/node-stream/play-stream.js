const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];

fs.createReadStream('./handle-error.js')
  .pipe(zlib.createGzip())
  .on('data', () => process.stdout.write('.'))
  .pipe(fs.createWriteStream(file + '.zz'))
  .on('finish', () => console.log('Done'));
