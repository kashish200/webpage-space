//paralla

let scene = document.getElementById('scene');
let parallaxInst = new Parallax(scene);
// Adding index

// text animation
let text = document.getElementById('text');

	window.addEventListener('scroll', function() 
			{
	           let value = window.scrollY;	
	           text.style.top = value * 1.0 + 'px';
                   });






