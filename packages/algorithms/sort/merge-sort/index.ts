export function merge(a: number[], b: number[]) {
  let aIndex = 0;
  let bIndex = 0;

  let result: number[] = [];

  while (aIndex < a.length && bIndex < b.length) {
    if (a[aIndex] <= b[bIndex]) {
      result.push(a[aIndex]);
      aIndex++;
    } else {
      result.push(b[bIndex]);
      bIndex++;
    }
  }

  while (aIndex < a.length) {
    result.push(a[aIndex]);
    aIndex++;
  }

  while (bIndex < b.length) {
    result.push(b[bIndex]);
    bIndex++;
  }

  return [...result, ...a.slice(aIndex), ...b.slice(bIndex)];
}

export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);

  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}
