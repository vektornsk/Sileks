$(function() {
	
	
/*======== valid =========*/
	
	$("#form-call").validate({

		rules:{

			Name:{
				required: true,
				minlength: 2
				
			},
			
			Phone:{
				required: true,
				number:true
				
			},
			Email:{
				email: true

			}
		}
	});
	
	
	$("#form-call-popup").validate({

		rules:{

			Name:{
				required: true,
				minlength: 2

			},

			Phone:{
				required: true,
				number:true

			},

			Email:{
				required: true,
				email: true

			}
		}
	});
	
	
	$("#form-cons").validate({

		rules:{

			Name:{
				required: true,
				minlength: 2

			},

			Phone:{
				required: true,
				number:true

			}

		}
	});
	
	

/*======== map =========*/
	
	if ($('.map').length){

		ymaps.ready(function(){
			var myMap = new ymaps.Map("Map", {
				center:[55.048518279840884,82.91138350000001], 
				zoom:17
			}),
				myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: 'Силекс',
				}, {
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: 'img/map.png',
					// Размеры метки.
					iconImageSize: [70, 96],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-35, -96]
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
