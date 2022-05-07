import Highway from "@dogstudio/highway";
import Tailwind from "../../tailwind.config";

/**
 * Page Transition with Highway.js
 */
class Fade extends Highway.Transition {
	in({ from, to, done }) {
		// Animation
		const main: HTMLElement = to.querySelector("main");
		const sections: NodeListOf<HTMLElement> = main.querySelectorAll("section, footer, header");

		// Reset Scroll
		window.scrollTo(0, 0);

		// Remove Old View
		from.remove();

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
import Swiper from "swiper";

function initSwiper() {
	const swiper = new Swiper(".swiper", {
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
			},
		},
	});
}

initSwiper();

/**
 * Accordion
 */
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
	const collapses: NodeListOf<HTMLElement> = accordion.querySelectorAll(".accordion__collapse");

	collapses.forEach((collapse) => {
		const header: HTMLElement = collapse.querySelector(".accordion__header");

		header.addEventListener("click", (event) => {
			const isOpen = collapse.classList.contains('open');

			collapses.forEach((collapse) => {
				collapse.classList.remove("open");
			});

			if(!isOpen) {
				collapse.classList.add("open");
			}
		});
	});
});
