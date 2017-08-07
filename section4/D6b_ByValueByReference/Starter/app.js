//by value, primitives
var a = 3;
var b;
b = a;
a = 2;
console.log(a,b);


//by reference, objects
var c = {
  name: 'Juan'
};
var d;

var d = c;

console.log(c,d);

d.name='Guillermo';
console.log(c,d);
//by reference even as params
function changeGreeting(obj) {
  obj.greeting = 'differet'; //mutate
}

changeGreeting(d);
console.log(c,d);

//equals operator  sets up new memory space
c = { greeting: 'older' };
