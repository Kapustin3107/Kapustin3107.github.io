var images = ['sneakers-1.png', 'sneakers-2.png', 'sneakers-3.png'];
var slider = document.querySelector('#slider');
var img = slider.querySelector('img');
var i = 0;

window.setInterval(function(){
	img.src = 'IMG/' + images[i];
	i++;

	if (i == images.length){
		i = 0;
	}


}, 2000); 