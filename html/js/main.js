$(function() {

/*======== map =========*/
	
	if ($('.map').length){

		ymaps.ready(function(){
			var myMap = new ymaps.Map("Map", {
				center:[82.920430, 55.030199], 
				zoom:17
			}),
				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'Силекс',
				}, {
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'img/map.png',
					// Размеры метки.
					iconImageSize: [70, 93],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-3, -42]
				});

			myMap.geoObjects.add(myPlacemark);

			
		});
	}
	
	
/*============== slide ===============*/
	
	$('.js-slide').slick({
		
		touchMove: false,
		infinite: true,
		speed: 900,
		fade: true,
		cssEase: 'linear',
		arrows: true,
		adaptiveHeight: true,
		prevArrow: $('.btn-slide__left'),
		nextArrow: $('.btn-slide__right')
	});	
	
	
	/*======== min-menu-fix=========*/

	var widthBody = $('body').width();

	$(window).resize(function(){
		widthBody = $('body').width();

	});


	$(window).scroll(function(){
	
		var bo = $("body").scrollTop();

		if ( bo > 250 ) { $(".fix-menu").css("display", "block"); } 
		else { $(".fix-menu").css("display", "none"); };
});

});/*$*/
