
function randomInteger(min, max) {
	// random number from min to max
	let rand = min + Math.random() * (max + 1 - min);
	return Math.floor(rand);
}

let list = ["рыба", "мясо", "трава", "планета", "космос"];

// output a random element of the array
setInterval(function () {
	let elem = document.getElementById("elem");
	elem.textContent = list[randomInteger(0, list.length - 1)];
}, 3000);

const outChanges = document.querySelector('.changes');

let observer = new MutationObserver((mutations) => {
 if (mutations[0].removedNodes.length) { outChanges.innerHTML = `
 Удалён текст: ${mutations[0].removedNodes[0].data.trim()}
 <br> Добавлен текст: ${mutations[0].addedNodes[0].data}
 `;} 
});

observer.observe(elem, { childList: true, characterDataOldValue: true });

