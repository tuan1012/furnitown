$('.lazy-load').fadeOut(1500);
$(document).ready(function (e) {
    $('.carousel-content1 h1').slideDown(1000);
    $('.carousel-content1 span').slideUp(1500);
    $('.carousel-content2 span').slideDown(1000);
    $('.main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        friction: 0.8,
        autoPlay: 3000,
        wrapAround: true,
    });

    // Carousel content 
    $('.main-carousel').on('change.flickity', function (event, index) {
        let currentIndex = index + 1;
        if (currentIndex == 1) {
            $('.carousel-content2 h1').slideUp(100);
            $('.carousel-content1 h1').slideDown(1000);
            $('.carousel-content1 span').slideUp(50);
            $('.carousel-content2 span').slideDown(500);

        } else {
            $('.carousel-content1 h1').slideUp(100);
            $('.carousel-content2 h1').slideDown(1000);
            $('.carousel-content2 span').slideUp(50);
            $('.carousel-content1 span').slideDown(500);

        }


    });

    // Project Dropdown
    $('.dropdown').on('click', function () {
        $('.dropdown__list').slideToggle(300);
        $('.dropdown__default .arrow').toggleClass('rotate');
    })

    // Back to top
    $('.contact__back2top').on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })

    // Menu fixed 
    $(window).scroll(function () {
        if ($(window).scrollTop() > 650) {
            $('.menu-fixed').slideDown(300);
        } else {
            $('.menu-fixed').slideUp(200)
        }
    })

    // Menu fullscreen
    $('.menu, .menu-aboutus, .menu-product').on('click', function () {
        $('.carousel, .carousel-content1, .carousel-content2').css('padding-left', '500px');
        $('.menu-fullscreen').css({
            'width': '500px',
            'visibility': 'visible',
            'opacity': '1',
        });
        $('.overlay-gray').fadeIn(300);
        $('.menu, .menu-aboutus, .menu-product').hide();
    });
    $('.menu-fullscreen .close').on('click', function () {
        $('.menu-fullscreen').css({
            'width': '0',
            'visibility': 'hidden',
            'opacity': '0',
        });
        $('.carousel,.carousel-content1, .carousel-content2').css('padding-left', '0');
        $('.overlay-gray').fadeOut(200);
        $('.menu, .menu-aboutus, .menu-product').show();
    })
    $('.overlay-gray').on('click', function () {
        $('.menu-fullscreen').css({
            'width': '0',
            'visibility': 'hidden',
            'opacity': '0',
        });
        $('.carousel, .carousel-content1, .carousel-content2').css('padding-left', '0');
        $('.overlay-gray').fadeOut(200);
        $('.menu, .menu-aboutus, .menu-product').show();
    })

    // Menu mobile 
    $('.menu-mobile__hamburger').on('click', function () {
        $('.menu-mobile__fullscreen').css({
            'height': '100vh',
            'visibility': 'visible',
            'opacity': '1',
        });
    })
    $('.menu-mobile__fullscreen .close').on('click', function () {
        $('.menu-mobile__fullscreen').css({
            'height': '0',
            'visibility': 'hidden',
            'opacity': '0',
        });
    })
    // Carousel Detail
    $('.detail .main-carousel').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        friction: 0.8,
        autoPlay: 6000,
        wrapAround: true,
        fullscreen: true,
    });

    // Send button
    $('.send-btn').on('click', function () {
        alert('Gửi thông tin thành công \nCám ơn quý khách !')
    })

    // Button hover 
    $('.btn-white, .btn-black').on('mouseenter', function (e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({
            top: y,
            left: x
        })
    });
    $('.btn-white, .btn-black').on('mouseout', function (e) {
        x = e.pageX - $(this).offset().left;
        y = e.pageY - $(this).offset().top;
        $(this).find('span').css({
            top: y,
            left: x
        })
    });

    // Page number 
    $('.news__page ul li, .projects__page ul li').on('mouseenter', function () {
        $(this).toggleClass('active');
    });
    $('.news__page ul li, .projects__page ul li').on('mouseout', function () {
        $(this).toggleClass('active');
    })
})