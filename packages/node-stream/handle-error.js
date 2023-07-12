const { PassThrough } = require('stream');

const passThrough = new PassThrough();

process.stdin
  .on('error', (err) => {
    console.error('stdin encountered an error:', err);
  })
  .pipe(passThrough)
  .on('error', (err) => {
    console.error('passThrough encountered an error:', err);
  })
  .pipe(process.stdout)
  .on('error', (err) => {
    console.error('stdout encountered an error:', err);
  });

setTimeout(() => {
  passThrough.emit('error', new Error('Somewthing went wrong!'));
}, 1000);
