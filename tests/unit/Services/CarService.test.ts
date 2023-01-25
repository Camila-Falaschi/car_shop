import { expect } from 'chai';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import { carArrayGetById, carId, carsArrayGetAll } from './Mocks/carsMock';

describe('Cars Service Layer', function () {
  // afterEach(() => {
  //   sinon.restore();
  // });

  it('Should get all cars succefully', async function () {
    const carResult = carsArrayGetAll.map((item) => new Car(item));
    
    sinon.stub(Model, 'find').resolves(carResult);

    const service = new CarService();
    const result = await service.getAllCars();

    expect(result).to.be.deep.equal(carResult);

    sinon.restore();
  });

  it('Should get a car by its id succefully', async function () {
    const carResult = carArrayGetById.map((item) => new Car(item));
    
    sinon.stub(Model, 'findById').resolves(carResult);

    const service = new CarService();
    const result = await service.getCarById(carId);

    expect(result).to.be.deep.equal(carResult);
  });
});
