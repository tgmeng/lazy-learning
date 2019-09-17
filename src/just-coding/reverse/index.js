export function reverse(str) {
  const arr = str.split('');

  let i = 0;
  let j = str.length - 1;

  while (i < j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i += 1;
    j -= 1;
  }

  return arr.join('');
}
