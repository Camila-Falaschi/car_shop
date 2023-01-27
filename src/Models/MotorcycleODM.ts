import { Schema } from 'mongoose';
import IMotorcyle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

class MotorcycleODM extends AbstractODM<IMotorcyle> {
  constructor() {
    const schema = new Schema<IMotorcyle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    super(schema, 'Motorcycle');
  }

  public async find(): Promise<IMotorcyle[]> {
    return this.model.find();
  }

  public async findById(_id: string): Promise<IMotorcyle[]> {
    return this.model.find({ _id });
  }
}

export default MotorcycleODM;