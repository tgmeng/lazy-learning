import { insertionSort } from '../insertion-sort';

export function bucketSort(arr: number[]) {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  const bucketSize = 5;
  const bucketCount = Math.ceil((max - min + 1) / bucketSize);
  const bucket: number[][] = Array.from({ length: bucketCount }, () => []);
  for (let index = 0; index < arr.length; index++) {
    const value = arr[index];
    const bucketIndex = Math.floor((value - min) / bucketSize);
    if (bucket[bucketIndex] === undefined) {
      console.log(arr, bucket, bucketIndex, value);
    }
    bucket[bucketIndex].push(value);
  }
  for (let index = 0; index < bucket.length; index++) {
    if (bucket[index].length > 0) {
      insertionSort(bucket[index]);
    }
  }
  return bucket.flat();
}
