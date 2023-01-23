import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      // const { id, model, year, color, status, buyValue, doorsQty, seatsQty } = car;
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
      return carArray;
    }
    throw Error('Car not found');
  }
}

export default CarService;