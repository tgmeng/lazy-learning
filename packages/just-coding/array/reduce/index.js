export function reduce(array, fn, initial) {
  let index = 0;
  let acc = arguments.length === 2 ? array[index++] : initial;
  while (index < array.length) {
    acc = fn(acc, array[index], index, array);
    index++;
  }
  return acc;
}

export async function reduceAsync(array, fn, initial) {
  let index = 0;

  let acc = null;
  let neoArray = null;

  if (arguments.length === 2) {
    acc = await array[index++]();
    neoArray = array.slice(1);
  } else {
    acc = initial;
    neoArray = array;
  }

  while (index < array.length) {
    // eslint-disable-next-line no-await-in-loop
    acc = fn(acc, await neoArray[index](), index, array);
    index++;
  }

  return acc;
}
