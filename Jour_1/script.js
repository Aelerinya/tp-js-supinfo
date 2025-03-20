/*
 * TP SUPINFO JavaScript jour 1
 * Code réalisé en live par Lucie Philippon
 */

// Partie 1

console.log("Hello, World!");

// Partie 2

// 1

console.log("Calculateur de TVA");

const montantHT = 10; // Number(prompt("Montant HT"));
const tauxTVA = 0.2; // Number(prompt("Taux TVA"));
const nombreArticles = 7; // Number(prompt("Nombre d'articles"));

console.log(montantHT, tauxTVA, nombreArticles);
console.log(`Données:
- Montant HT: ${montantHT} €
- Taux TVA: ${tauxTVA * 100} %
- Nombre d'articles: ${nombreArticles}`);

const total = montantHT * (1 + tauxTVA) * nombreArticles;

console.log(`Le montant TTC est ${total} €`);

// 2

let a = 1;
let b = 2;

console.log({ a, b });

// Échanger les valeurs de a et b avec une affectation multiple
[b, a] = [a, b];

console.log({ a, b });

// Échanger sans utiliser d’affectation
const c = a;
a = b;
b = c;

console.log({ a, b });

// Échanger avec (+) et (-)
// a = 1, b = 2
a = a + b; // a = 3
b = a - b; // b = 1
a = a - b; // a = 2

console.log({ a, b });

// 3
let [x, y, z] = [1, 2, 3];
console.log({ x, y, z });

[x, y, z] = [y, z, x];
console.log({ x, y, z });
