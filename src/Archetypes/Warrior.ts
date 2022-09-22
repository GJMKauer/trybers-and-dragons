import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private static _archetypeInstances = 0;
  private _energyType: EnergyType = 'stamina';

  public static createdArchetypeInstances(): number {
    this._archetypeInstances += 1;
    return this._archetypeInstances;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}