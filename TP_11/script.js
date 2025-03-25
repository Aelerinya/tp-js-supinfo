/**
 * TP — Manipulation du DOM en JavaScript
 * 1WEBD
 */

// Le bouton de changement de thème a l'id #theme-toggle
// Pour passer au mode sombre, il faut ajouter la classe .dark-theme à l'élément body

const themeToggleButton = document.getElementById("theme-toggle");
const body = document.querySelector("body");

const darkModeKey = "dark-mode";
const darkModeSetting = localStorage.getItem(darkModeKey);
// "true" / "false"
// "0" / "1"
// "dark" / "light"

if (darkModeSetting === "dark") {
  body.classList.add("dark-theme");
}

themeToggleButton.addEventListener("click", function (_e) {
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    localStorage.setItem(darkModeKey, "light");
  } else {
    body.classList.add("dark-theme");
    localStorage.setItem(darkModeKey, "dark");
  }
});
