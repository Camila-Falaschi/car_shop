import { Model, Schema, model, models } from 'mongoose';
import IMotorcyle from '../Interfaces/IMotorcycle';

class MotorcycleODM {
  protected model: Model<IMotorcyle>;
  protected schema: Schema;

  constructor() {
    this.schema = new Schema<IMotorcyle>({
      id: { type: String, required: true },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycle || model('Motorcycle', this.schema);
  }

  public async create(motorcycle: IMotorcyle): Promise<IMotorcyle> {
    return this.model.create({ ...motorcycle });
  }
}

export default MotorcycleODM;