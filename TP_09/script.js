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

// TP_09 - Utilisation de jQuery

$(".nav-links a").hover(
  function () {
    $(this).css("color", "red");
  },
  function () {
    $(this).css("color", "white");
  }
);

$(document).on("click", 'a[href^="#"]', function (event) {
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    500
  );
});

// TP_09 - Utilisation de lodash
let page = 0;

let eventsDisplayed = _.chunk(evenementsMontagne, 5);
const eventSection = document.getElementById("events");

function createEventElement(event) {
  console.log(event);
  //   const p = document.createElement("p");
  //   p.textContent = event.titre;
  //   return p;

  const template = document.createElement("template");
  template.innerHTML = `
        <div class="event-card">
          <h3 class="event-title">${event.titre}</h3>
          <p class="event-content">${event.content}</p>
          <p class="event-date">${event.date}</p>
          <p class="event-category">${event.category}</p>
        </div>
      `;

  console.log(template);

  return template.content.firstElementChild.cloneNode(true);
}

function displayEvents() {
  eventSection.textContent = "";

  for (const event of eventsDisplayed[page]) {
    const eventElement = createEventElement(event);
    eventSection.appendChild(eventElement);
  }

  $("#page-indicator").text(`Page ${page + 1} / ${eventsDisplayed.length}`);
}

displayEvents();

$("#page-previous").click(function () {
  if (page > 0) {
    page--;
  }
  displayEvents();
});

$("#page-next").click(function () {
  if (page < eventsDisplayed.length) {
    page++;
  }
  displayEvents();
});

$("#search-button").click(function () {
  const query = document.getElementById("search-query").value;
  console.log(query);
  const eventsFiltered = evenementsMontagne.filter((event) =>
    event.titre.includes(query)
  );
  eventsDisplayed = _.chunk(eventsFiltered, 5);
  displayEvents();
});

document.getElementById("sort").addEventListener("change", function (e) {
  console.log(e.target.value);

  switch (e.target.value) {
    case "":
      eventsDisplayed = evenementsMontagne;
      break;
    case "date-old-first":
      eventsDisplayed = _.sortBy(evenementsMontagne, (event) => event.date);
      break;
    case "date-new-first":
      eventsDisplayed = _.reverse(
        _.sortBy(evenementsMontagne, (event) => event.date)
      );
      break;
  }

  eventsDisplayed = _.chunk(eventsDisplayed, 5);

  displayEvents();
});
