import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  private static _raceInstance = 0;

  constructor(
    name: string,
    dexterity: number,
    maxLifePoints = 60,
  ) {
    super(name, dexterity);

    this._maxLifePoints = maxLifePoints;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    this._raceInstance += 1;
    return this._raceInstance;
  }
}