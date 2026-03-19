// ── HAMBURGER ──────────────────────────────────────────────────────────────

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
});


// ── CONTENT CARDS FADE-IN ON SCROLL ────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
    const contentContainers = document.querySelectorAll(".content-img-container");
    const offset = 200;

    function isElementInViewport(el, offset) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 - offset &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    window.addEventListener("scroll", function () {
        contentContainers.forEach(function (container) {
            if (isElementInViewport(container, offset)) {
                container.classList.add("visible");
            } else {
                container.classList.remove("visible");
            }
        });
    });

    window.dispatchEvent(new Event('scroll'));
});


// ── PHOTO SLIDER ────────────────────────────────────────────────────────────

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 50000);
    }
}

function showSlide(index) {
    if (index >= slides.length) slideIndex = 0;
    else if (index < 0) slideIndex = slides.length - 1;

    slides.forEach(slide => slide.classList.remove("displaySlide"));
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function nextSlideImgClick() {
    slideIndex++;
    showSlide(slideIndex);
}


// ── TEXT SELECTOR ───────────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
    const topicMap = {
        topicOne: 'textOne',
        topicTwo: 'textTwo',
        topicThree: 'textThree',
    };

    Object.entries(topicMap).forEach(([buttonId, textId]) => {
        const btn = document.getElementById(buttonId);
        if (btn) btn.addEventListener('click', () => showText(textId));
    });

    function showText(textId) {
        document.querySelectorAll('.text').forEach(t => t.classList.remove('displaySlide'));
        const target = document.getElementById(textId);
        if (target) target.classList.add('displaySlide');
    }
});


// ── ACTIVE NAV HIGHLIGHT ON SCROLL ─────────────────────────────────────────

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".menu li a");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.forEach(link => link.classList.remove("nav-active"));
                    const active = document.querySelector(`.menu li a[href="#${entry.target.id}"]`);
                    if (active) active.classList.add("nav-active");
                }
            });
        },
        { threshold: 0.3 }
    );

    sections.forEach(section => observer.observe(section));
});
