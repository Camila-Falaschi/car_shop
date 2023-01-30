const model = 'Honda Cb 600f Hornet';

export const createMotorcycle = {
  model,
  year: 2014,
  color: 'Black',
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

export const createdMotorcycle = {
  id: '63d0901c65b9906b2eb8a97b',
  model,
  year: 2014,
  color: 'Black',
  status: false,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

export const motorcyclesArrayGetAll = [
  {
    id: '63d0901c65b9906b2eb8a97b',
    model,
    year: 2014,
    color: 'Red',
    status: true,
    buyValue: 45.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '63d0901f65b9906b2eb8a97d',
    model: 'Honda Biz 110i',
    year: 2014,
    color: 'Black',
    status: true,
    buyValue: 60.000,
    category: 'Street',
    engineCapacity: 600,
  },
];

export const motorcycleId = '63d0901c65b9906b2eb8a97b';

const model2 = 'Honda CG 160 Cargo';

export const motorcycleArrayGetById = [
  {
    id: '63d0901c65b9906b2eb8a97b',
    model: model2,
    year: 2014,
    color: 'Black',
    status: true,
    buyValue: 45.000,
    category: 'Street',
    engineCapacity: 600,
  },
];

export const motorcycleGetByIdResult = {
  id: '63d0901c65b9906b2eb8a97b',
  model: model2,
  year: 2014,
  color: 'Black',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};

export const updatedMotorcycle = {
  id: '63d0901c65b9906b2eb8a97b',
  model: model2,
  year: 2014,
  color: 'Red',
  status: true,
  buyValue: 45.000,
  category: 'Street',
  engineCapacity: 600,
};