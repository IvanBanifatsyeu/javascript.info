
arrowTop.style.visibility = 'hidden'
window.addEventListener('scroll', function  (e){
	if (document.documentElement.getBoundingClientRect().top * -1 >= document.documentElement.clientHeight ) {arrowTop.style.visibility = 'visible'}
	else if (document.documentElement.getBoundingClientRect().top * -1 <= document.documentElement.clientHeight ) arrowTop.style.visibility = 'hidden'
})

arrowTop.addEventListener('click', function  (e){
	window.scroll(e.pageXOffset, 0)
	
})