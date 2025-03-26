import { input, select } from "@inquirer/prompts";

const coffee = await select({
  message: "Quel café voulez vous ?",
  choices: ["Brésil", "Vietnam", "Éthiopie"],
});

const size = await select({
  message: "Quelle taille ?",
  choices: ["expresso", "allongé"],
});

const flavor = await select({
  message: "Quelle arome ?",
  choices: ["vanille", "noisette", "caramel", "aucun"],
});

const message = await input({
  message: "Un message pour votre barista ?",
});

console.log(
  `Café sélectionné: ${coffee}
Taille: ${size}
Arome: ${flavor}
Message: ${message}`
);
