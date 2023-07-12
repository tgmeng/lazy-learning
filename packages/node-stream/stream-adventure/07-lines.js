const through = require('through2');

let i = 0;

process.stdin
  .pipe(
    through(function (chunk, _, next) {
      const result =
        i % 2 !== 0
          ? chunk.toString().toUpperCase()
          : chunk.toString().toLowerCase();
      i++;
      this.push(result);
      next();
    })
  )
  .pipe(process.stdout);
