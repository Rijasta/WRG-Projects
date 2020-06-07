const hero = document.querySelector('.hero');
const headerSection = document.querySelector('.headerSection');
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
    .fromTo(headerSection, 1.2, {
        y: "-200"
    }, {
        y: "0",
        ease: Power2.easeInOut
    })
    .fromTo(logo, 0.5, {
        opacity: "0",
        y: "-60"
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

// //ScrollMagic
var ctrl = new ScrollMagic.Controller();

// Create scenes in jQuery each() loop
$(".MainPage section").each(function (i) {

    // const inner = $(this).find(".inner");
    // const outer = $(this).find(".outer");
    const title = this.querySelector("h2");
    const subtitle = this.querySelector("h4");
    const paragraph = this.querySelector("p");
    const item = this.querySelector(".staggerItems");
    const img = this.querySelector("img");
    const tb = new TimelineMax();
    tb.fromTo(title, 0.5, {
            opacity: 0,
            y: 10
        }, {
            y: 0,
            opacity: 1
        })
        .fromTo(subtitle, 0.2, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        })

        .fromTo(paragraph, 0.2, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        })
        .staggerFromTo(item, 0.3, {
            opacity: 0,
            y: 10
        }, {
            opacity: 1,
            y: 0
        });
    new ScrollMagic.Scene({
            triggerElement: "#heroSection"
        })
        .setClassToggle(".navigation a.home", "active") // add class toggle
    new ScrollMagic.Scene({
            triggerElement: "#services"
        })
        .setClassToggle(".navigation a.services", "active") // add class toggle
    new ScrollMagic.Scene({
            triggerElement: "#about"
        })
        .setClassToggle(".navigation a.about", "active") // add class toggle
        .addIndicators({
            colorTrigger: "white",
            colorStart: "white",
            colorEnd: "white",
            indent: 00,
            pushfollowers: true
        }) // add indicators (requires plugin)




    //t2.fromTo(paragraph, { opacity: 0 }, { opacity: 1, duration: 0.5 });
    // t2.from(outer, 0.25, { scaleX: 0 });
    // t2.from(inner, 0.65, { yPercent: 100, ease: Back.easeOut });

    new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0.80
        })
        .setTween(tb)
        // .addIndicators({
        //     colorTrigger: "white",
        //     colorStart: "white",
        //     colorEnd: "white",
        //     indent: 00,
        //     pushfollowers: true
        // })
        .addTo(ctrl);
});



//ISotope

// external js: isotope.pkgd.js

// init Isotope
// external js: isotope.pkgd.js

// init Isotope
var $grid = $('.grid').isotope({
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});
// filter functions
var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function () {
        var number = $(this).find('.number').text();
        return parseInt(number, 4) > 50;
    },
    // show if name ends with -ium
    ium: function () {
        var name = $(this).find('.name').text();
        return name.match(/ium$/);
    }
};
// bind filter button click
$('.filters-button-group').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    // use filterFn if matches value
    filterValue = filterFns[filterValue] || filterValue;
    $grid.isotope({
        filter: filterValue
    });
});
// change is-checked class on buttons
$('.button-group').each(function (i, buttonGroup) {
    var $buttonGroup = $(buttonGroup);
    $buttonGroup.on('click', 'button', function () {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
    });
});