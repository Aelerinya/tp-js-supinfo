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
const fruits = ["pomme", "banane", "orange"];

// TODO: Affichez dans la console le premier fruit du tableau
console.log(fruits[0]);

// TODO: Ajoutez "mangue" à la fin du tableau
// Utilisez la méthode appropriée
fruits.push("mangue");
// Équivalent en python: fruits.append("mangue")

// TODO: Remplacez le deuxième élément du tableau par "fraise"
// Indice: les index commencent à 0
fruits[1] = "fraise";

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

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// TODO: Affichez chaque fruit du tableau avec la méthode .forEach
console.log("Affichage avec forEach:");
// Écrivez votre code ici

fruits.forEach((elem) => console.log(elem));
// Explication:
// forEach sélectionne l'élément 0 (pomme) puis applique console.log dessus : console.log("pomme")
// etc pour chaque élément

// Bonus: For in
console.log("Bonus: Affichage avec for in:");

for (const i in fruits) {
  console.log(fruits[i]);
}

// ==============================================================
// Exercice 3 : Transformation de tableau
// ==============================================================

console.log("\n=== Exercice 3 ===");

// TODO: Créez un tableau nommé `nums` contenant les chiffres suivants : 3, 5, 7, 9, 11
const nums = [3, 5, 7, 9, 11];

// TODO: Doublez tous les éléments du tableau
// Utilisez la méthode map pour créer un nouveau tableau
const doubledNums = nums.map((x) => x * 2);

// TODO: Filtrez le tableau obtenu vers un nouveau tableau nommé `bigNums`
// Conservez uniquement les nombres supérieurs à 10
const bigNums = doubledNums.filter((x) => x > 10);

// TODO: Calculez la somme de chaque tableau
// Conseil: Regarder la documentation de la méthode `reduce`
let sumNums = 0;
for (const n of nums) {
  sumNums += n;
}

const sumDoubledNums = doubledNums.reduce((somme, nombre) => somme + nombre, 0);

const sumBigNums = bigNums.reduce((somme, nombre) => somme + nombre, 0);

// Test pour l'exercice 3
console.log("Test Exercice 3:");
console.log("Tableau nums:", nums);
console.log("Tableau doubledNums:", doubledNums);
console.log("Tableau bigNums:", bigNums);
console.log("Somme nums:", sumNums, "- Attendu: 35");
console.log("Somme doubledNums:", sumDoubledNums, "- Attendu: 70");
console.log("Somme bigNums:", sumBigNums, "- Attendu: 54");

// ==============================================================
// Exercice 4 : Tableau d'objets
// ==============================================================

console.log("\n=== Exercice 4 ===");

// TODO: Créez un tableau nommé `students` contenant trois objets représentant des étudiants
// Chaque étudiant doit avoir un nom, un âge et une note
const students = [
  // Complétez avec trois étudiants
  {
    nom: "Alice",
    age: 20,
    note: 6,
  },
  {
    nom: "Bob",
    age: 20,
    note: 18,
  },
  {
    nom: "Caroll",
    age: 20,
    note: 13,
  },
];

// TODO: Parcourez le tableau pour afficher dans la console le nom et la note de chaque étudiant
console.log("Nom et note de chaque étudiant:");
// Écrivez votre code ici

for (const student of students) {
  console.log(student.nom, student.note);
}

// TODO: Trouvez tous les étudiants ayant une note au-dessus de 12
// Utilisez la méthode filter
const goodStudents = students.filter((student) => student.note > 12);

// TODO: Créez un nouveau tableau ne comprenant que les noms des étudiants
// Utilisez la méthode map
const studentNames = students.map((student) => student.nom);

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

  nom: "1WEBD",
  professeur: "Mme Philippon",
  students,

  // TODO: Ajoutez la méthode addStudent qui prend un nom, un âge et une note
  // et ajoute un nouvel étudiant à la liste
  addStudent: function (nom, age, note) {
    // Écrivez votre code ici

    this.students.push({
      nom,
      age,
      note,
    });
  },

  // TODO: Ajoutez la méthode afficherMoyenne qui affiche la moyenne des notes de la classe
  afficherMoyenne: function () {
    // Écrivez votre code ici

    const totalDesNotes = this.students.reduce(
      (acc, student) => acc + student.note,
      0
    );
    const moyenne = totalDesNotes / this.students.length;
    console.log(moyenne)
  },
};

// Test pour l'exercice 5
console.log("Test Exercice 5:");
console.log(supinfoModule);
// console.log("Module avant ajout:", supinfoModule);
console.log(supinfoModule.students);
supinfoModule.addStudent("Pierre", 22, 17);
console.log(supinfoModule.students);
console.log("Affichage de la moyenne:");
supinfoModule.afficherMoyenne();
