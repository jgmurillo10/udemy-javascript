function greet(txt) {
  return function(name) {
    console.log(txt + ' ' + name);
  }
}

greet('Hi')('Juan');
