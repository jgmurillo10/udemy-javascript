function greet(name, lastname, lang) {
  console.log(name, lastname, lang);
  console.log(arguments);
};

greet();
console.log('--------------');
greet('John');
console.log('--------------');
greet('John', 'Doe');
console.log('--------------');
greet('John', 'Doe', 'ES');
