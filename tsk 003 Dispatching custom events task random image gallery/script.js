// listening for "click" events from the previous task
thumbs.addEventListener("click", function (event) {
	let a = event.target.closest("a");

	if (!a || !thumbs.contains(a)) return;

	event.preventDefault();

	largeImg.src = a.href;
});

//dispatch custom event 'click' with permission bubbling
var event2 = new Event("click", { bubbles: true });
// create NodeList of tags <a>
let listA = thumbs.querySelectorAll("a");
// by using setInterval randomly change the element on which dispatch custom event 'click' 
setInterval(() => {
	listA[Math.floor(Math.random() * 5)].dispatchEvent(event2);
}, 1000);
