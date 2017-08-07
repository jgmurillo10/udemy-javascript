console.log(this);

function a() {
  console.log(this);
  newVar = 'hello';
}

var b  = function () {
  console.log(this);
}

// console.log(newVar);
a();
b();


var c = {
  name: 'Juan',
  log: function() {
    var self = this;
    self.name = 'Pedro'
    console.log(self);
    var setName = function (newName) {
      self.name = newName;
      console.log(self);
    }
    setName('Carla');
  }

}
c.log();

console.log(c);
