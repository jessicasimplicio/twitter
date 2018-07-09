/*
VERSÃO 0.0.1
- Crie um formulário que permita inserir um texto e um botão para "twittar". --> html
- Adicione um evento de click ao botão ou de submit no formulário. ok
- No evento, obter o texto. --> salvar o texto numa variável ok
- Adicione o texto ao HTML.
criar um elemento <p> com o texto do input no .js
*/

var container = document.getElementsByClassName("container")[0];
document.getElementsByClassName("btn-tweet")[0].disabled = true;
document.getElementById("counter").textContent = 140;

function clickButton() {
	var text = document.getElementsByClassName("message")[0].value;
	var newPar = document.createElement("p");
	newPar.textContent = text;
	container.appendChild(newPar);
	document.getElementsByClassName("message")[0].value = '';
	document.getElementsByClassName("btn-tweet")[0].disabled = true;
}

/* VERSÃO 0.0.2
-Não inserir texto vazio (desativar o botão "twittar").
	comecar botao desabilitado:
	document.getElementById("btn-tweet").disabled = true;
	quando comeca a digitar, habilita de volta

-Conte o número de caracteres de forma regressiva.
	QUando algo é pressionado (excessao de enter e espaço) uma variavel é decrementada

*/

function enableButton(event) {
	document.getElementsByClassName("btn-tweet")[0].disabled = false;
  var charCode = event.which || event.keyCode; //pega o keyCode do caracter
  console.log(typeof(charCode));
  console.log(charCode);
  if (charCode !== 32 || charCode !== 13){ counterDecrease(); } //nao ta funcionando
}

function counterDecrease() {
	document.getElementById("counter").textContent -= 1;;
}



