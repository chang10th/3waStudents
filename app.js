import chalk from "chalk";

const camarades = ['Elie', 'Hava', 'Jérôme', 'Jayson'];

const chalkColors = ['red', 'cyanBright', 'greenBright', 'magenta', 'yellow', 'cyan', 'blue'];

camarades.forEach((camarade, index) => {
  const color = index % chalkColors.length; // Utilisation du modulo pour boucler à travers les couleurs
  console.log(chalk[chalkColors[color]](camarade));
});