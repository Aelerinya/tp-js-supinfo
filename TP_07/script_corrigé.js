/**
 * TP — Fonctions Asynchrones en JavaScript
 * 1WEBD
 *
 * Instructions : Complétez les exercices ci-dessous en suivant les consignes.
 * Certaines parties du code sont déjà fournies, d'autres sont à compléter.
 */

// ==============================================================
// Fonction fournie : Simulation d'une requête à un serveur
// Cette fonction renvoie une promesse qui:
// - se résout avec un tableau de données après un délai aléatoire (1-4 secondes) dans 80% des cas
// - se rejette avec un message d'erreur dans 20% des cas
// ==============================================================

function fetchSimulatedData() {
  return new Promise((resolve, reject) => {
    const delay = Math.random() * 3000 + 1000;
    setTimeout(() => {
      if (Math.random() > 0.2) {
        resolve(["Donnée 1", "Donnée 2", "Donnée 3"]);
      } else {
        reject("Erreur : Impossible de récupérer les données");
      }
    }, delay);
  });
}

// Compteurs
let requestCount = 0;
let errorCount = 0;

// Éléments du DOM
const fetchButton = document.getElementById("fetch-button");
const dataContainer = document.getElementById("data-container");
const requestCounter = document.getElementById("request-counter");
const errorCounter = document.getElementById("error-counter");
const loadingIndicator = document.getElementById("loading-indicator");

// ==============================================================
// Exercice 1 : Création d'une fonction asynchrone fetchData
// ==============================================================

// TODO: Créez une fonction asynchrone fetchData() qui:
// - Appelle fetchSimulatedData()
// - Gère la promesse avec try/catch
// - Incrémente `requestCount` en cas de succès
// - Incrémente `errorCount` en cas d'échec
async function fetchData() {
  // Complétez cette fonction
  // Utilisez try/catch pour gérer les erreurs
  fetchButton.disabled = true;
  loadingIndicator.classList.add("active");

  try {
    const result = await fetchSimulatedData();
    requestCount++;
    console.log("Requête réussie");

    displayData(result);
  } catch (error) {
    errorCount++;
    console.log("Erreur lors de la requête");

    displayError(error);
  }

  updateCounters();

  fetchButton.disabled = false;
  loadingIndicator.classList.remove("active");
}

// TODO: Ajoutez un event listener sur le bouton fetchButton
// Ce listener doit appeler fetchData()

fetchButton.addEventListener("click", fetchData);

// ==============================================================
// Exercice 2 : Gestion de l'interface utilisateur
// ==============================================================

// TODO: Modifiez la fonction fetchData pour appelez les fonctions ci-dessous

// Fonction pour afficher les données
function displayData(data) {
  // TODO: Implémentez cette fonction pour afficher les données dans dataContainer
  dataContainer.textContent = data;
}

// Fonction pour afficher les erreurs
function displayError(error) {
  // TODO: Implémentez cette fonction pour afficher l'erreur dans dataContainer
  dataContainer.textContent = error;
}

// Fonction pour mettre à jour les compteurs
function updateCounters() {
  // TODO: Implémentez cette fonction pour mettre à jour les compteurs

  requestCounter.textContent = requestCount;
  errorCounter.textContent = errorCount;
}

// ==============================================================
// Bonus: Amélioration de l'expérience utilisateur
// ==============================================================

// Améliorez l'event listener pour indiquer que la requête est en cours:
// - Afficher l'indicateur de chargement
// - Désactiver le bouton pendant le chargement
// - Réactiver le bouton une fois terminé
// - Masquer l'indicateur de chargement
