import { test, expect, describe } from 'vitest';

function numberAsc(a: number, b: number) {
  return a - b;
}

const TestCases = [
  {
    title: '正常情况',
    input: [5, 2, 9, 1, 7, 3, 8, 4, 6, 10],
  },
  {
    title: '带有负数情况',
    input: [5, 2, 9, 1, 7, 3, 8, -1, -2, -5, 4, 6, 10],
  },
  {
    title: '空输入',
    input: [],
  },
  {
    title: '重复元素',
    input: [3, 1, 2, 3, 4, 2, 5, 1, 4, 5],
  },
  {
    title: '部分有序',
    input: [1, 2, 3, 4, 6, 5, 7, 8, 10, 9],
  },
  {
    title: '大数据量',
    input: [
      100, 37, 246, 33, 890, 421, 756, 144, 678, 555, 909, 222, 888, 999, 222,
      666, 777, 888, 111, 333,
    ],
  },
  {
    title: '逆序',
    input: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
  },
  {
    title: '完全相同',
    input: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
  },
  {
    title: '部分相同',
    input: [3, 1, 2, 4, 5, 2, 6, 4, 3, 1],
  },
];

// const TestCases = [
//   {
//     title: '正常情况',
//     input: [5, 2, 9, 1, 7, 3, 8, 4, 6, 10],
//   },
// ];

export function createSortTestCases(
  name: string,
  sort: (arr: number[]) => number[]
) {
  describe(`${name}`, () => {
    TestCases.forEach((testCase) => {
      test(testCase.title, () => {
        const copy = [...testCase.input];
        copy.sort(numberAsc);
        expect(sort(testCase.input)).toEqual(copy);
      });
    });
  });
}
