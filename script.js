/* ==========================
   NAVBAR BLUR
========================== */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


/* ==========================
   HERO TEXT FADE
========================== */

const heroOverlay =
document.querySelector(".hero-overlay");

window.addEventListener("scroll", () => {

    const scroll =
    window.scrollY;

    heroOverlay.style.opacity =
    1 - scroll / 500;

});


/* ==========================
   SCROLL INDICATOR
========================== */

const indicator =
document.querySelector(
".scroll-indicator"
);

window.addEventListener("scroll", () => {

    if(window.scrollY > 100){

        indicator.style.opacity = "0";

    }else{

        indicator.style.opacity = "1";

    }

});


/* ==========================
   HERO PARALLAX
========================== */

const heroVideo =
document.querySelector(
".hero-video"
);

window.addEventListener("scroll", () => {

    const scroll =
    window.pageYOffset;

    heroVideo.style.transform =
    `translateY(${scroll * 0.15}px)`;

});


/* ==========================
   SCROLL REVEAL
========================== */

const fadeElements =
document.querySelectorAll(
".fade-in"
);

const observer =
new IntersectionObserver(

(entries)=>{

    entries.forEach((entry)=>{

        if(entry.isIntersecting){

            entry.target.classList.add(
            "show"
            );

        }

    });

},

{
    threshold:0.15
}

);

fadeElements.forEach((el)=>{

    observer.observe(el);

});


/* ==========================
   ACTIVE NAV LINK
========================== */

const sections =
document.querySelectorAll(
"section"
);

const navLinks =
document.querySelectorAll(
".nav-links a"
);

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach((section)=>{

        const sectionTop =
        section.offsetTop;

        if(
            window.scrollY >=
            sectionTop - 200
        ){

            current =
            section.getAttribute(
            "id"
            );

        }

    });

    navLinks.forEach((link)=>{

        link.classList.remove(
        "active"
        );

        if(
            link
            .getAttribute("href")
            .includes(current)
        ){

            link.classList.add(
            "active"
            );

        }

    });

});


/* ==========================
   INFINITE CAROUSEL
========================== */

document
.querySelectorAll(
".carousel-track"
)
.forEach((track)=>{

    track.innerHTML +=
    track.innerHTML;

});


/* ==========================
   PAUSE CAROUSEL ON HOVER
========================== */

const carousels =
document.querySelectorAll(
".carousel"
);

carousels.forEach((carousel)=>{

    carousel.addEventListener(
    "mouseenter",
    ()=>{

        carousel
        .querySelector(
        ".carousel-track"
        )
        .style
        .animationPlayState =
        "paused";

    });

    carousel.addEventListener(
    "mouseleave",
    ()=>{

        carousel
        .querySelector(
        ".carousel-track"
        )
        .style
        .animationPlayState =
        "running";

    });

});


/* ==========================
   OPTIONAL:
   SLOWER ON MOBILE
========================== */

if(window.innerWidth < 768){

    document
    .querySelectorAll(
    ".carousel-track"
    )
    .forEach((track)=>{

        track.style.animationDuration =
        "55s";

    });

}