export function insertionSort(arr: number[]) {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 1; j--) {
      if (arr[j] >= arr[j - 1]) {
        break;
      }
      count++;
      [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
    }
  }

  return arr;
}
