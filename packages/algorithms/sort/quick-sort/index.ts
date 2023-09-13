function actualQuickSort(
  arr: number[],
  left: number,
  right: number,
  /** 自定义划分规则 */
  partition: (arr: number[], left: number, right: number) => number
) {
  if (left >= right) {
    return;
  }
  const pivotIndex = partition(arr, left, right);
  actualQuickSort(arr, left, pivotIndex - 1, partition);
  actualQuickSort(arr, pivotIndex + 1, right, partition);
}

export function quickSort(
  arr: number[],
  partition: (arr: number[], left: number, right: number) => number
) {
  actualQuickSort(arr, 0, arr.length - 1, partition);
  return arr;
}

export function newArrayQuickSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  const pivot = arr[0];

  const left = [];
  const right = [];
  for (let index = 1; index < arr.length; index++) {
    const value = arr[index];
    if (arr[index] <= pivot) {
      left.push(value);
    } else {
      right.push(value);
    }
  }

  return [...newArrayQuickSort(left), pivot, ...newArrayQuickSort(right)];
}
