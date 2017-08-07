let objectLiteral = {
  firstName: "Juan",
  isAProgrammer: true
};

console.log(JSON.stringify(objectLiteral));

let jsonout = JSON.parse('{"firstName":"Juan", "isAProgrammer":true}');
console.log(jsonout);
