// File: main.js
// Import Highway
import Highway from "@dogstudio/highway";

// Tailwinf config file
import Tailwind from "../../tailwind.config";

console.log()

// Fade
class Fade extends Highway.Transition {
	in({ from, to, done }) {
		// Reset Scroll
		window.scrollTo(0, 0);

		// Remove Old View
		from.remove();

		// Animation
		const main: HTMLElement = to.querySelector("main");
		const sections: NodeListOf<HTMLElement> = main.querySelectorAll("section, footer, header");

		// Staggering animation via setTimeout
		sections.forEach((section, index) => {
			section.style.opacity = "0";

			setTimeout(() => {
				section.classList.add("coming");
			}, index * 100);
		});

		initSwiper();
		done();
	}

	out({ from, done }) {
		// Animation
		// from.style.opacity = 0;

		done();
	}
}

// Call Highway.Core once.
// Store it in a variable to use events
// Call Highway.Core once.
const H = new Highway.Core({
	transitions: {
		default: Fade,
	},
});

/**
 * Import of Alpine.js
 * @link https://alpinejs.dev/
 */
// import Alpine from 'alpinejs';
// window.Alpine = Alpine;
// Alpine.start();

/**
 * Import Swiper
 */
  // import Swiper JS
import Swiper from 'swiper';

function initSwiper() {
	const swiper = new Swiper('.swiper', {
		slidesPerView: 1.2,
		spaceBetween: 40,
		breakpoints: {
			480: {
				slidesPerView: 1.5,
				spaceBetween: 30,
			},
			1024: {
				slidesPerView: 2.5,
				spaceBetween: 70,
			}
	
		}
	})
}

initSwiper();
