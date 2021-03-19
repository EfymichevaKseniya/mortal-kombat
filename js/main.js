window.addEventListener('DOMContentLoaded', function() {

const windowHeight = document.querySelector('.app'),
      headerHeight = document.querySelector('.header').offsetHeight,
      filmHeight = document.querySelector('.film');

     filmHeight.style.height = windowHeight - headerHeight + 'px';

});

// $(document).ready(function () {
//      $('#app').vide({
//           mp4: 'video/video.mp4',
//           webm: 'video/video.webm',
//           ogv:'video/video.ogv',
//           poster: 'img/cover-image.jpg'
//      });
// });

$('#btn').click(function(){
	$.fancybox.open({
		src: '#hidden',
		type: 'inline',
	});
});