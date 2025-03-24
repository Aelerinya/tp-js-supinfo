/**
 * TP — Manipulation du DOM en JavaScript
 * 1WEBD
 */

// Le bouton de changement de thème a l'id #theme-toggle
// Pour passer au mode sombre, il faut ajouter la classe .dark-theme à l'élément body

const themeToggleButton = document.getElementById("theme-toggle")
const body = document.querySelector("body")

themeToggleButton.addEventListener("click", function (_e) {
    if (body.classList.contains("dark-theme")) {
        body.classList.remove("dark-theme")
    } else {
        body.classList.add("dark-theme")
    }
})