const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuBtn.textContent = "✕";

        menuBtn.setAttribute(
            "aria-label",
            "Close navigation menu"
        );

    } else {

        menuBtn.textContent = "☰";

        menuBtn.setAttribute(
            "aria-label",
            "Open navigation menu"
        );

    }

});

const navigationLinks =
    document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";

    });

});

const exploreBtn =
    document.getElementById("exploreBtn");

exploreBtn.addEventListener("click", function () {

    document.getElementById("features")
        .scrollIntoView({
            behavior: "smooth"
        });

});

const welcomeBtn =
    document.getElementById("welcomeBtn");

const welcomeMessage =
    document.getElementById("welcomeMessage");

welcomeBtn.addEventListener("click", function () {

    welcomeMessage.textContent =
        "Welcome! Thanks for visiting my interactive website.";

});

let counter = 0;

const counterValue =
    document.getElementById("counterValue");

const increaseBtn =
    document.getElementById("increaseBtn");

const decreaseBtn =
    document.getElementById("decreaseBtn");

const resetBtn =
    document.getElementById("resetBtn");

increaseBtn.addEventListener("click", function () {

    counter++;

    counterValue.textContent = counter;

});

decreaseBtn.addEventListener("click", function () {

    if (counter > 0) {

        counter--;

        counterValue.textContent = counter;

    }

});

resetBtn.addEventListener("click", function () {

    counter = 0;

    counterValue.textContent = counter;

});

const faqQuestions =
    document.querySelectorAll(".faq-question");

faqQuestions.forEach(function (question) {

    question.addEventListener("click", function () {

        const currentItem =
            question.parentElement;

        currentItem.classList.toggle("active");

    });

});

const contactForm =
    document.getElementById("contactForm");

const nameInput =
    document.getElementById("name");

const emailInput =
    document.getElementById("email");

const messageInput =
    document.getElementById("message");

const nameError =
    document.getElementById("nameError");

const emailError =
    document.getElementById("emailError");

const messageError =
    document.getElementById("messageError");

const successMessage =
    document.getElementById("successMessage");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMessage.textContent = "";

    let isValid = true;

    if (nameInput.value.trim() === "") {

        nameError.textContent =
            "Please enter your name.";

        isValid = false;

    }

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value.trim() === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else if (!emailPattern.test(emailInput.value.trim())) {

        emailError.textContent =
            "Please enter a valid email.";

        isValid = false;

    }

    if (messageInput.value.trim() === "") {

        messageError.textContent =
            "Please enter your message.";

        isValid = false;

    }

    if (isValid) {

        successMessage.textContent =
            "Message submitted successfully!";

        contactForm.reset();

    }

});
