
// BASED ON THIS TUTORIAL: https://alligator.io/js/intersection-observer/

const images = document.querySelectorAll('.animate');

observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('slide-in');
    } else {
      entry.target.classList.remove('slide-in');
    }
  });
});

images.forEach(image => {
  observer.observe(image);
});