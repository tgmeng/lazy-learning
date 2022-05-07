const concat = require('concat-stream');
const { stdout, stdin } = require('process');

stdin.pipe(
  concat((body) => {
    stdout.write(body.reverse());
  })
);
