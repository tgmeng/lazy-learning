export function swap(arr: number[], left: number, right: number) {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}
