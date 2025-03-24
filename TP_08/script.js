// TP 08 - Galerie d'images avec Infinite Scrolling
// Variables globales
let isLoading = false; // Pour éviter les chargements multiples
let page = 1; // Pour suivre la page actuelle de chargement
const imagesPerLoad = 10; // Nombre d'images à charger à chaque fois

// ====================================================================
// Fonction pour récupérer des images depuis l'API Picsum
// À COMPLÉTER PAR LES ÉLÈVES
// ====================================================================
async function fetchImagesFromAPI(count, page) {
  // TODO: Implémentez cette fonction pour récupérer des images depuis l'API Picsum
  // - Utilisez fetch pour faire une requête à l'API Picsum
  // - Récupérez des images aléatoires de taille 400x300
  // - Retournez un tableau d'URLs d'images
  // Exemple de structure de retour attendue:
  // return ['https://picsum.photos/400/300?random=1', 'https://picsum.photos/400/300?random=2', ...];
}

// ====================================================================
// Fonction pour ajouter des images à la galerie
// À COMPLÉTER PAR LES ÉLÈVES
// ====================================================================
function addImagesToGallery(imageUrls) {
  // TODO: Implémentez cette fonction pour ajouter des images à la galerie
  // - Récupérez l'élément DOM de la galerie
  // - Pour chaque URL d'image dans le tableau imageUrls:
  //   - Créez un élément <img>
  //   - Définissez ses attributs (src, alt, etc.)
  //   - Ajoutez l'élément à la galerie
}

// ====================================================================
// Fonction pour charger plus d'images
// ====================================================================
async function loadMoreImages() {
  // Évite les chargements multiples simultanés
  if (isLoading) return;

  try {
    isLoading = true;

    // Récupère de nouvelles images (fonction à implémenter par les élèves)
    const newImages = await fetchImagesFromAPI(imagesPerLoad, page);

    // Ajoute les images à la galerie (fonction à implémenter par les élèves)
    addImagesToGallery(newImages);

    // Incrémente le compteur de page pour la prochaine requête
    page++;
  } catch (error) {
    console.error("Erreur lors du chargement des images:", error);
  } finally {
    isLoading = false;
  }
}

// ====================================================================
// Fonction pour détecter quand l'utilisateur atteint le bas de la page
// ====================================================================
function handleScroll() {
  // Calcule la position de défilement et la hauteur totale de la page
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Si l'utilisateur est proche du bas de la page (à 200px du bas), charge plus d'images
  if (scrollTop + windowHeight >= documentHeight - 200 && !isLoading) {
    loadMoreImages();
  }
}

// ====================================================================
// Initialisation lors du chargement de la page
// ====================================================================
document.addEventListener("DOMContentLoaded", () => {
  // Charge les premières images
  loadMoreImages();

  // Ajoute l'écouteur d'événement pour le défilement
  window.addEventListener("scroll", handleScroll);
});
