ul.addEventListener("mousedown", (event) => {
	// Preventing selection on mousedown
	event.preventDefault();
});

ul.addEventListener("click", function (event) {
	// if no key of Ctrl or Cmd  is pressed clear selection
	if (event.metaKey == false && event.ctrlKey == false) {
		for (li of this.children) {
			li.classList.remove("selected");
		}
	}
	// adds the class .selected for clicked on <li>
	if (event.target.tagName == "LI") {
		event.target.classList.toggle("selected");
	}
	
});
