export async function seq(array) {
  return array.reduce(
    (chain, task) => chain.then((res) => task().then((value) => [...res, value])),
    Promise.resolve([]),
  );
}

export async function seq2(array) {
  const res = [];
  for (const task of array) {
    res.push(await task());
  }
  return res;
}
