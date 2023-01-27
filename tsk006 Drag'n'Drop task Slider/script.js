const thumb = document.querySelector(".thumb");
let thumbTop = thumb.getBoundingClientRect().top;
// we hang up listening to the event on pressing and holding the mouse button
thumb.onmousedown = function (event) {
	// measure the cursor offset at the time of the click relative to let/top thumb
	let shiftX = event.clientX - thumb.getBoundingClientRect().left;
	thumb.style.position = "absolute";
	thumb.style.zIndex = 1000;
	document.body.append(thumb);
   // function for moving mouse 
	function moveAt(pageX) {
		// find coordinate of left and right position thumb 
		let leftSlider = slider.getBoundingClientRect().x;
		let rightSlider =
			slider.getBoundingClientRect().x +
			slider.getBoundingClientRect().width -
			thumb.getBoundingClientRect().width;
		//	we will forbid thumb going abroad slider
		if (pageX - shiftX < leftSlider) {
			thumb.style.left = leftSlider + "px";
		} else if (pageX - shiftX > rightSlider) {
			thumb.style.left = rightSlider + "px";
		} else {
			thumb.style.left = pageX - shiftX + "px";
		}
		thumb.style.top = thumbTop + "px";
        // we will change the opacity of the background color slider depending on the position thumb
		let lengthSlider = rightSlider - leftSlider;
		let distanceSlider = pageX - shiftX - leftSlider;
		if (distanceSlider < 0) distanceSlider = 0;
		else if (distanceSlider > 300) {
			distanceSlider = 300;
		}
		let ratio = distanceSlider / lengthSlider / 1.25;
		slider.style.backgroundColor = `rgba(247, 2, 2 , ${0.2 + ratio})`;
	}

	 moveAt(event.pageX);
     
	function onMouseMove(event) {
		moveAt(event.pageX);
	}

	document.addEventListener("mousemove", onMouseMove);
     // clear all events when the mouse button is released
	document.onmouseup = function () {
		document.removeEventListener("mousemove", onMouseMove);
		thumb.onmouseup = null;
	};
   // don’t forget to cancel native ondragstart
	thumb.ondragstart = function () {
		return false;
	};
};
