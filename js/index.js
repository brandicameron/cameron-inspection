gsap.registerPlugin(ScrollTrigger, CSSPlugin);

gsap.defaults({
  opacity: 0,
  duration: 0.5,
});

ScrollTrigger.defaults({
  toggleActions: 'play pause resume reset',
});

let elementsToSlideRight = gsap.utils.toArray('.slide-right');
elementsToSlideRight.forEach((element) => {
  gsap.from(element, {
    x: '-100%',
    scrollTrigger: {
      trigger: element,
    },
  });
});

let elementsToFadeUp = gsap.utils.toArray('.fade-up');
elementsToFadeUp.forEach((element) => {
  gsap.from(element, {
    y: '75px',
    scrollTrigger: {
      trigger: element,
    },
  });
});

const currentYear = new Date().getFullYear();
document.getElementById('copyYear').innerHTML = currentYear;
