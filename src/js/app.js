(function($) {

    var controller = new ScrollMagic.Controller();

    function Animation() {
        this.infomation();
        this.feature();
    }

    Animation.prototype.infomation = function() {
        var $statement = $('.pre-statement'),
            $h1 = $statement.find('h1'),
            $h2 = $statement.find('h2'),
            $p  = $statement.find('p')
            $bg = $statement.find('.background')

        var timeline = new TimelineMax()
            .staggerFrom([$h1, $h2, $p, $bg], 1, {y: 20, autoAlpha: 0}, 0.2)
            
    }

    Animation.prototype.feature = function() {
        var slidesFeature = $('.feature .slide li')
        var feature = new TimelineMax()

        slidesFeature.each(function( index, slide ) {
            var old = ''
            var color = $(slide).data('color')

            $(slide).find('h2').css('color', color)
            $(slide).find('a').css('background-color', color)

            if(index > 0) {
                old = TweenMax.to(
                    slidesFeature[index - 1], 1, {
                        autoAlpha: 0
                    }, 
                    '-=0.5'
                )
            }
            feature.add([
                TweenMax
                    .to(slide, 1, {
                        autoAlpha: 1
                    }),
                old,
            ])
        })

        new ScrollMagic.Scene({
            triggerElement: '.feature',
            triggerHook: 0,
            duration: '100%'
        })
        .setPin('.feature')
        .setTween(feature)
        .addTo(controller)
    }

    new Animation();


})(jQuery)