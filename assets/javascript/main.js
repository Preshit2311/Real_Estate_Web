// Load AOS only once (make sure only ONE script tag is present in your HTML)
AOS.init({
  duration: 1000, // Reasonable duration for smooth animations
  once: false, // Repeats on scroll up/down
  mirror: true, // Animates out when scrolling past in reverse
});

// Swiper js Slider for why choose us section
const swiperEl = document.querySelector(".mySwiper");
Object.assign(swiperEl, {
  grabCursor: true,
  effect: "creative",
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      translate: ["100%", 0, 0],
    },
  },
});
swiperEl.initialize();
