let internationalization = function(ISO) {
  switch(ISO) {
    case 'en':
      console.log('Hi!');
      break;
    default:
      console.log('Sorry, input requires a ISO 639-1 code');
  }
}

internationalization('en');

//when using return statements, one line can be used and the break keyword can be omitted
// ex: case 'en': return 'Hi!';