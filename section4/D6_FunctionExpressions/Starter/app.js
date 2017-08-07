greet();
// function statement
function greet() {
  console.log('hi');
}

() => {
  console.log('anon');
}
// function expression
var anonymousGreet = function () {
  console.log('hi2');
}
anonymousGreet();


function log(a) {
  console.log(a);
  a("a","b"); 
}

log(function(x,y) {
  console.log('hi',x,y);
})
