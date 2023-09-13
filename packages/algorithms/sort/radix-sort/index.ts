export function radixSort(arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  }

  const max = Math.max(...arr);
  const min = Math.min(...arr);

  let digitLen = String(max - min).length;

  let result = arr;
  for (let digit = 0; digit < digitLen; digit++) {
    const buffer: number[][] = Array.from({ length: 10 }, () => []);
    let base = Math.pow(10, digit);
    for (let index = 0; index < result.length; index++) {
      const radixValue = Math.floor((result[index] - min) / base) % 10;
      buffer[radixValue].push(result[index]);
    }
    result = buffer.flat();
  }

  return result;
}
