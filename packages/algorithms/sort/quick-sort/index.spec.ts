import { createSortTestCases } from '../utils/test';
import { newArrayQuickSort, quickSort } from './index';
import { leftRightSwapPartition, putSmallFrontPartition } from './utils';

createSortTestCases('quickSort(leftRightSwapPartition)', (arr) =>
  quickSort(arr, leftRightSwapPartition)
);

createSortTestCases('quickSort(putSmallFrontPartition)', (arr) =>
  quickSort(arr, putSmallFrontPartition)
);

createSortTestCases('newArrayQuickSort', newArrayQuickSort);
