$(document).ready(function () {

//slow background-image loading fix     mozda nije najsrećnije rešenje, ali makar nije ružno :)
//                                      mada sam preload-ovala img-inline css 
    setTimeout(function () {
        $('body').animate({opacity: '1'}, 1000);
    }, 500);


    //textillate-plugin for letters =========================================
    function animationTaxt() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.txl').each(function () {
            let position = $(this).offset().top;
            let height = $(this).outerHeight();
            $(this).next('.h2-after').width($(this).width());
            if (position + height < windowHeight + scroll) {
                let effect = $(this).data('text');
                let initialDelay = $(this).data('delay');
                let letterDelay = $(this).data('letterDelay');
                let scaleDelay = $(this).data('scaleDelay');
                $(this).addClass('text-animation');
                $('.text-animation').textillate({
                    initialDelay: initialDelay,
                    in: {
                        effect: effect,
                        sequence: true,
                        delay: letterDelay,
                        delayScale: scaleDelay
                    }});
                 $(this).next('.h2-after').css({'animation':'shortening 2.5s linear', 'animation-fill-mode': 'forwards'});
            }
        });
    }

    animationTaxt();
    $(window).scroll(function () {
        animationTaxt();
    });


    //reorder images  ====================================================
    function reorder() {
        $('.services-col').each(function (i) {
            $(this).css('order', i + 1);
        });
        let windowWidth = $(window).width();
        if (windowWidth >= 576) {
            $('.services-col').each(function (i) {
                let order = $(this).css("order");
                if (order % 4 === 0) {
                    $(this).css('order', order - 1);
                    $(this).prev('.services-col').css('order', order);
                }
            });
        }
    }

    reorder();
    $(window).resize(function () {
        reorder();
    });

    //animation=================================================================
    function animation() {
        let  windowHeight = $(window).height();
        let scroll = $(window).scrollTop();
        $('.animated').each(function () {
            let position = $(this).offset().top;
            let height = $(this).outerHeight();
            let animationName = $(this).attr('data-effect');
            let delay = $(this).attr('data-delay');
            let duration = $(this).attr('data-duration');
            if (position + height / 2 < windowHeight + scroll) {
                $(this).addClass(animationName);
                $(this).css('animation-delay', delay);
                $(this).css('animation-duration', duration);
                $(this).css('visibility', 'visible');
            }
        });
    }

    animation();
    $(window).scroll(function () {
        animation();
    });

    // Owl:professionals-slider================================================

    if ($('.professionals-slider').length > 0) {
        $('.professionals-slider').owlCarousel({

            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            items: 1,
            margin: 50,
            autoplayHoverPause: true
        });
    }

    // form validator==========================================================


    if ($('.contact-form').length > 0) {

        $('.contact-form').validate({

            highlight: function (element) {
                $(element).addClass('is-invalid').removeClass('is-valid');
            },
            unhighlight: function (element) {
                $(element).addClass('is-valid').removeClass('is-invalid');
            },
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'The Name* field is required'
                },
                email: {
                    required: 'The Email* field is required',
                    email: 'Please provide a valid email address'
                },
                subject: {
                    required: 'The Subject* field is required'
                },
                message: {
                    required: 'The Message* field is required'
                }
            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo(element.closest(".form-group").find(".error-msg"));
            }

        });
    }

    //resize map and img =======================================================
    function resize() {
        let windowWidth = $(window).width();
        if (windowWidth >= 768) {
            $(".elTwo").height($(".elOne").height());
            if ($(".contact-map").lenght > 0) {
                $(".contact-map").removeClass(".embed-responsive");
            }
            ;
        }
    }
    resize();
    $(window).resize(function () {
        resize();
    });

});


