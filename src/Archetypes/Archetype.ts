import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _name: string;
  private _special: number;
  private _cost: number;
  
  constructor(name: string, special = 0, cost = 0) {
    this._name = name;
    this._special = special;
    this._cost = cost;
  }

  public get name(): string {
    return this._name;
  }

  public get special(): number {
    return this._special;
  }

  public get cost(): number {
    return this._cost;
  }

  public static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  public abstract get energyType(): EnergyType;
}