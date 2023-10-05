
let swiper = new Swiper('.seven__slider', {
	// direction: 'vertical',
    loop: true,
	simulateTouch: false,

	navigation: {
		// <div class="swiper-button-prev"></div>
        // <div class="swiper-button-next"></div>

		nextEl: '.swiper-button-prev',
		prevEl: '.swiper-button-next'
	},

	pagination: {
		// <div class="swiper-pagination"></div>

		// точки
		type: 'bullets',
		
		// цифры
		// type: 'fraction',
		renderFraction: function (currentClass, totalClass) {
			return '0<span class="' + currentClass + '"></span>'+
			'/' +
			'<span class="' + totalClass + '"></span>';
		},
		
		el:'.swiper-pagination',

        // булеты(можно кликать)
		clickable: true,
		dynamicBullets: true,
	},

	scrollbar: {
		el: '.swiper-scrollbar',

		draggable: true
	},

	// кол-во слайдов
	slidesPerView: 1,
	// отступы
	spaceBetween: 200,

	// breakpoints: {
	// 	320: {
	// 		slidesPerView:1,
	// 	},
	// 	480: {
	// 		slidesPerView:2,
	// 	},
	// 	767.98: {
	// 		slidesPerView:3,
	// 	},
	// 	970: {
	// 		slidesPerView:3,
	// 	}
	// },

});