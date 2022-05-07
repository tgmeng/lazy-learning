const { Writable } = require('stream');
const duplexer = require('duplexer2');

module.exports = (counter) => {
  const countByCountry = {};
  const writable = new Writable({
    write(data, encoding, done) {
      countByCountry[data.country] = (countByCountry[data.country] || 0) + 1;
      done();
    },
    objectMode: true,
  });
  writable.once('finish', () => {
    counter.setCounts(countByCountry);
  });
  return duplexer({ objectMode: true }, writable, counter);
};
