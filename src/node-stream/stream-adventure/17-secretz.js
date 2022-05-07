const through = require('through2');
const crypto = require('crypto');
const { stdin, stdout } = require('process');
const tar = require('tar');

const cipherData = process.argv.slice(2);

const parser = new tar.Parse();
parser.on('entry', (entry) => {
  if (entry.type !== 'File') {
    return entry.resume();
  }
  entry
    .pipe(crypto.createHash('md5', { encoding: 'hex' }))
    .pipe(
      through(function (chunk, encoding, next) {
        this.push(`${chunk} ${entry.path}\n`);
        next();
      })
    )
    .pipe(stdout);
});

stdin.pipe(crypto.createDecipheriv(...cipherData)).pipe(parser);
