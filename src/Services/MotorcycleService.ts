import Motorcycle from '../Domains/Motorcycle';
import IMotorcyle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcyle | null): Motorcycle | null {
    if (motorcycle) {
      // const { id, model, year, color, status, buyValue, category, engineCapacity } = motorcycle;
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcyle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAllMotorcycles() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.find();
    const motorcycleArray = motorcycles
      .map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return motorcycleArray;
  }

  public async getMotorcycleById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.findById(id);
    if (motorcycles.length > 0) {
      const motorcycleArray = motorcycles
        .map((motorcycle) => this.createMotorcycleDomain(motorcycle));
      return motorcycleArray[0];
    }
    throw Error('Motorcycle not found');
  }

  public async updateMotorcycle(id: string, motorcycle: Partial<IMotorcyle>) {
    const motorcycleODM = new MotorcycleODM();
    const data = await motorcycleODM.update(id, motorcycle);
    if (data) {
      return this.createMotorcycleDomain(data);
    } 
    throw Error('Motorcycle not found');
  }
}

export default MotorcycleService;