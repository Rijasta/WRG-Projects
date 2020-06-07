const hero = document.querySelector('.hero');
const sliderbg = document.querySelector('.sliderbg');
const logo = document.querySelector('.logo');
const hamburder = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');
const tagline = document.querySelector('.tagline');
const menu = document.querySelector('navigation');
const tl = new TimelineMax();

const controller = new ScrollMagic.Controller();
//const t2 = gsap.timeline();

tl.fromTo(hero, 1, {
        height: "0%"
    }, {
        height: "170px",
        ease: Power2.easeInOut
    })
    .fromTo(hero, 1.2, {
        width: "0"
    }, {
        width: "60%",
        ease: Power2.easeInOut
    })
    .fromTo(sliderbg, 1.2, {
        x: "0%",
        opacity: 0
    }, {
        x: "0%",
        opacity: 1,
        ease: Power2.easeInOut
    }, "-=1.2")

    .fromTo((tagline), 1.2, {
        x: "0",
        opacity: "0"
    }, {
        x: "0",
        opacity: "1",
        ease: Power2.easeInOut
    }, "-=0.1")
    .fromTo((headline), 1.2, {
        x: "0",
        opacity: "0"
    }, {
        x: "0",
        opacity: "1",
        ease: Power2.easeInOut
    }, "-=0.3")
    .fromTo(logo, 0.5, {
        opacity: "0",
        y: "-20"
    }, {
        opacity: 1,
        y: 0
    }, "-=0.5")
    .fromTo(hamburder, 0.5, {
        opacity: "0",
        x: "-30"
    }, {
        opacity: 1,
        x: 0
    }, "-=0.10")


tl.staggerFromTo(".navigation li", 1, {
    y: -50,
    opacity: 0
}, {
    y: 0,
    opacity: 1
}, 0.2);

// heroSection Slider

//ScrollMagic
const ctrl = new ScrollMagic.Controller();

// Create scenes in jQuery each() loop
$(".MainPage section").each(function (i) {

    // const inner = $(this).find(".inner");
    // const outer = $(this).find(".outer");
    const title = this.querySelector("h2");
    const subtitle = this.querySelector("h4");
    const paragraph = this.querySelector(".paraBlock");
    const item = this.querySelector(".item");
    const img = this.querySelector("img");
    const t2 = new TimelineMax();
    t2.fromTo(title, 3, {
            opacity: 0,
            y: 10
        }, {
            y: 0,
            opacity: 1
        })
        .fromTo(subtitle, 2, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        })
        .fromTo(img, 0.1, {
            opacity: 0
        }, {
            opacity: 1
        })
        .fromTo(paragraph, 0.1, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        })
        .staggerFromTo(item, 0.1, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        });



    //t2.fromTo(paragraph, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    // t2.from(outer, 0.25, { scaleX: 0 });
    // t2.from(inner, 0.65, { yPercent: 100, ease: Back.easeOut });

    new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.80
        })
        .setTween(t2)
        .addIndicators({
            colorTrigger: "white",
            colorStart: "white",
            colorEnd: "white",
            indent: 50,
            pushfollowers: true
        })
        .addTo(ctrl);
});

// Select all links with hashes
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') &&
            location.hostname === this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top - 100
                }, 100, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    }
                });
            }
        }
    });


// Add opacity class to site header

// jQuery(document).on('scroll', function () {
//     if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
//         $('#return-to-top').fadeIn(200); // Fade in the arrow
//     } else {
//         $('#return-to-top').fadeOut(200); // Else fade out the arrow
//     }
//     if (jQuery(document).scrollTop() >= 300) {
//         jQuery('#site-header').addClass('fixed');
//     } else {
//         jQuery('#site-header').removeClass('fixed');
//     }

// });
$('#return-to-top').click(function () { // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0 // Scroll to top of body
    }, 500);
});