var a = 10;
function foo3() {
  console.log("inside foo 3", a);
}

function foo2() {
  var a = 20;
  function foo() {
    console.log("inside foo", a);
  }
  foo();
  foo3();
  console.log("inside foo 2", a);
}
foo2();
