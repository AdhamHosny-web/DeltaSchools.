const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#nav");

// Open and close the mobile menu
menuButton.addEventListener("click", function () {
    navigation.classList.toggle("open");
});

// Close menu after clicking a navigation link
const links = navigation.querySelectorAll("a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("open");
    });
});

// Reveal elements smoothly while scrolling
const elements = document.querySelectorAll(
    ".card, .about-content, .activities-box, .contact-box"
);

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

elements.forEach(function (element) {
    observer.observe(element);
});