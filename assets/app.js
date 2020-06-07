const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
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
    .fromTo(slider, 1.2, {
        x: "0%"
    }, {
        x: "0%",
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