var person = {
  name: 'Juan',
  lastname: 'Doe',
  getFullName : function() {
    var fullname = this.name + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function () {
  console.log('Logged: ' + this.getFullName());
  console.log(this);
  // console.log('Arguments', arguments);
}


var logPersonName = logName.bind(person);
logPersonName();

logName.call(person);
