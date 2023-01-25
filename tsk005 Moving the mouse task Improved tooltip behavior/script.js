let tooltipElem;

house.onmouseover = function (event) {
	let target;
     // making a selection by the nearest parent attribute data
	target = event.target.closest('[data-tooltip]')

	//  if there is a tooltip
	let tooltipHtml = target.dataset.tooltip;
	if (!tooltipHtml) return;

	// create and add div with class tooltip 
	tooltipElem = document.createElement("div");
	tooltipElem.className = "tooltip";
	tooltipElem.innerHTML = tooltipHtml;
	document.body.append(tooltipElem);
	// positioning it on top of the annotated element (top-center)
	let coords = target.getBoundingClientRect();

	let left = coords.left + (target.offsetWidth - tooltipElem.offsetWidth) / 2;
	if (left < 0) left = 0; // do not climb over the left edge

	let top = coords.top - tooltipElem.offsetHeight - 5;
	if (top < 0) {
		// if it doesn't fit at the top, display at the bottom
		top = coords.top + target.offsetHeight + 5;
	}
    // don't foget add 'px' for CSS property
	tooltipElem.style.left = left + "px";
	tooltipElem.style.top = top + "px";
};

house.onmouseout = function (e) {
	if (tooltipElem) {
		tooltipElem.remove();
	  	 tooltipElem = null;
	}
};
