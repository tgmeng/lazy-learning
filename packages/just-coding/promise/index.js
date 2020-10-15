export function PromiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const tasks = [...iterable];
    let len = tasks.length;
    const res = [...new Array(len)];
    tasks.forEach((task, index) => {
      task.then((value) => {
        res[index] = value;
        len--;
        if (len === 0) {
          resolve(res);
        }
      }, (err) => {
        reject(err);
      });
    }, Promise.resolve());
  });
}
