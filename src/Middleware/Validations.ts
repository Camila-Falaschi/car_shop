import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';

class Validations {
  private req: Request;
  private res: Response;
  private next: NextFunction;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
  }
  
  public validateId() {
    const { id } = this.req.params;

    if (!isValidObjectId(id)) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }

    this.next();
  }
}

export default Validations;