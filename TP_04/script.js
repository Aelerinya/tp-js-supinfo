/**
 * TP — Classes et POO en JavaScript
 * 1WEBD
 *
 * Instructions : Complétez les exercices ci-dessous en suivant les consignes.
 * Certaines parties du code sont déjà fournies, d'autres sont à compléter.
 * Des tests sont inclus à la fin de chaque exercice pour vérifier vos réponses.
 */

// ==============================================================
// Exercice 1 : Création d'une classe Person
// ==============================================================

console.log("=== Exercice 1 ===");

// TODO: Créez une classe Person avec les propriétés name et age
// TODO: Ajoutez une méthode introduction() qui renvoie la phrase "Hi, my name is <name> and I'm <age>"
class Person {
  // Complétez la classe ici

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduction() {
    return `Hi, my name is ${this.name} and I'm ${this.age}`;
    // On peut aussi faire
    // return "Hi, my name is " + this.name + " and I'm " + this.age;
  }
}

// TODO: Créez un objet de la classe Person avec votre nom et votre âge
const person = new Person("Lucie", 24); // Remplacez null par votre code

// --------------------- TESTS ---------------------

console.log("Test Exercice 1:");
console.log(person.introduction());
console.log("Résultat attendu: Hi, my name is <votre nom> and I'm <votre âge>");

// ==============================================================
// Exercice 2 : Héritage de classes
// ==============================================================

console.log("\n=== Exercice 2 ===");

// TODO: Créez une classe Animal avec une méthode makeSound()
// TODO: Ajoutez des getters et setters pour la propriété name
// IMPORTANT: Vous devez utiliser une propriété privée (convention avec _) pour stocker le nom
// et implémenter des méthodes get name() et set name() pour y accéder
class Animal {
  // Complétez la classe ici

  constructor(name) {
    this._name = name;
  }

  makeSound() {
    return "Grrrr";
  }

  // Le setter est appelé quand on fait `dog.name = "nouveau nom"`
  set name(newName) {
    console.log(`Le nom a été changé: ${this._name} -> ${newName}`);
    this._name = newName;
  }

  get name() {
    console.log("Le nom a été accédé", this._name);
    return this._name;
  }
}

// TODO: Créez une classe Dog qui étend Animal
// TODO: Surchargez la méthode makeSound() pour qu'elle renvoie "bark!"
class Dog extends Animal {
  // Complétez la classe ici

  makeSound() {
    return "bark!";
  }
}

// TODO: Créez un objet de la classe Dog
const dog = new Dog("Felix"); // Remplacez null par votre code

// --------------------- TESTS ---------------------

// Test pour l'exercice 2
console.log("Test Exercice 2:");
console.log("Dog name:", dog.name);
console.log("Dog sound:", dog.makeSound());

// Test du getter et setter
const initialName = dog.name;
dog.name = "Max";
console.log("New dog name after setter:", dog.name);
console.log(
  "Test réussi getter et setter:",
  dog.name === "Max" && dog.name !== initialName
);

// Test de la propriété privée
console.log("Vérification de l'utilisation d'une propriété privée:");
const dogProps = Object.getOwnPropertyNames(dog);
const hasNameProp = dogProps.includes("name");
const hasUnderscoreNameProp = dogProps.some(
  (prop) => prop.includes("_") && prop.includes("name")
);
console.log(
  "La classe utilise un getter/setter (pas de propriété 'name' directe):",
  !hasNameProp
);
console.log(
  "La classe utilise une propriété privée avec convention underscore:",
  hasUnderscoreNameProp
);

// Test de la méthode makeSound()
console.log("Test makeSound:", dog.makeSound() === "bark!");

// ==============================================================
// Exercice 3 : Classes abstraites et polymorphisme
// ==============================================================

console.log("\n=== Exercice 3 ===");

// TODO: Créez une classe abstraite Shape avec une méthode getSurface()
// Note: JavaScript n'a pas de concept natif de classes abstraites
// Nous utiliserons une convention pour simuler ce comportement
class Shape {
  // Complétez la classe ici pour simuler une classe abstraite

  constructor() {}

  getSurface() {
    throw Error("getSurface doit être implémenté dans la classe enfant");
  }
}

// TODO: Créez une classe Circle qui étend Shape
// TODO: Implémentez la méthode getSurface() pour le cercle
class Circle extends Shape {
  // Complétez la classe ici

  constructor(rayon) {
    super();
    this.rayon = rayon;
  }

  getSurface() {
    return this.rayon * this.rayon * Math.PI;
  }
}

// TODO: Créez une classe Square qui étend Shape
// TODO: Implémentez la méthode getSurface() pour le carré
class Square extends Shape {
  // Complétez la classe ici

  constructor(longueur) {
    super();
    this.longueur = longueur;
  }

  getSurface() {
    return Math.pow(this.longueur, 2);
  }
}

// --------------------- TESTS ---------------------

// Tests pour l'exercice 3
console.log("Test Exercice 3:");

// Test pour la classe Circle
const circle = new Circle(5);
console.log("Circle surface:", circle.getSurface());
console.log("Circle surface (expected):", Math.PI * 25);
console.log(
  "Test réussi Circle:",
  Math.abs(circle.getSurface() - Math.PI * 25) < 0.0001
);

// Test pour la classe Square
const square = new Square(4);
console.log("Square surface:", square.getSurface());
console.log("Square surface (expected):", 16);
console.log("Test réussi Square:", square.getSurface() === 16);

// Test pour l'abstraction
console.log("Test pour l'abstraction:");
try {
  const shape = new Shape();
  console.log("Échec: La classe abstraite a été instanciée");
} catch (error) {
  console.log(
    "Succès: La classe abstraite ne peut pas être instanciée directement"
  );
}
