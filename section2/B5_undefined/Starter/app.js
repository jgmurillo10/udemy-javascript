/**
Conceptual Aside: JS and 'undefined'

undefined: the var has not been set


**/
var a;
console.log(a);
a = 'Hello World'
if(a === undefined){
  console.log('a is undefined!');
}else {
  console.log('a is defined!', a);
}
