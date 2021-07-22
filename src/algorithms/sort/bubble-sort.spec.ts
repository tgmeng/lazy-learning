import { bubbleSort, bubbleSortP } from './bubble-sort';

function numberAsc(a, b) {
  return a - b;
}

test('bubbleSort', () => {
  const arr = [1, 3, 2, 4];
  const result = [...arr].sort(numberAsc);

  expect(bubbleSort(arr)).toEqual(result);
});

test('bubbleSortP', () => {
  // const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 9];
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const result = [...arr].sort(numberAsc);

  expect(bubbleSortP(arr)).toEqual(result);
});
