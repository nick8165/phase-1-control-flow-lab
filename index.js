function scuberGreetingForFeet(distanceInFeet){
  if (distanceInFeet <= 400) {
     return 'This one is on me!';
  } else if (distanceInFeet > 2500) {
      return 'No can do.';
  } else if (distanceInFeet > 2000) {
      return 'I will gladly take your thirty bucks.';
  }
}

function ternaryCheckCity(city){
 return city === 'NYC'? 'Ok, sounds good.':'No go.';
  
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    case 'Bye':
      return 'thanks for everything';
    default:
      return 'Bye.';
  }
}

let distanceInFeet = 0;
let city = '';
let tip = '';
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));
console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Houston'));
console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('Bye'));
console.log(switchOnCharmFromTip());
