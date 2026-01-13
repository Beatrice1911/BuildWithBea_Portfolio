AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true
});

(function () {
    emailjs.init("EUbX7SyKOOBGZOqYI");
})();

const form = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    formStatus.textContent = "Sending...";

    emailjs.sendForm(
        "service_df69i6d",
        "template_n34ft0t",
        this
    ).then(() => {
        formStatus.textContent = "Message sent successfully!";
        formStatus.className = "success";
        form.reset();
    }).catch(() => {
        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.className = "error";
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});
