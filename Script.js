/* =========================================
   MOBILE MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");

});


/* =========================================
   CLOSE MENU WHEN LINK IS CLICKED
========================================= */

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("mobile-active");

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section, .experience-card, .experience-details > div, .skill-card, .other-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >=
            sectionTop - sectionHeight / 3
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   PROJECT DASHBOARD ANIMATION
========================================= */

const dashboardBoxes =
    document.querySelectorAll(".dashboard-box");

dashboardBoxes.forEach((box, index) => {

    box.addEventListener("mouseenter", () => {

        box.style.transform = "translateY(-5px)";

        box.style.transition = "0.3s";

    });


    box.addEventListener("mouseleave", () => {

        box.style.transform = "translateY(0)";

    });

});


/* =========================================
   SIMPLE TEXT EFFECT
========================================= */

const heroTitle =
    document.querySelector(".hero-text h1");

heroTitle.addEventListener("mouseenter", () => {

    heroTitle.style.transform = "translateX(8px)";

    heroTitle.style.transition = "0.3s";

});


heroTitle.addEventListener("mouseleave", () => {

    heroTitle.style.transform = "translateX(0)";

});


/* =========================================
   CURRENT YEAR
========================================= */

const year = new Date().getFullYear();

const copyright =
    document.querySelector(".copyright");

copyright.textContent =
    `© ${year} Pyin Nyar. All rights reserved.`;