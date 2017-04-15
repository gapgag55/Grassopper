(function($) {

    var controller = new ScrollMagic.Controller();
    controller.scrollTo(function (newpos) {
		TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
	});

    function Animation() {
        this.statement();
        this.feature();
        this.project();
        // this.projectFix();
        // this.navigator();

        /* Featured project */
        this.intro();
        this.family();
        this.material();
        this.fadeInImage();
    }

    Animation.prototype.statement = function() {

        var statement = $('.statement')

        TweenMax.set(statement, {
            y: 150,
            autoAlpha: 0
        })

        var tween = new TimelineMax()

        tween.add([
            TweenMax.to(statement, .8, {
                y: 0,
                autoAlpha: 1,
                ease: Power0.easeNone
            })
        ])

        new ScrollMagic.Scene({
            triggerElement: '.statement',
            triggerHook: 1
        })
        .setTween(tween)
        .addTo(controller)
    }

    Animation.prototype.feature = function() {
        var slidesFeature = $('.feature .image-idea .feature-image')

        // slidesFeature.each(function(index, slide) {
        //     if(index > 0) {
        //         TweenMax.set(slide, {
        //             y: 0
        //         })
        //     }
        // })

        // slidesFeature.each(function(index, value) {
            
        //      TweenMax.set($(value), {
        //         y: 500
        //     })
        //     console.log(value);
        // })

        // $('.feature').css({
        //     'position': 'relative',
        //     'top': '-200px'
        // })

        // feature.add([
        //     TweenMax.from($('.feature'), 100, {autoAlpha: 0})
        // ])


        // feature.add([
        //     TweenMax.to($('.feature'), 100, {autoAlpha: 0})
        // ])
         slidesFeature.each(function( index, slide ) {

            fadeUp(slide, {y: 0})
        })

    }

    Animation.prototype.project = function() {


        var navigator = $('.project .left');

        new ScrollMagic.Scene({
            triggerElement: '.project .left',
            triggerHook: .2
        })
        .setPin('.project .left')
        .addTo(controller)

        var heading = '.project .title';
        var fadeOut = new TimelineMax();
        fadeOut.to(heading, 1, {
            autoAlpha: 0,
        })


        /*
         * @Scene: heading
         */
        new ScrollMagic.Scene({
            triggerElement: heading,
            triggerHook: 0,
            offset: -($(heading).height()) - 20,
        })
        .setPin(heading)
        .setTween(fadeOut)
        .addTo(controller)


        var li = $('.right li')

        li.each(function(index, li) {
            var items = $(li).find('.images .image')

            /*
            * @Scene: Image insides .project
            */
            items.each(function(index, value) {
                TweenMax.set(value, {
                    y: -100
                })

                if(index != items.length - 1) {
                    fadeUp(value, {y: -(index * 100)})
                } else {
                    fadeUp(value, {y: -100})
                }
            })
        })
    }

    // Animation.prototype.projectFix = function() {

    //     var boxs = ['.project-list', '.project-images', '.project-description']
    //     var paddingTop = parseInt(($('.project').css('padding-top'), 10))
    //     var paddingBottom = parseInt(($('.project').css('padding-bottom'), 10)) 
    //     var padding = paddingTop + paddingBottom
    //     var self;

    //     boxs.forEach(function( val, index ) {
    //         $(val).css('width', $(val).width() + 10)

    //         if(index == 2) {
    //             self = {
    //                 height: $(val).find('.is-relative li').height(),
    //                 window: $(window).height()
    //             }

    //             var paddingBottom = 40;
    //             $(val).css(
    //                 '-webkit-transform', 'translate(0, '+ (self.window - self.height - paddingBottom) +'px)'
    //             )
    //         }
    //     })

    //     var end = $('.project').height() - $(boxs[2]).find('.is-relative li').height() - (self.window - self.height) - padding

    //     new ScrollMagic.Scene({
    //         triggerElement: '.project .wrapper',
    //         triggerHook: 0,
    //         offset: -100,
    //         duration: end
    //     })
    //     .setPin('.project-list')
    //     .addTo(controller)

    //     new ScrollMagic.Scene({
    //         triggerElement: '.project .wrapper',
    //         triggerHook: 0,
    //         duration: end
    //     })
    //     .setPin('.project-description')
    //     .addTo(controller)
    // }



    // Animation.prototype.navigator = function() {
    //     var projectList = Array.from($('.project-images li'))
    //     var projectMenu = Array.from($('.project-list li'))
    //     var projecntContent = Array.from($('.project-description li'))
        
    //     projectList.forEach(function(val, index) {
    //         new ScrollMagic.Scene({
    //             triggerElement: val, 
    //             triggerHook: 0,
    //             duration: $(val).height(),
    //             offset: -$(val).height()
    //         })
    //         .on('enter', function() {
    //             $(projectMenu[index]).addClass('is-active')
    //             TweenMax.to($(projecntContent[index]), 0.1, {position: 'absolute', autoAlpha: 1})  
    //         })
    //         .on('leave', function(event) {
    //              $(projectMenu[index]).removeClass('is-active')
    //              if(index == 0) {
    //                 if(event.state != 'BEFORE') {
    //                     TweenMax.to($(projecntContent[index]), 0.1, {position: 'absolute', autoAlpha: 0})  
    //                 }
    //              } else if(index == projectMenu.length - 1) {
    //                 if(event.state != 'AFTER') {
    //                     TweenMax.to($(projecntContent[index]), 0.1, {position: 'absolute', autoAlpha: 0})  
    //                 }
    //             } else {
    //                  TweenMax.to($(projecntContent[index]), 0.1, {position: 'absolute', autoAlpha: 0})  
    //              }
    //         })
    //         // .addIndicators()
    //         .addTo(controller)
    //     })

    //     $(document).on("click", "a[href^='#']", function (e) {
    //         var id = $(this).attr("href");
    //         if ($(id).length > 0) {
    //             e.preventDefault();

    //             // trigger scroll
    //             controller.scrollTo(id);

    //                 // if supported by the browser we can even update the URL.
    //             if (window.history && window.history.pushState) {
    //                 history.pushState("", document.title, id);
    //             }
    //         }
    //     });
    // }

    /* Featured project */
    Animation.prototype.intro = function() {
        var text = $('.featured-intro .wrapper')
        var background = $('.featured-intro .background')
        
        var tween = new TimelineMax()
            .to(text, 2, {autoAlpha: 0})
            .to(background, 2, {autoAlpha: 1})
            .to(background, 2, {autoAlpha: 0})
        
        new ScrollMagic.Scene({
            triggerElement: '.featured-intro',
            triggerHook: 0,
            duration: '200%'
        })
        .setPin('.featured-intro')
        .setTween(tween)
        // .addIndicators()
        .addTo(controller)
    }

    Animation.prototype.family = function() {

        var family = $('.family')
        var h1 = $('.family h1')
        var p = $('.family p')

        TweenMax.set(family, {
            scale: 1.05,
            y: 100,
            autoAlpha: 0
        })
        
        TweenMax.set(h1, {
            y: 20,
            autoAlpha: 0
        })

        TweenMax.set(p, {
            y: 20,
            autoAlpha: 0
        })
        
        
        new ScrollMagic.Scene({
            triggerElement: '.family',
            triggerHook: 0.7,
        })
        .on('enter', function() {
            new TimelineMax()
                .to(family, .8, {
                    scale: 1,
                    autoAlpha: 1,
                    y: 0,
                    ease: Power2.easeInOut
                })
                .to(h1, 1, {
                    autoAlpha: 1,
                    y: 0
                }, '-=0.5')
                .to(p, 1, {
                    autoAlpha: 1,
                    y: 0
                }), '-=0.8'
        })
        .addTo(controller)
    }

    Animation.prototype.material = function() {
        var $parallax = $('.material .parallax')

        TweenMax.set($parallax, {
            y: -500
        })

        var tween = new TimelineMax()
            tween.to($parallax, 1, {y: 0})

        new ScrollMagic.Scene({
            triggerElement: '.parallax',
            triggerHook: 1,
            duration: '200%'
        })
        .setTween(tween)
        // .addIndicators()
        .addTo(controller)
    }

    Animation.prototype.fadeInImage = function() {
        var img = $('[data-fadeImage]')

        img.each(function(index, value) {
            TweenMax.set($(value), {
                y: Math.random() * 150,
                scale: 1.05,
                autoAlpha: 0
            })

            new ScrollMagic.Scene({
                triggerElement: value,
                triggerHook: .8
            })
            .on('enter', function() {
                if(!$(value).hasClass('feature-image')) {
                    TweenMax.to($(value), 1, {
                        y: 0,
                        scale: 1,
                        autoAlpha: 1,
                        ease: Power2.easeInOut
                    })
                }
            })
            .addTo(controller)
        })
    }

    if(!Modernizr.touch) {
        new Animation();
    }


    function fadeUp(slide, optional) {
        var feature = new TimelineMax()
        feature.add([
            TweenMax.from(slide, .5, {
                y: 200,
                autoAlpha: 0,
                scale: 1.2
            }),
            TweenMax.to(slide, .5, {
                y: optional.y,
                autoAlpha: 1,
                scale: 1,
                ease: Linear.easeNone,
                offset: -400
            })
        ])
    
        new ScrollMagic.Scene({
            triggerElement: slide,
            triggerHook: 1
        })
        .setTween(feature)
        .addTo(controller)

    }

})(jQuery)