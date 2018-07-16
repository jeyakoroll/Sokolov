$(document).ready(function() {
	
	// about gallery
	 $('.about__item-gallery_wrap').owlCarousel({
    responsiveClass:true,
    responsive:{
        0:{
				    loop:true,
				    margin: 250,
				    items: 1,
				    center: true,
				    dots: true,
				    nav: true,
				    autoWidth: true,
				    navContainer: '.item-gallery_navs',
				    dotsContainer: '.about__item-gallery_dots',
        },
        768:{
            loop:true,
				    margin: 250,
				    items: 1,
				    center: true,
				    dots: true,
				    nav: true,
				    autoWidth: true,
				    navContainer: '.item-gallery_navs',
				    dotsContainer: '.about__item-gallery_dots',
        },
        992:{
            loop:true,
				    margin: 120,
				    items: 1,
				    center: true,
				    dots: true,
				    nav: true,
				    autoWidth: true,
				    navContainer: '.item-gallery_navs',
				    dotsContainer: '.about__item-gallery_dots',
        }
    }
  });

	// form
	$( '.header__bottom-form button' ).addClass( 'footer__form-button' );
  $( '.header__bottom-form .order-form' ).addClass( 'footer__form-order' );
  $( '.header__bottom-form input' ).addClass( 'footer__form-data' );
	
	// timer
	(function() {
	  $(document).ready(function() {
	    var now = new Date(),
	      secPassed = now.getHours() * 60 * 60 + now.getMinutes() * 60 + now.getSeconds();
	    var t = (60 * 60 * 24) - secPassed;
	    $('.timer').countdown({
	      until: (t),
	      labels: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часов', 'Минут', 'Секунд'],
	      labels1: ['Годы', 'Месяцы', 'Недели', 'Дни', 'Часов', 'Минут', 'Секунд'],
	      format: 'HMS',
	      layout: '<li><div><span>0</span></div><div><span>0</span></div></li><li><div><span>{h10}</span></div><div><span>{h1}</span></div></li><li><div><span>{m10}</span></div><div><span>{m1}</span></div></li><li><div><span>{s10}</span></div><div><span>{s1}</span></div></li>'
	    });
	  });
	})();

	// popup
	//open popup
	$('.cd-popup-trigger').on('click', function(event){
		event.preventDefault();
		$('.cd-popup').addClass('is-visible');
	});
	
	//close popup
	$('.cd-popup').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	//close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-popup').removeClass('is-visible');
	    }
   });

	// popup politics
	// open popup
	$('.politics').on('click', function(event){
		event.preventDefault();
		$('.cd-politics').addClass('is-visible');
	});
	
	// close popup
	$('.cd-politics').on('click', function(event){
		if( $(event.target).is('.cd-popup-close') || $(event.target).is('.cd-politics') ) {
			event.preventDefault();
			$(this).removeClass('is-visible');
		}
	});
	// close popup when clicking the esc keyboard button
	$(document).keyup(function(event){
    	if(event.which=='27'){
    		$('.cd-politics').removeClass('is-visible');
	    }
   });

	// hide mobile menu
  $('.navbar-collapse').on('click', hideSendwichMenu);
  $(document).on('click', hideSendwichMenu);

  function hideSendwichMenu () {
      $('.navbar-collapse').collapse('hide');
  }

  // hight of the fixed menu when scrolling
	var
		 menu = $('.header__top'),
		 logo = $('.header__top-logo'),
		 button = $('.header__top-buy_wrap'),
		 nav = $('.header__top-nav');
			
		  $(window).scroll(function(){
		  		if ( $(this).scrollTop() <= 100 && menu.hasClass("move") ) {
	            menu.removeClass("move").addClass("default");
	            logo.removeClass('logo-top');
	            button.removeClass('buy_wrap-margin');
	            nav.removeClass('nav-margin');
	        }
	        else if ( $(this).scrollTop() > 100 && menu.hasClass("default") ){
	            menu.removeClass("default").addClass("move");
	            logo.addClass('logo-top');
	            button.addClass('buy_wrap-margin');
	            nav.addClass('nav-margin');
	        } 
	    });//scroll

  // sticky menu on mobile
  $(window).on('load rasize', function () {
		var screenWidth = $(window).width(),
				headerTop = $('.header__top'),
				navbar = $('.navbar-default'),
        tablets = screenWidth < 780;

		if (!tablets) {
			headerTop.removeClass('pos-relative');
		} else {
			headerTop.addClass('pos-relative');
		}

  })

	$(window).scroll(function(){
		var 
				navbar = $('.navbar-toggle');
				logo = $('.header__top-logo');


    if ( $(this).scrollTop() > 100 ){
      navbar.addClass('mar-top');
      logo.addClass('logo-center');
    } else if( $(this).scrollTop() <= 100 ) {
			navbar.removeClass('mar-top');
			logo.removeClass('logo-center');
    }
   });//scroll
        
  // scroll function call
  $('.header__nav-link').on('click', function(e) {
    e.preventDefault();

    showSection($(this).attr('href'), true); 
  });

  showSection(window.location.hash, false);

  function showSection(section, isAnimate) {
  var 
      direction = section.replace(/#/, ''),
      reqSection = $('.section').filter('[data-section="' + direction + '"]');
			
			if ( reqSection.length ) {
				var reqSectionPos = reqSection.offset().top - 79;
			}
 			
      if (isAnimate) {
        $('body, html').animate({scrollTop: reqSectionPos}, 400);
      } else {
        $('body, html').scrollTop(reqSectionPos);
      }
	}
 
}); /** main document function **/   



