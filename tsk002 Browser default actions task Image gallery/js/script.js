thumbs.addEventListener("click", (event) => {
	// if element or his parent tag <a> target != null
	let target = event.target.closest("a");
	// cancel browser action if event.target include <a>
	if (target && thumbs.contains(target)) {
		event.preventDefault();
        // replace src attribute in tag <img> on 'href' from event.target
		largeImg.src = target.getAttribute("href");
        // in attribute 'alt' write down in 'alt' largeImg
       largeImg.alt = target.title
	}
});



