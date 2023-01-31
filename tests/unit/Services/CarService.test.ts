import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';
import {
  carArrayGetById,
  carGetByIdResult,
  carId,
  carsArrayGetAll, createCar, createdCar, updatedCar,
} from './Mocks/carsMock';

describe('Cars Service Layer', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('Should create a car succefully', async function () {
    const carResult = new Car(createdCar);
    
    Sinon.stub(Model, 'create').resolves(carResult);

    const service = new CarService();
    const result = await service.create(createCar);
    
    expect(result).to.be.deep.equal(carResult);
  });

  it('Should get all cars succefully', async function () {
    const carResult = carsArrayGetAll.map((item) => new Car(item));
    
    Sinon.stub(Model, 'find').resolves(carResult);

    const service = new CarService();
    const result = await service.getAllCars();
    
    expect(result).to.be.deep.equal(carResult);
  });

  it('Should get a car by its id succefully', async function () {
    const carResult = new Car(carGetByIdResult);

    Sinon.stub(Model, 'find').resolves(carArrayGetById);

    const service = new CarService();
    const result = await service.getCarById(carId);

    expect(result).to.be.deep.equal(carResult);
  });
  
  it('Should return an error if it try to find a car that does not exist', async function () {
    Sinon.stub(Model, 'find').resolves([]);
    
    try {
      const service = new CarService();
      await service.getCarById(carId);
    } catch (error) {
      expect((error as Error).message).to.be.equal('Car not found');
    }
  });

  it('Should update a car by its id succefully', async function () {
    const carResult = new Car(updatedCar);

    Sinon.stub(Model, 'findByIdAndUpdate').resolves(updatedCar);

    const service = new CarService();
    const result = await service.updateCar(carId, { color: 'red' });

    expect(result).to.be.deep.equal(carResult);
  });
  
  it(
    'Should return an error if it try to update a car that does not exist',
    async function () {
      Sinon.stub(Model, 'findByIdAndUpdate').resolves();

      try {
        const service = new CarService();
        await service.updateCar(carId, { color: 'red' });
      } catch (error) {
        expect((error as Error).message).to.be.equal('Car not found');
      }
    },
  );
});
