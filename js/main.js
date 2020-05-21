
// BASED ON THIS TUTORIAL: https://cssanimation.rocks/scroll-animations/

let scroll = window.requestAnimationFrame ||
	function (callback) {
		window.setTimeout(callback, 1000 / 60)
	};

let animationTarget = document.querySelectorAll('.animate');

function loop() {
	animationTarget.forEach(function (element) {
		if (isElementInViewport(element)) {
			element.classList.add('fancy');
		} else {
			element.classList.remove('fancy');
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


//Updates the year in the copyright automatically
const currentYear = new Date().getFullYear();
    document.getElementById("copyYear").innerHTML = currentYear;
