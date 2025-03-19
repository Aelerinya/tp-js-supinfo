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
