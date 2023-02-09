'use strict'
// background Modal form
function showFon() {
	let fon = document.createElement("div");
	fon.id = "fon";
	document.body.append(fon);
	// prohibit page scrolling
	document.body.style.overflowY = "hidden";
}

function hideFon() {
	document.getElementById('fon').remove();
	document.body.style.overflowY = "";
}

function showPromt(text, callback) {
	// show background
	showFon();
	//creating variables
	let form = document.querySelector("#prompt-form");
	let container = document.querySelector("#prompt-form-container");
	//adding text to the modal window
	document.getElementById("prompt-message").innerHTML = text;
	// explicitly create the value property
	 form.text.value = "none";

	// processing an event by pressing the cancel button
	form.cancel.onclick = function  (){
		complete(null)
	}
	// processing an event by pressing the escape button
	document.onkeydown = function (e){
		if (e.key == 'Escape' ) {
			complete(null)
		}
	}
	// creating variables of the extreme elements of the form
	let lastElem = form.elements[form.elements.length - 1];
	let firstElem = form.elements[0];
	//let's circle the focus on 3 elements
	lastElem.onkeydown = function(e) {
		if (e.key == 'Tab'  && !e.shiftKey ) {
			firstElem.focus();
			return false;
        }
	};
	
	firstElem.onkeydown = function(e) {
		if (e.key == 'Tab'  &&  e.shiftKey ) {
			lastElem.focus();
			return false;
        }
	};

    // we will open the container
	container.style.display = 'block';
	//  default focus
	form.elements.text.focus();
     

	// hang the submit handler
	form.onsubmit = function () {
		// the entered text is added to the value variable
		let value = form.text.value;
		// checking for emptiness
		if (value == "") return false;
        // if the input is not empty, run the completion function
		complete(value);
		// Instead of event.preventDefault() then the form won’t be sent to the server
		return false;
	};

	function complete(value) {
		// hiding the background
	    hideFon();
		// hiding the modal window
		container.style.display = "none";
		// explicitly removing the button click handler
		document.onkeydown = null;
		// starting the output of the content in alert
		callback(value);
	}
}

document.getElementById("show-button").onclick = function () {
	showPromt(
		`Введите что-нибудь...
		<br>Пожалуйста.. :`,
		function (value) {
			alert(`Вы ввели  ${value}`);
		}
	);
};


