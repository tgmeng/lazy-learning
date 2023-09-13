import { swap } from '../utils';

export function putSmallFrontPartition(
  arr: number[],
  left: number,
  right: number
) {
  const pivot = arr[right];

  let smallRightIndex = left - 1;
  for (let index = left; index < right; index++) {
    if (arr[index] < pivot) {
      smallRightIndex++;
      swap(arr, smallRightIndex, index);
    }
  }

  smallRightIndex++;

  swap(arr, smallRightIndex, right);
  return smallRightIndex;
}

function randomIndex(left: number, right: number) {
  return Math.floor(Math.random() * (right - left + 1)) + left;
}

export function leftRightSwapPartition(
  arr: number[],
  left: number,
  right: number
) {
  const pivotIndex = randomIndex(left, right);
  swap(arr, left, pivotIndex);


  const pivot = arr[left];
  let i = left + 1;
  let j = right;

  while (i <= j) {
    while (i <= j && arr[i] <= pivot) {
      i++;
    }
    while (i <= j && arr[j] > pivot) {
      j--;
    }

    if (i < j) {
      swap(arr, i, j);
    }
  }

  swap(arr, left, j);

  return j;
}
