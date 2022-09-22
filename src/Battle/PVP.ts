import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _fighterOne: Fighter;
  private _fighterTwo: Fighter;

  constructor(fighterOne: Fighter, fighterTwo: Fighter) {
    super(fighterOne);

    this._fighterOne = fighterOne;
    this._fighterTwo = fighterTwo;
  }

  public fight(): number {
    let result = 0;

    while (this._fighterOne.lifePoints > 0 && this._fighterTwo.lifePoints > 0) {
      this._fighterOne.attack(this._fighterTwo);
      this._fighterTwo.attack(this._fighterOne);

      if (this._fighterOne.lifePoints === -1) {
        result = -1;
      } else {
        result = 1;
      }
    }

    return result;
  }
}