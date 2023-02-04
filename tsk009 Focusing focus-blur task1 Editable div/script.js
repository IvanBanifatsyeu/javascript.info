// create a textarea element and add it after the view and hide it
let isFocus = false;
let view = document.querySelector("#view");
let texarea = document.createElement("textarea");
let body = document.body;
let innerText = view.innerHTML;
view.after(texarea);
texarea.classList.add("edit");
texarea.style.display = "none";
// adding the ability to focus for the div tag
view.tabIndex = "0";
// The function of replacing tags with text
function blur(target, activ) {
	innerText = target.value;
	target.style.display = "none";
	activ.style.display = "";
	activ.innerHTML = innerText;
	activ.focus();
	target.blur();
	isFocus == false;
}

document.addEventListener("click", () => {
	// when a div is clicked, we hide it and show textarea
	if (document.activeElement == view) {
		texarea.value = innerText;
		view.style.display = "none";
		texarea.style.display = "";
		texarea.focus();
		isFocus = true;
		// when Enter is pressed on textarea or the focus goes away from textarea, we show div instead of textarea
		texarea.addEventListener("keydown", (e) => {
			if (e.code == "Enter") {
				blur(texarea, view);
			}
		});
	} else if (document.activeElement !=view && isFocus == true) {
		blur(texarea, view);
	}
});
