const { Transform } = require('stream');

class UpperCaseTransform extends Transform {
  _transform(buf, env, next) {
    this.push(buf.toString().toUpperCase());
    next();
  }
}

const t = new UpperCaseTransform();

t.on('data', (data) => process.stdout.write(data + '\n'));
t.on('finish', (data) => process.stdout.write('DONE\n'));

t.write('hello');
t.write('world');

t.end();
