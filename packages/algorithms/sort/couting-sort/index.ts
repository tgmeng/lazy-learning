export function countingSort(arr: number[]) {
  if (arr.length <= 1) {
    return arr;
  }

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const countArr = new Array(max - min + 1).fill(0);

  arr.forEach((value) => {
    countArr[value - min]++;
  });

  const result: number[] = [];

  countArr.forEach((count, index) => {
    if (count === 0) {
      return;
    }

    while (count > 0) {
      result.push(index + min);
      count--;
    }
  });

  return result;
}
