// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// Header Background on Scroll
// ===============================

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.style.background = "rgba(0,0,0,.85)";
            header.style.backdropFilter = "blur(18px)";

        } else {

            header.style.background = "rgba(255,255,255,.05)";
            header.style.backdropFilter = "blur(10px)";

        }

    });

}

// ===============================
// Scroll Reveal Animation
// ===============================

const revealItems = document.querySelectorAll(
    ".heroText,.heroImage,.about,.card,.box,.contact"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";

        }

    });

}, {
    threshold: 0.2
});

revealItems.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(60px)";
    item.style.transition = ".8s";

    observer.observe(item);

});

// ===============================
// Back To Top Button
// ===============================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:25px;
right:25px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#fff;
color:#000;
font-size:22px;
cursor:pointer;
display:none;
box-shadow:0 0 15px rgba(255,255,255,.25);
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll", () => {

    topBtn.style.display = window.scrollY > 300 ? "block" : "none";

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// ===============================
// Typing Effect
// ===============================

const text = "Businessman | Entrepreneur";

const typing = document.querySelector(".heroText h2");

if (typing) {

    let i = 0;

    typing.innerHTML = "";

    function type() {

        if (i < text.length) {

            typing.innerHTML += text.charAt(i);

            i++;

            setTimeout(type, 80);

        }

    }

    type();

}
// ===============================
// Theme Toggle (Dark / Light)
// ===============================

const themeBtn = document.getElementById("theme-toggle");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {

            localStorage.setItem("theme", "dark");

        } else {

            localStorage.setItem("theme", "light");

        }

    });

}

window.addEventListener("load", () => {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

    }

});

// ===============================
// Gallery Lightbox
// ===============================

const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

if (galleryImages.length && lightbox && lightboxImg && closeBtn) {

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || "";

        });

    });

    closeBtn.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

    lightbox.addEventListener("click", (e) => {

        if (e.target === lightbox) {

            lightbox.style.display = "none";

        }

    });

}



emailjs.init("NJ3L7oc4K72PMYC0e");

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        emailjs.send(
            "service_0c4p277",
            "template_prx0bjq",
            {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            }
        )
        .then(() => {

            document.getElementById("status").innerHTML =
                "✅ Message Sent Successfully!";

            contactForm.reset();

        })
        .catch(() => {

            document.getElementById("status").innerHTML =
                "❌ Failed to send message.";

        });

    });

}

// ===============================
// AOS Animation
// ===============================

if (typeof AOS !== "undefined") {

    AOS.init({
        duration: 1000,
        once: true,
        offset: 120
    });

}

// ===============================
// Loading Animation
// ===============================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Console Message
// ===============================

console.log("%cMAHA Portfolio Loaded Successfully",
"color:#00ff99;font-size:16px;font-weight:bold;");
``
window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

if(loader){

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

}

});
// ===============================
// Skills Animation
// ===============================

const skillSection = document.querySelector("#skills");
const progressBars = document.querySelectorAll(".progress-bar");

let skillsAnimated = false;

window.addEventListener("scroll", () => {

    if (!skillSection || skillsAnimated) return;

    const sectionTop = skillSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {

        progressBars.forEach(bar => {

            const width = bar.dataset.width;
            if (width) {
                bar.style.width = width;
            }

        });

        skillsAnimated = true;

    }

});

window.onscroll = function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

}

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
window.addEventListener("load", () => {

    const preloader = document.getElementById("preloader");

    preloader.classList.add("hide");

});

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });

});
