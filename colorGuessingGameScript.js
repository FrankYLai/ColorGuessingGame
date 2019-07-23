var answerKey;
var squares;
var messageDisplay=document.querySelector('#message');
var resetButton = document.querySelector('#reset')
var level = 0;
var score = 20;

function gameOver(){
	for (var i=squares.length-1;i>=0;i--){
		squares[i].style.backgroundColor='#232323';
		squares[i].removeEventListener('click', squareClickEvent);
		if (i>=2){
			squares[i].parentNode.removeChild(squares[i])
		}
	}
	messageDisplay.textContent="Game Over";
	resetButton.textContent = 'restart';
	level=0;
	score=20;
	resetButton.addEventListener('click', resetBehavior);

}

function resetBehavior(){
	start();
	resetButton.classList.remove('enabled');
	resetButton.classList.add('disabled');
	resetButton.removeEventListener('click', resetBehavior);
}


function squareClickEvent(){
	if (this.style.backgroundColor==answerKey){
		correct(this);
	}
	else{
		wrongChoice(this);
	}
	this.removeEventListener('click', squareClickEvent);
	document.querySelector('#score').textContent=score;
	if (score<0){
		gameOver();
	}
}

//win loss behavior
function correct(obj){
	messageDisplay.textContent='correct';
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=obj.style.backgroundColor;
		squares[i].removeEventListener('click', squareClickEvent);
	}
	title.style.backgroundColor=obj.style.backgroundColor;
	resetButton.classList.remove('disabled');
	resetButton.classList.add('enabled');
	resetButton.addEventListener('click', resetBehavior);
	score+=10*(squares.length-document.querySelectorAll('.wrong').length);

}

function wrongChoice(block){
	messageDisplay.textContent='Try Again';
	block.style.backgroundColor='#232323';
	block.classList.add("wrong");
	score-=20;
}


function initGame() {
	title.removeAttribute('style');
	squares = document.querySelectorAll(".square")
	answerSquare=Math.floor(Math.random()*squares.length);
	for (var i=0;i<squares.length;i++){
		//generate and format random colors
		var randR=Math.floor(Math.random()*256);
		var randG=Math.floor(Math.random()*256);
		var randB=Math.floor(Math.random()*256);
		color='rgb('+randR.toString()+', '+randG.toString()+', '+randB.toString()+')';
		//
		if (i==answerSquare){
			document.querySelector("#colorClue").textContent=randR.toString()+','+randG.toString()+','+randB.toString();
			answerKey=color;
		}
		squares[i].style.backgroundColor=color;

		//event listeners
		squares[i].addEventListener('click', squareClickEvent);
	}
}

function start(){
	var newSquare = document.createElement("div");
	resetButton.textContent = 'Next Level';
	newSquare.classList.add('square');
	document.querySelector("#container").appendChild(newSquare);
	messageDisplay.textContent='';
	level+=1;
	document.querySelector('#score').textContent=score;
	initGame();
	document.querySelector("#level").textContent=level;
}

start();