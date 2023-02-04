// add the ability to focus
mouse.tabIndex = "0";
mouse.addEventListener("focus", function () {
	if (document.activeElement == mouse) {
		// let's set the initial positioning values
		this.style.position = "fixed";
		this.style.left = this.getBoundingClientRect().x + "px";
		this.style.top = this.getBoundingClientRect().y + "px";
		//   get the length and width of the element
		let width = Math.trunc(this.getBoundingClientRect().width);
		let height = Math.trunc(this.getBoundingClientRect().height);
		// if the arrow is pressed, we shift it by length or width
		this.addEventListener("keyup", function (e) {
			if (e.code == "ArrowUp") {
				this.style.top = parseInt(this.style.top) - height + "px";
			} else if (e.code == "ArrowDown") {
				this.style.top = parseInt(this.style.top) + height + "px";
			} else if (e.code == "ArrowLeft") {
				this.style.left = parseInt(this.style.left) - width + "px";
			} else if (e.code == "ArrowRight") {
				this.style.left = parseInt(this.style.left) + width + "px";
			}
		});
	}
});
