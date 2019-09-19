import { isNil } from '../../../util';

export function filter(array, callback, thisArg) {
  const res = [];
  const _this = isNil(thisArg) ? this : thisArg;
  for (let index = 0; index < array.length; index++) {
    if (callback.call(_this, array[index], index, array)) {
      res.push(array[index]);
    }
  }

  return res;
}
