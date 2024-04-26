(function ($) {
    "use strict";
    
    /*======================================
      Windows Load  Active
    ========================================*/
    $(window).on('load', function () {
        wowAnimation();
    });

    /*======================================
      Preloader activation
    ========================================*/
    $(window).on('load', function (event) {
        $('#preloader').delay(500).fadeOut(500);
    });

    /*======================================
      Wow Active
    ========================================*/
    function wowAnimation() {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        wow.init();
    }

    /*======================================
    Mobile Menu Js
    ========================================*/
    $("#mobile-menu").meanmenu({
        meanMenuContainer: ".mobile-menu",
        meanScreenWidth: "1199",
        meanExpand: ['<i class="fa-solid fa-plus"></i>'],
    });

    $("#mobile-menu-2").meanmenu({
        meanMenuContainer: ".mobile-menu-2",
        meanScreenWidth: "4000",
        meanExpand: ['<i class="fa-solid fa-plus"></i>'],
    });

    /*======================================
      Sidebar Toggle
    ========================================*/
    $(".offcanvas-close,.offcanvas-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("info-open");
        $(".offcanvas-overlay").removeClass("overlay-open");
    });
    $(".sidebar-toggle").on("click", function () {
        $(".offcanvas-area").addClass("info-open");
        $(".offcanvas-overlay").addClass("overlay-open");
    });

    /*======================================
      Body overlay Js
    ========================================*/
    $(".body-overlay").on("click", function () {
        $(".offcanvas-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

    /*======================================
      Sticky Header Js
    ========================================*/

    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 250) {
            $("#header-sticky").addClass("bd-sticky");
        } else {
            $("#header-sticky").removeClass("bd-sticky");
        }
    });

    /*======================================
      Data Css js
    ========================================*/
    $("[data-background").each(function () {
        $(this).css(
            "background-image",
            "url( " + $(this).attr("data-background") + "  )"
        );
    });

    $("[data-width]").each(function () {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    /*======================================
      MagnificPopup image view
    ========================================*/
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });

    let tourImagePopupGallery = $(".tour-image-popup");
    tourImagePopupGallery.each(function () {
        let elm = $(this);
        let options = elm.data("gallery-options");
        let imageGallery = elm.magnificPopup(
            "object" === typeof options ? options : JSON.parse(options)
        );
    });


    /*======================================
      MagnificPopup video view
    ========================================*/
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    /*======================================
      PureCounter Js
    ========================================*/

    new PureCounter();
    new PureCounter({
        filesizing: true,
        selector: ".filesizecount",
        pulse: 2,
    });

    /*======================================
      Nice Select Js
    ========================================*/
    $('select').niceSelect();

    /*======================================
      Button scroll up js
    ========================================*/
    var progressPath = document.querySelector(".bd-backtotop path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 150;
    var duration = 550;
    jQuery(window).on("scroll", function () {
        if (jQuery(this).scrollTop() > offset) {
            jQuery(".bd-backtotop").addClass("active-progress");
        } else {
            jQuery(".bd-backtotop").removeClass("active-progress");
        }
    });
    jQuery(".bd-backtotop").on("click", function (event) {
        event.preventDefault();
        jQuery("html, body").animate({
            scrollTop: 0
        }, parseInt(duration, 10)); // Fixing parseInt call with radix parameter
        return false;
    });

    /*======================================
    Slider Swiper
    ========================================*/
    var commonCarousel = new Swiper(".category-carousel-active", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        roundLengths: true,
        autoplay: {
            delay: 3000,
        },
        navigation: {
            nextEl: ".category-slider-button-next",
            prevEl: ".category-slider-button-prev",
        },
        pagination: {
            el: ".bd-swiper-dot",
            clickable: true,
        },
        breakpoints: {
            1400: {
                slidesPerView: 6,
            },
            1200: {
                slidesPerView: 6,
            },
            992: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            576: {
                slidesPerView: 1,
            },
            0: {
                slidesPerView: 1,
            },
        },
    });

    var swiper = new Swiper(".banner-nav-active", {
		loop: true,
		spaceBetween: 10,
        slidesPerView: 3,
		freeMode: true,
		watchSlidesProgress: true,
		allowTouchMove: true,
		allowSlideNext: true,
		allowSlidePrev: true,
		observer:true,
		observeParents:true,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
        centeredSlides: true,
		});
		var swiper2 = new Swiper(".banner_more_item", {
		loop: true,
		spaceBetween: 0,
		allowTouchMove: true,
		allowSlideNext: true,
		allowSlidePrev: true,
		observer:true,
		observeParents:true,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		navigation: {
			nextEl: ".product-details__button-next",
			prevEl: ".product-details__button-prev",
		},
		thumbs: {
			swiper: swiper,
		},
	});

    
	

})(jQuery);