let table = document.getElementById("bagua-table");
let area = null;
let isEdited = false;
table.addEventListener("click", (event) => {
	// exclude by clicking on two elements at the same time
	if (isEdited == false && event.target.tagName == "TD") {
		edit(event);
	}
});

function edit(e) {
	area = document.createElement("textarea");
	area.value = e.target.innerHTML;
	// setting the height of the Textarea as in TD
	let height = e.target.getBoundingClientRect().height;
	area.style.height = height + "px";
	//  replacing TD with Textarea
	let td = e.target;
	td.replaceWith(area);
	area.classList.add("textarea");
	isEdited = true;
	area.focus();
	// creates buttons and position them absolutely by placing them in a Div
	let buttonOk = document.createElement("button");
	let buttonCancel = document.createElement("button");
	let div = document.createElement("div");
	buttonOk.innerHTML = "OK";
	buttonCancel.innerHTML = "СANCEL";
	div.classList.add("div");
	area.after(div);
	div.append(buttonOk);
	div.append(buttonCancel);
	// processing button clicks
	div.addEventListener("click", (e) => {
		if (e.target.innerHTML == "СANCEL") {
			area.replaceWith(td);
			div.remove();
			isEdited = false;
		} else if (e.target.innerHTML == "OK") {
			area.replaceWith(td);
			td.innerHTML = area.value;
			div.remove();
			isEdited = false;
		}
	});
}
