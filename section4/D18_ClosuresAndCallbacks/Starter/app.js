function sayHiLater() {
  var greeting = 'Hi';
  setTimeout(function () {
    console.log(greeting);
  }, 3000)
}

// sayHiLater();


function a() {
  console.log('a');
}
function b() {
  console.log('b');
}
 function tellMe(callback) {
   var a=100;
   var b=200;
   console.log(a,b);
   callback(); //runs when its dnoe
   
 }

 tellMe(function () {
  console.log('callback');
 })
