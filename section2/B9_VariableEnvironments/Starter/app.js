function b() {
  console.log(myVar, 'Execution Context B');

}

function a() {
  myVar = 2;
  console.log(myVar, 'Execution Context A');
  b();
  console.log(myVar, 'Execution Context A after calling b');

}
var myVar = 1;
console.log(myVar, 'Global Execution Context');
a();
