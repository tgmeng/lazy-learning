const through = require('through2');
const combine = require('stream-combiner');
const zlib = require('zlib');

module.exports = () => {
  let currentGenre = null;
  let genreList = [];
  return combine(
    // read newline-separated json,
    // group books into genres,
    through.obj(
      function (chunk, encoding, next) {
        const obj = JSON.parse(chunk);
        if (obj.type === 'genre') {
          if (currentGenre) {
            this.push(JSON.stringify(currentGenre) + '\n');
          }
          currentGenre = { name: obj.name, books: [] };
          genreList.push(currentGenre);
        } else if (obj.type === 'book') {
          currentGenre.books.push(obj.name);
        }
        next();
      },
      function (next) {
        if (currentGenre) {
          this.push(JSON.stringify(currentGenre) + '\n');
        }
        next();
      }
    ),
    // then gzip the output
    zlib.createGzip()
  );
};
