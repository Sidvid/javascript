var a = "a";
try {
  throw new Error("BFE.dev");
} catch {
  var a = "a1";
}
console.log(a);

var b = "b";
try {
  throw new Error("BFE.dev");
} catch (b) {
  var b = "b1";
}
console.log(b);
