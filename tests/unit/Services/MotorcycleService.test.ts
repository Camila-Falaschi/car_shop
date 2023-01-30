import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import {
  createMotorcycle,
  createdMotorcycle,
  motorcycleArrayGetById,
  motorcycleId, motorcyclesArrayGetAll, updatedMotorcycle,
} from './Mocks/motorcyclesMock';

describe('Motorcycles Service Layer', function () {
  afterEach(function () {
    Sinon.restore();
  });

  it('Should create all cars succefully', async function () {
    const motorcycleResult = new Motorcycle(createMotorcycle);
    
    Sinon.stub(Model, 'create').resolves(motorcycleResult);

    const service = new MotorcycleService();
    const result = await service.create(createdMotorcycle);
    
    expect(result).to.be.deep.equal(motorcycleResult);
  });

  it('Should get all motorcycles succefully', async function () {
    const motorcycleResult = motorcyclesArrayGetAll.map((item) => new Motorcycle(item));
    
    Sinon.stub(Model, 'find').resolves(motorcycleResult);

    const service = new MotorcycleService();
    const result = await service.getAllMotorcycles();
    
    expect(result).to.be.deep.equal(motorcycleResult);
  });

  it('Should get a motorcycle by its id succefully', async function () {
    const motorcycleResult = motorcycleArrayGetById.map((item) => new Motorcycle(item));

    Sinon.stub(Model, 'findById').resolves(motorcycleResult);

    const service = new MotorcycleService();
    const result = await service.getMotorcycleById(motorcycleId);

    expect(result).to.be.deep.equal(motorcycleResult);
  });

  it(
    'Should return an error if it try to find a motorcycle that does not exist', 
    async function () {
      Sinon.stub(Model, 'findById').resolves([]);

      try {
        const service = new MotorcycleService();
        await service.getMotorcycleById(motorcycleId);
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    },
  );

  it('Should update a motorcycle by its id succefully', async function () {
    const motorcycleResult = new Motorcycle(updatedMotorcycle);

    Sinon.stub(Model, 'update').resolves();

    const service = new MotorcycleService();
    const result = await service.getMotorcycleById(motorcycleId);

    expect(result).to.be.deep.equal(motorcycleResult);
  });

  it('Should update a car by its id succefully', async function () {
    const motorcycleResult = new Motorcycle(updatedMotorcycle);

    Sinon.stub(Model, 'update').resolves();

    const service = new MotorcycleService();
    const result = await service.updateMotorcycle(motorcycleId, { color: 'red' });

    expect(result).to.be.deep.equal(motorcycleResult);
  });

  it(
    'Should return an error if it try to update a motorcycle that does not exist', 
    async function () {
      Sinon.stub(Model, 'update').resolves();

      try {
        const service = new MotorcycleService();
        await service.updateMotorcycle(motorcycleId, { color: 'red' });
      } catch (error) {
        expect((error as Error).message).to.be.equal('Motorcycle not found');
      }
    },
  );
});
