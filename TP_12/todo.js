import { readFile, writeFile } from "node:fs/promises";
import { input, select } from "@inquirer/prompts";
import { exit } from "node:process";

async function getTasks() {
  try {
    const content = await readFile("todo.json", {
      encoding: "utf-8",
    });
    const tasks = JSON.parse(content);
    return tasks;
  } catch (e) {
    return [];
  }
}

async function saveTasks(tasks) {
  const content = JSON.stringify(tasks, undefined, 4);
  const file = await writeFile("todo.json", content, {
    encoding: "utf-8",
  });
}

let tasks = await getTasks();
console.log("Liste des tâches", tasks);

while (true) {
  const action = await select({
    message: "Choisissez votre action",
    choices: [
      {
        name: "Créer une tâche",
        value: "create",
      },
      {
        name: "Compléter une tâche",
        value: "complete",
      },
      {
        name: "Afficher toutes les tâches",
        value: "display",
      },
      {
        name: "Supprimer une tâche",
        value: "delete",
      },
      {
        name: "Supprimer toutes les tâches",
        value: "clear",
      },
      {
        name: "Quitter",
        value: "quit",
      },
    ],
  });

  switch (action) {
    case "create":
      const name = await input({
        message: "Nom de la tâche",
      });
      tasks.push({
        name,
        completed: false,
      });
      break;

    case "complete":
      const selectedTask = await select({
        message: "Choisissez la tâche à completer",
        choices: tasks.map((t, i) => ({
          name: t.name,
          value: i,
          disabled: t.completed,
        })),
      });
      tasks[selectedTask].completed = true;
      break;

    case "display":
      for (const task of tasks) {
        console.log(`${task.completed ? "✅" : "❌"} ${task.name}`);
      }
      break;

    case "delete":
      const taskToDelete = await select({
        message: "Choisissez la tâche à supprimer",
        choices: tasks.map((t, i) => ({
          name: t.name,
          value: i,
        })),
      });

      tasks.splice(taskToDelete, 1);
      break;

    case "clear":
      tasks = [];
      break;

    case "quit":
      await saveTasks(tasks);
      exit();
  }
}
