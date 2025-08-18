// https://www.codewars.com/kata/563a631f7cbbc236cf0000c2/solutions/javascript

// Messi Goals : 
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals
} 

// Make negative:
function makeNegative (num) {
  return num <= 0 ? num : -num;
}

// Game Move:
function move (position, roll) {
  return position + roll * 2
}

// Personalized Message:
function greet (name, owner) {
 return name === owner ? 'Hello boss' : 'Hello guest';
}

// Keep Hydrated :
function litres (time) {
  return  Math.floor(time / 2);
}

// Opposites Attract  : 
function lovefunc(flower1, flower2){
  return (flower1+flower2) % 2 === 0 ? false : true ;
}
