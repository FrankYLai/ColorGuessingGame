var colors = ["black", "pink", "blue", "orange", "yellow"];

setTimeout(function() {
	var squares = document.querySelectorAll(".square")
	var answerSquare=Math.floor(Math.random()*squares.length);
	for (var i=0;i<squares.length;i++){
		var randR=Math.floor(Math.random()*255);
		var randG=Math.floor(Math.random()*255);
		var randB=Math.floor(Math.random()*255);
		color='#'+randR.toString(16)+randG.toString(16)+randB.toString(16);
		if (i==answerSquare){
			document.querySelector("#title").textContent=randR.toString()+','+randG.toString()+','+randB.toString();
		}
		alert(color)
		squares[i].style.background=color;
	}
},1000);