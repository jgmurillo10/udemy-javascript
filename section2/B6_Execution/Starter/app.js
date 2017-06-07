/**
  executes code that you have written line by line
  interpreting it
  converting it
  compiling it
  executing it on the computer
**/
'use strict';
function b() {
    console.log('Called b!');
}

b();

console.log(a);

var a = 'Hello World!';
console.log(a);
/*
Incovation:
Running a function
foo()


Every function creates a new execution context

*/

function b() {
  console.log('called b');
}

function a() {
  console.log('called a');
  b();

}
a();

/*
execution stack
b()
a()
Global execution context


Every time a function is called, a new exection context
is created, the this variable is created for that function
the var within it are set up during the creation phase.

code executed line by line
*/
