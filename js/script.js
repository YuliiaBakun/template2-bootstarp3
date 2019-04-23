$(document).ready(function () {

    $(document).scroll(function () {
        var position = $(document).scrollTop();

        if (position > 600) {
            $('.autojack a.scroll_top').fadeIn();
        } else {
            $('.autojack a.scroll_top').fadeOut();
        }
    });

    $('.autojack a.scroll_top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 300);
    });

    $('.autojack .catalog_tabs a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });

    if ($('.autojack .slider').length) {
        $('.autojack .slider').slick({
            slidesToShow: 1,
            dots: false,
            arrows: true,
            pauseOnHover: false,
            touchMove: false,
            autoplay: true,
            autoplaySpeed: 3000,
            speed: 600,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        dots: true,
                        arrows: false,
                    }
                }
            ]
        });
    }


    $('.autojack .catalog_slider').each(function (index, element) {

        if ($(element).length) {

            $(element).slick({
                slidesToShow: 4,
                arrows: true,
                pauseOnHover: false,
                touchMove: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                        }
                    }, {
                        breakpoint: 540,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });

        }

    });

    if ($('.autojack .about_slider').length) {
        $('.autojack .about_slider').slick({
            centerMode: true,
            slidesToShow: 4,
            dot: false,
            pauseOnHover: false,
            touchMove: false,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    if ($('.autojack .instagram_slider').length) {
        $('.autojack .instagram_slider').slick({
            centerMode: true,
            slidesToShow: 4,
            dot: false,
            pauseOnHover: false,
            touchMove: false,
            autoplay: true,
            autoplaySpeed: 3000,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }

    var slideout = new Slideout({
        'panel': document.getElementById('content'),
        'menu': document.getElementById('slideout'),
        'padding': 250,
        'touch': false,
        'side': 'left',
        'tolerance': 0
    });

    $(document).on('click', '.autojack .navbar-toggle', function () {
        slideout.toggle();
    });

    $(document).on('click', '.autojack#content', function () {
        slideout.close();
    });

    $(window).on('resize', function () {

        if ($(this).width() > 992) {
            slideout.close();
        }

    });

    var mailing = $('.autojack .bid form');
    if (mailing.length > 0) {
        mailing.validate({
            rules: {
                bid_name: {
                    required: true,
                    minlength: 2
                },

                bid_city: {
                    required: true,
                    minlength: 2
                },

                bid_phone: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                bid_name: {
                    required: "Введите свое имя",
                    minlength: "Длина должна быть больше 2-х символов"
                },
                bid_city: {
                    required: "Введите город",
                    minlength: "Введите корректный город"
                },
                bid_phone: {
                    required: "Введите телефон",
                    minlength: "Введите корректный телефон"

                }
            }
        });
    }

    var modal_login = $('.autojack .login__form');
    if (modal_login.length > 0) {
        modal_login.validate({
            rules: {
                login__email: {
                    required: true,
                    email: true
                },

                login__password: {
                    required: true,
                    minlength: 2
                }
            },
            errorPlacement: function () {
                return;
            }
        });
    }

    var reviews_grid = $('.autojack .reviews__grid');
    if (reviews_grid.length > 0) {
        reviews_grid.masonry({
            itemSelector: '.reviews__item',
            percentPosition: true,
            horizontalOrder: true
        });
    }

    if ($('.autojack .videos__slider').length) {
        $('.autojack .videos__slider').slick({
            infinite: false,
            loop: true,
            slidesToShow: 3,
            dot: false,
            pauseOnHover: false,
            touchMove: false,
            autoplay: true,
            autoplaySpeed: 3000,
            appendArrows: $('.autojack .videos__row'),
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                }, {
                    breakpoint: 540,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        });
    }
});