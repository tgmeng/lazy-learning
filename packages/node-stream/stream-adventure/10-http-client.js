const { request } = require('http');
const { stdin, stdout } = require('process');

const req = request(
  'http://localhost:8099/',
  {
    method: 'POST',
  },
  (res) => {
    res.pipe(stdout);
  }
);

stdin.pipe(req);
