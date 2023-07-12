const through = require('through2');

process.stdin
  .pipe(
    through(function write(chunk, encoding, next) {
      this.push(chunk.toString().toUpperCase());
      next();
    })
  )
  .pipe(process.stdout);
