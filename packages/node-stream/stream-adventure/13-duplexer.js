const { spawn } = require('child_process');
const duplexer = require('duplexer2');

module.exports = (cmd, args) => {
  const childProc = spawn(cmd, args);
  const r = duplexer(childProc.stdin, childProc.stdout);
  return r;
};
