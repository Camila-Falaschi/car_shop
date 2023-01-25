import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';
import AppErrors from '../Utils/AppErrors';
import { ErrorTypes } from '../Utils/ErrorTypes';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);    
    return this.createCarDomain(newCar);
  }

  public async getAllCars() {
    const carODM = new CarODM();
    const cars = await carODM.find();
    const carArray = cars.map((car) => this.createCarDomain(car));
    return carArray;
  }

  public async getCarById(id: string) {
    const carODM = new CarODM();
    const cars = await carODM.findById(id);
    if (cars.length > 0) {
      const carArray = cars.map((car) => this.createCarDomain(car));
      return carArray[0];
    }
    throw Error(ErrorTypes.CarNotFound);
  }

  public async updateCar(id: string, car: Partial<ICar>) {
    const carODM = new CarODM();
    const data = await carODM.update(id, car);
    if (data) {
      return this.createCarDomain(data);
    } 
    throw new AppErrors(404, 'Car not found');
  }
}

export default CarService;