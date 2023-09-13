//          0
//     1           2
//   3    4     5     6
// 7  8  9 10 11 12 13 14

import { swap } from '../utils';

function getParentIndex(index: number) {
  return Math.floor((index - 1) / 2);
}

function getLeftChildIndex(index: number) {
  return index * 2 + 1;
}

export function heapSort(arr: number[]) {
  if (arr.length === 1) {
    return arr;
  }
  // 构造大顶堆
  for (let index = 1; index < arr.length; index++) {
    let parentIndex = getParentIndex(index);
    let currentIndex = index;
    while (parentIndex >= 0) {
      if (arr[parentIndex] < arr[currentIndex]) {
        swap(arr, parentIndex, currentIndex);
      }
      currentIndex = parentIndex;
      parentIndex = getParentIndex(currentIndex);
    }
  }
  for (let index = arr.length - 1; index >= 1; index--) {
    swap(arr, 0, index);
    let endIndex = index - 1;
    let currentIndex = 0;
    while (currentIndex <= endIndex) {
      const leftIndex = getLeftChildIndex(currentIndex);
      const rightIndex = leftIndex + 1;
      if (leftIndex <= endIndex && arr[currentIndex] < arr[leftIndex]) {
        if (rightIndex <= endIndex && arr[leftIndex] < arr[rightIndex]) {
          swap(arr, currentIndex, rightIndex);
          currentIndex = rightIndex;
        } else {
          swap(arr, currentIndex, leftIndex);
          currentIndex = leftIndex;
        }
      } else if (
        rightIndex <= endIndex &&
        arr[currentIndex] < arr[rightIndex]
      ) {
        swap(arr, currentIndex, rightIndex);
        currentIndex = rightIndex;
      } else {
        break;
      }
    }
  }
  return arr;
}
