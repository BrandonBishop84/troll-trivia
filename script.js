console.log('supdog');
/*----- constants -----/
riddle trivia area / answer box/ riddles
*/
const buttons = document.getElementById('buttons');

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const riddle1 = 'What has a head, a tail, is brown, and has no legs?';
const riddle2 = 'What is more valuable when broken?';
const riddle3 = 'What gets wet as it dries?';

const riddleEl = document.querySelector('#riddle');
console.log(riddleEl);
riddleEl.innerText = riddle1;
buttons.addEventListener('click', function () {
	button1.innerText = 'hello';
});
/*----- cached element references 
need to have questions appear after completing others
-----*/

/*----- event listeners -----
opening prompt/answer box/ scoreboard 
*/

/*----- functions -----
init function
render function to reset new game
function for question area to switch to new questions.
answer area to have function for answer selected.
function to have score adjusted as progress.
*/

function renderOne() {}
renderOne();
