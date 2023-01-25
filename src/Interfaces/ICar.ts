import IVehicle from './IVehicle';

interface ICar extends IVehicle {
  readonly doorsQty: number;
  readonly seatsQty: number;
}

export default ICar;