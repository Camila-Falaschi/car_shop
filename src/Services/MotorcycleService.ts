import Motorcycle from '../Domains/Motorcycle';
import IMotorcyle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcyle | null): Motorcycle | null {
    if (motorcycle) {
      const { id, model, year, color, status, buyValue, category, engineCapacity } = motorcycle;
      return new Motorcycle({
        id,
        model,
        year,
        color,
        status,
        buyValue,
        category,
        engineCapacity,
      });
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
    const motorcycleArray = motorcycles
      .map((motorcycle) => this.createMotorcycleDomain(motorcycle));
    return motorcycleArray;
  }
}

export default MotorcycleService;