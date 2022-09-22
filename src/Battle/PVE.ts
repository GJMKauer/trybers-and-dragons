import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _fighter: Fighter;
  private _monster: (SimpleFighter | Fighter)[];

  constructor(fighter: Fighter, monster: (SimpleFighter | Fighter)[]) {
    super(fighter);

    this._fighter = fighter;
    this._monster = monster;
  }

  public fight(): number {
    this._monster.forEach((monster) => {
      this._fighter.attack(monster);
      monster.attack(this._fighter);
    });

    return this._fighter.lifePoints === -1 ? -1 : 1;
  }
}