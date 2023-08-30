// var changeBackground = document.querySelector("#changeBackgroundColor");
// var body = document.body;
// changeBackground.addEventListener("click", function () {
//   body.classList.toggle("darkMode");
// });
//
var section = document.querySelector("section");
var burgerIcon = document.querySelector(".burger");
var navLinks = document.querySelector(".nav-links");
burgerIcon.addEventListener("click", function () {
  navLinks.classList.toggle("show");
  burgerIcon.classList.toggle("navbar-active");
  section.classList.toggle("shift");
});

// document.getElementById("content1").classList.add("view");
// function showContent(contentId) {
//   var contents = document.querySelectorAll(".content");
//   contents.forEach(function (content) {
//     content.classList.remove("view");

//     var contentSelect = document.getElementById(contentId);
//     contentSelect.classList.add("view");
//   });
// }
document.getElementById("content1").classList.add("view");
function showContent(contentId) {
  var contents = document.querySelectorAll(".content");
  contents.forEach(function (content) {
    content.classList.remove("view");

    var contentSelect = document.getElementById(contentId);
    contentSelect.classList.add("view");
  });
}

// document.getElementById("toggleButton").addEventListener("click", function () {
//   var sectionElement = document.querySelector(".section3");
//   var toggleButton = document.getElementById("toggleButton");
//   if (sectionElement.classList.contains("night-mode")) {
//     sectionElement.classList.remove("night-mode");
//     toggleButton.innerHTML = '<i class = "fas fa-sun"></i>';
//   } else {
//     sectionElement.classList.add("night-mode");
//     toggleButton.innerHTML = '<i class = "fas fa-moon"></i>';
//   }
// });
document.querySelector(".toggleButton").addEventListener("click", function () {
  var bodyElement = document.querySelector("body");
  var toggleButton = document.querySelector(".toggleButton");
  if (bodyElement.classList.contains("night-mode")) {
    bodyElement.classList.remove("night-mode");
    toggleButton.innerHTML = '<i class = "fas fa-sun"></i>';
  } else {
    bodyElement.classList.add("night-mode");
    toggleButton.innerHTML = '<i class = "fas fa-moon"></i>';
  }
});

var carousel = document.querySelector(".carousel");
var prevBtn = document.getElementById("right2");
var nextBtn = document.getElementById("right1");
var currentIndex = 0;

var images = carousel.querySelectorAll("div");

images[currentIndex].classList.add("display");
nextBtn.addEventListener("click", function () {
  images[currentIndex].classList.remove("display");
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add("display");
});
prevBtn.addEventListener("click", function () {
  images[currentIndex].classList.remove("display");
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  images[currentIndex].classList.add("display");
});

var contactForm = document
  .getElementById("form")
  .addEventListener("submit", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var mailtoLink = `mailto:prehsiiguah@gmail.com? subject= contactForm submission&body name: ${name} %OD%OAEmail: ${email} %OD%OMessage: ${message}`;
    window.location.href = mailtoLink;
  });
