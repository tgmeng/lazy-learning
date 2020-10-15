import a from "./a.js";

// Uncaught ReferenceError: Cannot access 'a' before initialization
// console.log("b", a);

setTimeout(() => {
  console.log("b(setTimeout)", a);

  import("./a.js").then(aa => {
    console.log("b(setTimeout)", aa.default);
    console.log("b(setTimeout)", aa.default === a);
  });
});

export default {
  name: "b",
};
