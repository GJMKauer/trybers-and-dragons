import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

// Objetos do tipo Character
const player1 = new Character('Kozuki Oden');

player1.levelUp();
player1.levelUp();
player1.levelUp();

const player2 = new Character('Kaio Fuguetão');
const player3 = new Character('Isaac Embaixa');

// Objetos do tipo Monster
const monster1 = new Monster(55, 50);
const monster2 = new Dragon();

// Objeto do tipo PVP
const pvp = new PVP(player2, player3);

// Objeto do tipo PVE
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = ([...battles]: Battle[]) => {
  battles.forEach((battle) => {
    battle.fight();
  });
};

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };