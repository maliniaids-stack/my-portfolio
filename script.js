// ----- Existing Menu & Scroll Logic -----
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY; 

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); 
                const targetLink = document.querySelector(`header nav a[href="#${id}"]`);
                if (targetLink) targetLink.classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x'); 
    navbar.classList.toggle('active'); 
};

// Close mobile menu when a nav link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});

// ----- New EmailJS Contact Form Logic -----
emailjs.init("gD29Py0J8nz_ymwSL");

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm("service_prh3qfj", "template_65w3gz8", this)
    .then(function () {
      alert("✅ Message sent successfully!");
      document.getElementById("contact-form").reset();
    }, function (error) {
      console.error("❌ Failed to send message:", error);
      alert("❌ Message failed to send. Please try again later.");
    });
});
