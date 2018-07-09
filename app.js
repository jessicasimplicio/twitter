/*
VERSÃO 0.0.1
- Crie um formulário que permita inserir um texto e um botão para "twittar". --> html
- Adicione um evento de click ao botão ou de submit no formulário. ok
- No evento, obter o texto. --> salvar o texto numa variável ok
- Adicione o texto ao HTML.
*/

var container = document.getElementsByClassName("container")[0];
document.getElementsByClassName("btn-tweet")[0].disabled = true;
var counter = document.getElementById("counter").textContent = 140;

function clickButton() {
	var text = document.getElementsByClassName("message")[0].value;
	var newPar = document.createElement("p");
	newPar.textContent = text;
	container.appendChild(newPar);
	document.getElementsByClassName("message")[0].value = '';
	document.getElementsByClassName("btn-tweet")[0].disabled = true;
}

/* VERSÃO 0.0.2
-Não inserir texto vazio (desativar o botão "tweet")

========> ARRUMAR
-Conte o número de caracteres de forma regressiva.
	QUando algo é pressionado (excessao de enter) uma variavel é decrementada
	se for Backspace tem q incrementar
*/

function enableButton(event) {
	document.getElementsByClassName("btn-tweet")[0].disabled = false;
  var charCode = event.which || event.keyCode; //pega o keyCode do caracter
  //console.log(typeof(charCode));
  //console.log(charCode);
  if (charCode !== 32 || charCode !== 13){ counterDecrease(); } //nao ta funcionando
}

function counterDecrease() {
	document.getElementById("counter").textContent -= 1;
	counter -= 1;
	console.log(typeof(counter));
	if (counter < 0){
		document.getElementsByClassName("btn-tweet")[0].disabled = true;
	} 
	if (counter <= 20 && counter > 10){
		document.getElementById("counter").style.color = "orange";
	}
	if (counter <= 10){
		document.getElementById("counter").style.color = "red";
	}
}

function counterIncrease() { //para backspace

}


/*VERSÃO 0.0.3   ==> ARRUMAR BACKSPACE
Se você passar os 140 caracteres, desative o botão. ok
Se você passar os 120 caracteres, mostre o contador com outra cor. (counter entre 20 e 10) ok
Se você passar os 130 caracteres, mostre o contador com outra cor. ok
Se você passar os 140 caracteres, mostre o contador em negativo. ok
*/


