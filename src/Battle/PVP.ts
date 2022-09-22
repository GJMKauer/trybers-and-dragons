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
    this._fighterOne.attack(this._fighterTwo);
    this._fighterTwo.attack(this._fighterOne);
    return this._fighterOne.lifePoints === -1 ? -1 : 1;
  }
}