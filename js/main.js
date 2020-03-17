
// BASED ON THIS TUTORIAL: https://alligator.io/js/intersection-observer/

//const images = document.querySelectorAll('.animate');
//
//observer = new IntersectionObserver((entries) => {
//  entries.forEach(entry => {
//    if (entry.intersectionRatio > 0) {
//      entry.target.classList.add('slide-in');
//    } else {
//      entry.target.classList.remove('slide-in');
//    }
//  });
//});
//
//images.forEach(image => {
//  observer.observe(image);
//});



// BASED ON THIS TUTORIAL: https://cssanimation.rocks/scroll-animations/

let scroll = window.requestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60)
	};

let animationTarget = document.querySelectorAll('.animate');

function loop() {

	animationTarget.forEach(function (element) {
		if (isElementInViewport(element)) {
			element.classList.add('slide-in');
		} else {
			element.classList.remove('slide-in');
		}
	});

	scroll(loop);
}

loop();


// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
	var rect = el.getBoundingClientRect();
	return (
		(rect.top <= 0 &&
			rect.bottom >= 0) ||
		(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
			rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
		(rect.top >= 0 &&
			rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
	);
}
