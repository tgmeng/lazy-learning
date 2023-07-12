const crypto = require('crypto');
const { stdout, stdin } = require('process');

const stream = crypto.createDecipheriv(
  'aes256',
  process.argv[2],
  process.argv[3]
);
stdin.pipe(stream).pipe(stdout);
