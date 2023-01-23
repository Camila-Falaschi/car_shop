import { Schema, isValidObjectId } from 'mongoose';
import ICar from '../Interfaces/ICar';
import AbstractODM from './AbstractODM';

class CarODM extends AbstractODM<ICar> {
  constructor() {
    const schema = new Schema<ICar>({
      id: { type: String },
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: true },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    super(schema, 'Car');
  }

  public async find(): Promise<ICar[]> {
    return this.model.find();
  }

  public async findById(_id: string): Promise<ICar[]> {
    if (!isValidObjectId(_id)) throw Error('Invalid Mongo id');

    return this.model.find({ _id });
  }
}

export default CarODM;