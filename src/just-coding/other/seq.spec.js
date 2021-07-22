import { seq } from './seq';

it('seq', async () => {
  const a = () => Promise.resolve('a');
  const b = () => Promise.resolve('b');
  const c = () => Promise.resolve('c');

  expect(await seq([a, b, c])).toEqual(['a', 'b', 'c']);
});
