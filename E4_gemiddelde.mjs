import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });


const scores = [10, 20, 15, 30, 25];


function berekenGemiddelde(punten) {
  if (punten.length === 0) return 0; 

  const som = punten.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const gemiddelde = som / punten.length;

  return gemiddelde;
}


const gemiddeldeScore = berekenGemiddelde(scores);

console.log(`De gemiddelde score is: ${gemiddeldeScore}`);

process.exit()