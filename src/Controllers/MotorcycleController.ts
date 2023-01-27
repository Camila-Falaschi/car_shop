import { NextFunction, Request, Response } from 'express';
import IMotorcyle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcyle = this.req.body;
    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllMotorcycles() {
    const motorcycles = await this.service.getAllMotorcycles();
    return this.res.status(200).json(motorcycles);
  }

  public async getMotorcycleById() {
    const { id } = this.req.params;
    try {
      const motorcycle = await this.service.getMotorcycleById(id);
      return this.res.status(200).json(motorcycle);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return this.res.status(404).json({ message: error.message });
      }
    }
  }

  public async update() {
    const motorcycle: Partial<IMotorcyle> = this.req.body;
    const { id } = this.req.params;
    try {
      const newMotorcycle = await this.service.updateMotorcycle(id, motorcycle);
      return this.res.status(200).json(newMotorcycle);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return this.res.status(404).json({ message: error.message });
      }
    }
  }
}

export default MotorcycleController;