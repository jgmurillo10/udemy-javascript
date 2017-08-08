function makeGreeting(language) {
  return function(firstname, lastname) {
    if (language === 'en') {
      console.log('Hi',firstname,lastname);
    }
    else if (language === 'es') {
      console.log('Que dicen los hptas',firstname,lastname);
    }
  }
}

var greetEnglish = makeGreeting('en');
var greetSpanish = makeGreeting('es');


greetSpanish('Juan','Murillo');
greetEnglish('j','m')
