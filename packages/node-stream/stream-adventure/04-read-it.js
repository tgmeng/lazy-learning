const { Readable } = require('stream');

const myStream = new Readable({});
myStream._read = () => {
  myStream.push(process.argv[2]);
  myStream.push(null);
};

// class MyStream extends Readable {
//   _read(size) {
//     this.push(process.argv[2]);
//     this.push(null);
//   }
// }
// const myStream = new MyStream();

myStream.pipe(process.stdout);
