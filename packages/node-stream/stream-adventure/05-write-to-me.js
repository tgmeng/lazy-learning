const { Writable } = require('stream');

const myWritable = new Writable({
  write(chunk, encoding, callback) {
    console.log(`writing: ${chunk}`);
    callback();
  },
});

// class MyWritable extends Writable {
//   _write(chunk, encoding, callback) {
//     console.log(`writing: ${chunk}`);
//     callback();
//   }
// }

process.stdin.pipe(myWritable);
