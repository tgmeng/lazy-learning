function monitor(obj, cb) {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  Object.keys(obj).forEach((key) => {
    defineReactive(obj, key, cb);
  });
}

function defineReactive(obj, key, cb) {
  let value = obj[key];
  monitor(value, cb);
  Object.defineProperty(obj, key, {
    get() {
      return value;
    },
    set(neoValue) {
      cb(neoValue, value);
      value = neoValue;
      monitor(neoValue, cb);
    },
  });
}

const obj = {
  // name: 'root-name',
  test: [{ name: 'arr-name' }],
  prop: {
    name: 'prop-name',
  },
};

monitor(obj, (value, oldValue) => {
  console.log(oldValue, '->', value);
});

obj.test = '213';

// obj.prop.name = 'changed';
// obj.prop = { name: 'neo' };
// obj.prop.name = 'neo haha'
