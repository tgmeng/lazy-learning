function insertChar(str, index, char) {
  return str.substring(0, index + 1) + char + str.substring(index + 1);
}

function permuteByChar(str, char) {
  const res = [];
  let i = str.length;
  while (i >= 0) {
    res.push(insertChar(str, i - 1, char));
    i--;
  }
  return res;
}

export function permute(str) {
  let res = [str.charAt(0)];

  for (let i = 1, len = str.length; i < len; i++) {
    const curChar = str.charAt(i);
    res = res.reduce(
      (_res, subStr) => _res.concat(permuteByChar(subStr, curChar)),
      []
    );
  }

  return res;
}
