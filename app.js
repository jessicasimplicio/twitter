
var container = document.getElementById("container");
document.getElementById("btn-tweet").disabled = true;
document.getElementById("counter").textContent = 140;
var counter = 140;

function clickButton() {
	var text = document.getElementsByClassName("message")[0].value;
	var newPar = document.createElement("p");
	newPar.textContent = text;
	container.appendChild(newPar);
	document.getElementsByClassName("message")[0].value = '';
	document.getElementById("btn-tweet").disabled = true;
}

function enableButton(event) {
  var charCode = event.which || event.keyCode; 
  if((charCode >= 65 && charCode <= 90) || charCode === 32) {
  	document.getElementById("btn-tweet").disabled = false;

  	counterDecrease();
  } 
  if (charCode === 8 && counter < 140) {
  	document.getElementById("btn-tweet").disabled = false;

  	counterIncrease();
  }
}

function counterDecrease() {
	document.getElementById("counter").textContent -= 1;
	counter -= 1;
	verifyCounter(counter);
}

function counterIncrease() {
	counter += 1;
	document.getElementById("counter").textContent = counter;
	verifyCounter(counter);
}

function verifyCounter (counter) {
	if (counter < 0 || counter === 140){
		document.getElementById("btn-tweet").disabled = true;
	} 
	if (counter <= 20 && counter > 10){
		document.getElementById("counter").style.color = "orange";
	}
	if (counter <= 10){
		document.getElementById("counter").style.color = "red";
	}
	if (counter <= 140 && counter > 20){
		document.getElementById("counter").style.color = "black"
	}
}

//Ao pressionar enter (/n) aumente a área de texto de acordo com o tamanho do texto.
//	



