import IVehicle from './IVehicle';

interface IMotorcyle extends IVehicle {
  readonly category: string;
  readonly engineCapacity: number;
}

export default IMotorcyle;