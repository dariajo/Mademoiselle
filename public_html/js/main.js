$(document).ready(function () {

    //textillate-plugin for letters animation
    if ($('.lead').length > 0) {
        $('.lead-title').textillate({

            loop: false,
            minDisplayTime: 2000,
            initialDelay: 800,
            autoStart: true,

            in: {
                effect: 'rollIn',
                delayScale: 1.5,
                delay: 100,
                sync: false,
                shuffle: true,
                reverse: false,
                callback: function () {}
            },

            callback: function () {},

            type: 'char'
        });
    }


    // Owl:professionals-slider

    if ($('.professionals-slider').length > 0) {
        $('.professionals-slider').owlCarousel({

            loop: true,
            autoplay: true,
            items: 1,
            margin: 50
        });
    }

    //services: elements order
    
  
    
    
    
    
});

