/**
 * TP 03 — Manipulation de données
 * 1WEBD
 *
 * Instructions : Complétez les exercices ci-dessous en suivant les consignes.
 * Certaines parties du code sont déjà fournies, d'autres sont à compléter.
 * Des tests sont inclus à la fin de chaque exercice pour vérifier vos réponses.
 */

// ==============================================================
// Exercice 1 : Manipulation de tableaux
// ==============================================================

console.log("=== Exercice 1 ===");

// TODO: Créez un tableau nommé `fruits` contenant les éléments suivants :
// "pomme", "banane", "orange"
const fruits = [];

// TODO: Affichez dans la console le premier fruit du tableau
console.log();

// TODO: Ajoutez "mangue" à la fin du tableau
// Utilisez la méthode appropriée

// TODO: Remplacez le deuxième élément du tableau par "fraise"
// Indice: les index commencent à 0

// Test pour l'exercice 1
console.log("Test Exercice 1:");
console.log("Tableau fruits:", fruits);
console.log("Résultat attendu: ['pomme', 'fraise', 'orange', 'mangue']");
console.log(
  "Test réussi:",
  JSON.stringify(fruits) ===
    JSON.stringify(["pomme", "fraise", "orange", "mangue"])
);

// ==============================================================
// Exercice 2 : Parcourir un tableau
// ==============================================================

console.log("\n=== Exercice 2 ===");

// TODO: Affichez chaque fruit du tableau avec une boucle for
console.log("Affichage avec boucle for:");
// Écrivez votre code ici

// TODO: Affichez chaque fruit du tableau avec la méthode .forEach
console.log("Affichage avec forEach:");
// Écrivez votre code ici

// ==============================================================
// Exercice 3 : Transformation de tableau
// ==============================================================

console.log("\n=== Exercice 3 ===");

// TODO: Créez un tableau nommé `nums` contenant les chiffres suivants : 3, 5, 7, 9, 11
const nums = [];

// TODO: Doublez tous les éléments du tableau
// Utilisez la méthode map pour créer un nouveau tableau
const doubledNums = [];

// TODO: Filtrez le tableau obtenu vers un nouveau tableau nommé `bigNums`
// Conservez uniquement les nombres supérieurs à 10
const bigNums = [];

// TODO: Calculez la somme de chaque tableau
// Conseil: Regarder la documentation de la méthode `reduce`
const sumNums = 0;
const sumDoubledNums = 0;
const sumBigNums = 0;

// Test pour l'exercice 3
console.log("Test Exercice 3:");
console.log("Tableau nums:", nums);
console.log("Tableau doubledNums:", doubledNums);
console.log("Tableau bigNums:", bigNums);
console.log("Somme nums:", sumNums, "- Attendu: 35");
console.log("Somme doubledNums:", sumDoubledNums, "- Attendu: 70");
console.log("Somme bigNums:", sumBigNums, "- Attendu: 42");

// ==============================================================
// Exercice 4 : Tableau d'objets
// ==============================================================

console.log("\n=== Exercice 4 ===");

// TODO: Créez un tableau nommé `students` contenant trois objets représentant des étudiants
// Chaque étudiant doit avoir un nom, un âge et une note
const students = [
  // Complétez avec trois étudiants
];

// TODO: Parcourez le tableau pour afficher dans la console le nom et la note de chaque étudiant
console.log("Nom et note de chaque étudiant:");
// Écrivez votre code ici

// TODO: Trouvez tous les étudiants ayant une note au-dessus de 12
// Utilisez la méthode filter
const goodStudents = [];

// TODO: Créez un nouveau tableau ne comprenant que les noms des étudiants
// Utilisez la méthode map
const studentNames = [];

// Test pour l'exercice 4
console.log("Test Exercice 4:");
console.log("Étudiants avec note > 12:", goodStudents);
console.log("Noms des étudiants:", studentNames);

// ==============================================================
// Exercice 5 : Objets et méthodes
// ==============================================================

console.log("\n=== Exercice 5 ===");

// TODO: Créez un objet nommé `supinfoModule` avec les propriétés suivantes:
// - nom: "1WEBD"
// - professeur: "Mme Martin"
// - students: utilisez le tableau students créé dans l'exercice précédent
const supinfoModule = {
  // Complétez l'objet ici

  // TODO: Ajoutez la méthode addStudent qui prend un nom, un âge et une note
  // et ajoute un nouvel étudiant à la liste
  addStudent: function () {
    // Écrivez votre code ici
  },

  // TODO: Ajoutez la méthode afficherMoyenne qui affiche la moyenne des notes de la classe
  afficherMoyenne: function () {
    // Écrivez votre code ici
  },
};

// Test pour l'exercice 5
console.log("Test Exercice 5:");
console.log("Module avant ajout:", supinfoModule);
supinfoModule.addStudent("Pierre", 22, 17);
console.log("Module après ajout:", supinfoModule);
console.log("Affichage de la moyenne:");
supinfoModule.afficherMoyenne();
