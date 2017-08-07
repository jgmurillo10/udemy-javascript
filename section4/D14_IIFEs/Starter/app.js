// function statement
function greet(name) {
  console.log('Hi ' + name);
};
greet('Jota');
// function expression
var greetFunc = (name) => {
  console.log('Hi ' + name);
};

greetFunc('hyab');


//using IIFE ( inmediatly invoked function expression)

var greetIIFE = function (name) {
  console.log('hi '+name);
}('Juan');





//IIFE
(function (name) {
  var greeting = 'Hello ';
  console.log(greeting + name);;
}('Gin'));
