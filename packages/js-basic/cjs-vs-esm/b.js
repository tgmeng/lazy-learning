const a = require("./a.js");

console.log("b", a);

setTimeout(() => {
  console.log("b(setTimeout)", a);

  const aa = require("./a.js");
  console.log("b(setTimeout)", aa);
  console.log("b(setTimeout)", aa === a);
});

module.exports = {
  name: "b",
};
