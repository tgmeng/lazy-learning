/**
 * 这题比较诡异, 这里有解释
 * https://github.com/nodeschool/discussions/issues/346#issuecomment-293132881
 */

const { stdin, stdout } = require('process');
const through2 = require('through2');
const trumpet = require('trumpet');

const tr = trumpet();

const ws = tr.select('.loud').createStream();

ws.pipe(
  through2(function (chunk, _, next) {
    this.push(chunk.toString().toUpperCase());
    next();
  })
).pipe(ws);

stdin.pipe(tr).pipe(stdout);
