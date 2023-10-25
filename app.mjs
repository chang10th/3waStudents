import chalk from "chalk";

const camarades = ['Elie', 'Hava', 'Jérôme', 'Jayson'];

const chalkColors = ['red','cyanBright','greenBright','magenta','yellow','cyan',];

camarades.forEach((camarade, index) => {
  const color = index % 6 + 1;
  console.log(chalk.keyword(chalkColors[color])(camarade));
});


