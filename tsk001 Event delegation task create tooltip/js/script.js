// creating variables with elements
let tooltip = document.querySelector(".tooltip");
let button1 = document.querySelectorAll("button")[0];
let button2 = document.querySelectorAll("button")[1];

// hiding tooltip
tooltip.hidden = true;

// function to create an object with element coordinates
function getCoords(elem) {
	let box = elem.getBoundingClientRect();

	return {
		top: box.top + window.pageYOffset,
		right: box.right + window.pageXOffset,
		bottom: box.bottom + window.pageYOffset,
		left: box.left + window.pageXOffset,
	};
}

// mouseover event listener
document.addEventListener("mouseover", (event) => {
	// cut everything except <button>
	if (event.target.tagName != "BUTTON") return;

	// add an attribute to hide and show
	tooltip.hidden = false;

	// create object with coordinates current event.target
	let coords = getCoords(event.target);

	// add text from attribute data
	tooltip.innerHTML = event.target.dataset.tooltip;

	// condition for checking free space, taking into account scrolling
	if (event.target.getBoundingClientRect().top > tooltip.offsetHeight + 5) {
		tooltip.style.left = coords.left - 8 + "px";
		tooltip.style.top = coords.top - tooltip.offsetHeight - 5 + "px";
	} else {
		tooltip.style.left = coords.left - 8 + "px";
		tooltip.style.top = coords.bottom + 5 + "px";
	}
});

// mouseout event listener
document.addEventListener("mouseout", (event) => {
	if (event.target.tagName != "BUTTON") return;
	tooltip.hidden = true
	
});