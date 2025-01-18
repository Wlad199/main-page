// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера-слик (MW 3.2)
//$(document).ready(function () {
//	$('.comment__body').slick();
//})

//jQuery(document).ready(function () {
//	/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
//	particlesJS.load('particles-js', 'sr', function () {
//		console.log('callback - particles.js config loaded');
//	});
//})

/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
	console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS('particles-js',

	{
		"particles": {
			"number": {
				"value": 80,
				"density": {
					"enable": true,
					"value_area": 800
				}
			},
			"color": {
				"value": "#efae48"
			},
			"shape": {
				"type": "circle",
				"stroke": {
					"width": 0,
					"color": "#000000"
				},
				"polygon": {
					"nb_sides": 5
				},
				"image": {
					"src": "img/github.svg",
					"width": 100,
					"height": 100
				}
			},
			"opacity": {
				"value": 0.5,
				"random": false,
				"anim": {
					"enable": false,
					"speed": 1,
					"opacity_min": 0.1,
					"sync": false
				}
			},
			"size": {
				"value": 3,
				"random": true,
				"anim": {
					"enable": false,
					"speed": 40,
					"size_min": 0.1,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 150,
				"color": "#fff",
				"opacity": 0.4,
				"width": 1
			},
			"move": {
				"enable": true,
				"speed": 2,
				"direction": "none",
				"random": false,
				"straight": false,
				"out_mode": "out",
				"bounce": false,
				"attract": {
					"enable": false,
					"rotateX": 600,
					"rotateY": 1200
				}
			}
		},
		"interactivity": {
			"detect_on": "canvas",
			"events": {
				"onhover": {
					"enable": true,
					"mode": "grab"
				},
				"onclick": {
					"enable": true,
					"mode": "push"
				},
				"resize": true
			},
			"modes": {
				"grab": {
					"distance": 203.7962037962038,
					"line_linked": {
						"opacity": 1
					}
				},
				"bubble": {
					"distance": 400,
					"size": 40,
					"duration": 2,
					"opacity": 8,
					"speed": 3
				},
				"repulse": {
					"distance": 200,
					"duration": 0.4
				},
				"push": {
					"particles_nb": 4
				},
				"remove": {
					"particles_nb": 2
				}
			}
		},
		"retina_detect": true,
		//"config_demo": {
		//	"hide_card": false,
		//	"background_color": "#b61924",
		//	"background_image": "",
		//	"background_position": "50% 50%",
		//	"background_repeat": "no-repeat",
		//	"background_size": "cover"
		//}
	}

);



//  ====================================================================================================//
const swiper = new Swiper('.swiper', {

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},
});

// mouse-move-control-swiper ====================================================================================================//
// Добавить свайперу data-mousemove-swipe

function sliderMouseSlideInit() {
	document.addEventListener('mousemove', function (e) {
		const targetElement = e.target;
		if (targetElement.closest('[data-mousemove-swipe]')) {
			const sliderElement = targetElement.closest('[data-mousemove-swipe]');
			const sliderItem = swiper[getIndex(sliderElement)];
			const sliderLength = sliderItem.slides.length;
			if (sliderLength > 1) {
				const sliderWidth = sliderItem.width;
				const sliderPath = Math.round(sliderWidth / sliderLength);
				const sliderMousePos = e.clientX - sliderElement.offsetLeft;
				const sliderSlide = Math.floor(sliderMousePos / sliderPath);
				sliderItem.slideTo(sliderSlide);
			}
		}
	})
	function getIndex(el) {
		return Array.from(el.parentNode.children).indexOf(el);
	}
}

if (document.querySelector('[data-mousemove-swipe]')) {
	sliderMouseSlideInit()
}

//  ====================================================================================================//
//  ====================================================================================================//
$(window).ready(function () {
	$(".boton").wrapInner('<div class=botontext></div>');

	$(".botontext").clone().appendTo($(".boton"));

	$(".boton").append('<span class="twist"></span><span class="twist"></span><span class="twist"></span><span class="twist"></span>');

	$(".twist").css("width", "25%").css("width", "+=3px");
});