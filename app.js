const chalk = require('chalk');

const camarades = ['Elie', 'Hava', 'Jérôme', 'Jayson'];

camarades.forEach((camarade, index) => {
  const color = index % 6 + 1;
  console.log(chalk.keyword(chalkColors[color])(camarade));
});

// Define available chalk colors
const chalkColors = ['red','cyanBright','greenBright','magenta','yellow','cyan',];
