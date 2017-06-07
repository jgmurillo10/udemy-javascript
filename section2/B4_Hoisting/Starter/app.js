b();
console.log(a);

var a = 'Hello World!';

function b() {
    console.log('called b!');
}

/**
It is not like the var declarations code are moved to the top.
like var a;
console.log(a);
a = 'aa';
Execution context is created in two phases
1. Creation:
  Global object
  this
  outer environment
    setup memory space for vars and functions
    "hoisting"
    (before code runs line by line, js engine has already set aside memory space for variables and functions)
    vars and funcs exists in memory.
2. Execution
when the assignments are made
kind of a=b;
in creation phase js engine doesnot know value of a, instead asign value undefined (placeholder)
  **/
