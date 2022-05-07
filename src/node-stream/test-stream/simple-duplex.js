const Duplex = require('stream').Duplex;

const duplex = Duplex();

// 可读端底层读取逻辑
duplex._read = function () {
  this._readNum = this._readNum || 0;
  if (this._readNum > 1) {
    this.push(null);
  } else {
    this.push('' + this._readNum++);
  }
};

// 可写端底层写逻辑
duplex._write = function (buf, enc, next) {
  // a, b
  process.stdout.write('_write ' + buf.toString() + '\n');
  next();
};

// 0, 1
duplex.on('data', (data) => console.log('ondata', data.toString()));

duplex.write('a');
duplex.write('b');

duplex.end();
