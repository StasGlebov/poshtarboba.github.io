setHeaderBackground();
window.addEventListener('scroll', setHeaderBackground);



function setHeaderBackground(){
	let scrollTop = document.documentElement.scrollTop;
	let height = document.getElementById('top_section').offsetHeight;
	let header = document.querySelector('header');
	let opacity = scrollTop > height ? 0.8 : scrollTop / height * 0.8;
	header.style.background = `rgba(0, 0, 0, ${opacity})`;
}