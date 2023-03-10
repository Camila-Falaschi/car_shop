import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const car: ICar = this.req.body;
    try {
      const newCar = await this.service.create(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAllCars() {
    const cars = await this.service.getAllCars();
    return this.res.status(200).json(cars);
  }

  public async getCarById() {
    const { id } = this.req.params;
    try {
      const car = await this.service.getCarById(id);
      return this.res.status(200).json(car);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return this.res.status(404).json({ message: error.message });
      }
    }
  }

  public async update() {
    const car: Partial<ICar> = this.req.body;
    const { id } = this.req.params;
    try {
      const newCar = await this.service.updateCar(id, car);
      return this.res.status(200).json(newCar);
    } catch (error: unknown) {
      if (error instanceof Error) {
        return this.res.status(404).json({ message: error.message });
      }
    }
  }
}

export default CarController;