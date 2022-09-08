/*----- constants -----/
riddle trivia area / answer box/ riddles
*/
const buttons = document.getElementById('buttons');

const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const riddle1 = 'What has a head, a tail, is silver, and has no legs?';
const riddle2 = 'What is more valuable when broken?';
const riddle3 = 'What gets wet as it dries?';
const scoreEl = document.getElementById('score');
const riddleEl = document.querySelector('#riddle');

button1.addEventListener('click', function () {
	button1.innerText = 'Try again!';
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

function renderOne() {
	riddleEl.innerText = riddle1;
	button1.innerText = '1. a fish';
	button2.innerText = '2. a fork';
	button3.innerText = '3. a coin';
	scoreEl.innerText = 'Score: 0/3';
	button1.addEventListener('click', function () {
		button1.innerText = 'Try again!';
	});
	button2.addEventListener('click', function () {
		button2.innerText = 'Try again!';
	});
	button3.addEventListener('click', function () {
		(button3.innerText = 'Correct!!!'),
			alert('You got the 1st riddle! but you must answer thrice!');
		renderTwo();
	});
}

function renderTwo() {
	riddleEl.innerText = riddle2;
	button1.innerText = '1. a carriage';
	button2.innerText = '2. an egg';
	button3.innerText = '3. a dragon';
	scoreEl.innerText = 'Score: 1/3';
	button1.addEventListener('click', function () {
		button1.innerText = 'Try again!';
	});
	button2.addEventListener('click', function () {
		(button2.innerText = 'Correct!!!'),
			alert(
				'You got the 2nd riddle! You must one get the last if you wish to pass!'
			);
		renderThree();
	});
	button3.addEventListener('click', function () {
		button3.innerText = 'Try again!';
	});
}

function renderThree() {
	riddleEl.innerText = riddle3;
	button1.innerText = '1. an ork';
	button2.innerText = '2. a towel';
	button3.innerText = '3. an umbrella';
	scoreEl.innerText = 'Score: 2/3';
	button1.addEventListener('click', function () {
		button1.innerText = 'Try again!';
	});
	button2.addEventListener('click', function () {
		(button2.innerText = 'Correct!!!'),
			alert(
				'You have chosen wisely! You shall cross thy bridge with permission!'
			);
		scoreEl.innerText = 'Score: 3/3';
		init();
	});
	button3.addEventListener('click', function () {
		button3.innerText = 'Try again!';
	});
}
function init() {
return alert("'Halt!!!! who goes there??? you want to cross my bridge do you?? If you wish to pass then riddles I shall ask'");
}
renderOne()