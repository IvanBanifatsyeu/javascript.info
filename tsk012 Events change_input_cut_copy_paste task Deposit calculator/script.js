let form = document.forms.calculator;
let heightBefore = document.querySelector("#beforeMoney");

function getValues() {
	let deposit = document.querySelector(`input[name='money']`).value;
	if (!deposit) return;
	let percent = document.querySelector(`input[name='interest']`).value / 100;
    if (!percent) return;
	let term = document.querySelector(`select[name='months']`).value / 12;
    
	let result = Math.round(deposit * (1 + percent) ** term);
	heightBefore.style.height = (deposit/ result) * 100 + "px";
	document.querySelector("#money-before").innerHTML = deposit;
	document.querySelector("#money-after").innerHTML = result;
}
getValues();

form.oninput = function () {
	getValues();
};


