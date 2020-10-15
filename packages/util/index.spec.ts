import { compose } from './index';

describe('util', () => {
  it('compose', () => {
    const a = (res) => res.concat('a');
    const b = (res) => res.concat('b');
    const c = (res) => res.concat('c');
    const fn = compose(a, b, c);
    const res = fn([]);
    console.log(res);
  });
});
