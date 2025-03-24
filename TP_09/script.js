/**
 * TP — Manipulation du DOM en JavaScript
 * 1WEBD
 */

// Le bouton de changement de thème a l'id #theme-toggle
// Pour passer au mode sombre, il faut ajouter la classe .dark-theme à l'élément body

const themeToggleButton = document.getElementById("theme-toggle");
const body = document.querySelector("body");

themeToggleButton.addEventListener("click", function (_e) {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
  } else {
    body.classList.add("dark-theme");
  }
});

$(".nav-links a").hover(function () {
  $(this).css("color", "red");
}, function () {
  $(this).css("color", "white");
});
// const links = $(".nav-links a");
// console.log(links);

// for (const link of links) {
//   console.log(link);

//   link.hover(function () {
//     link.css("color", "red");
//   });
// }

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});