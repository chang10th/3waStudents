import chalk from './node_modules/chalk';

const camarades = ['Elie', 'Hava', 'Jérôme', 'Jayson'];

camarades.forEach((camarade, index) => {
  const color = index % 6 + 1;
  console.log(chalk.keyword(chalkColors[color])(camarade));
});

const chalkColors = ['red','cyanBright','greenBright','magenta','yellow','cyan',];
