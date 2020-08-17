// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  Counter1 is using local variables where counter uses global.
 * 2. Which of the two uses a closure? How can you tell?
 *  Counter 1 uses a closure, you can tell because the variables are stored inside the function. 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * Counter 1 is best used for an application pertaining to itself, counter 2 would be good for using the data for other uses across the application. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let min = Math.ceil(0);
  let max = Math.floor(2);
  let teamScore = Math.random() * (max - min + 1) + min;
  return Math.round(teamScore);
}

console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(inninga, inningh, ammount){
  const gameScore = {
    Away: (inninga() * ammount),
    Home: (inningh() * ammount),
  }

  return gameScore;
}

console.log(finalScore(inning,inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(finalscore, inning, number) {
  let finalHome = 0;
  let finalAway = 0; 
  for (i = 0; i < number; i++){
    let result = finalscore(inning, inning, 9);
    finalHome += result.Home;
    finalAway += result.Away;
    console.log((i+1) + ' inning: ' + result.Away + ' - ' + result.Home);
  }
  console.log('Final Score: ' + finalAway + ' - ' + finalHome);
}

scoreboard(finalScore, inning, 9);


