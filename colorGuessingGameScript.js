var answerKey;
var squares;
var messageDisplay=document.querySelector('#message');
function correct(obj){
	messageDisplay.textContext='correct';
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=obj.style.backgroundColor;
	}
}

function wrongChoice(block){
	console.log(block.style.backgroundColor);
	messageDisplay.textContent='Try Again';
	block.style.backgroundColor='#232323';
}


function initGame() {
	squares = document.querySelectorAll(".square")
	answerSquare=Math.floor(Math.random()*squares.length);
	for (var i=0;i<squares.length;i++){
		//generate and format random colors
		var randR=Math.floor(Math.random()*254);
		var randG=Math.floor(Math.random()*254);
		var randB=Math.floor(Math.random()*254);
		//color='#'+randR.toString(16)+randG.toString(16)+randB.toString(16);
		color='rgb('+randR.toString()+', '+randG.toString()+', '+randB.toString()+')';
		//
		if (i==answerSquare){
			document.querySelector("#title").textContent=randR.toString()+','+randG.toString()+','+randB.toString();
			answerKey=color;
		}
		squares[i].style.backgroundColor=color;
		squares[i].addEventListener('click', function(){
			console.log(answerKey);
			if (this.style.backgroundColor==answerKey){
				correct(this);
			}
			else{
				wrongChoice(this);
			}
		});
	}
}

setTimeout(initGame(),50000);