// IIFE
var firstname = 'John';

(function(global,name) {

    var greeting = 'Hello';
    console.log(greeting + ' ' + name);

}(this,firstname)); // IIFE

console.log(greeting);
