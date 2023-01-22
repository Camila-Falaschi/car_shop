import IVehicle from './IVehicle';

interface IMotorcyle extends IVehicle {
  category: string;
  engineCapacity: number;
}

export default IMotorcyle;