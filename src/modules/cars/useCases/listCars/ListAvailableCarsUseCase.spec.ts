import { CarsRepositoryInMemory } from '@modules/cars/repositories/in-memory/CarsRopositoryInMemory';

import { ListAvailableCarsUseCase } from './ListAvailableCarsUseCase';

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepository: CarsRepositoryInMemory;

describe('List Cars', () => {
  beforeEach(() => {
    carsRepository = new CarsRepositoryInMemory();
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepository);
  });

  it('should be able to list all available cars', async () => {
    const car = await carsRepository.create({
      name: 'Car 1',
      description: 'car description',
      daily_rate: 130.0,
      license_plate: 'def-1234',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({});

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by name', async () => {
    const car = await carsRepository.create({
      name: 'Car_test',
      description: 'car description',
      daily_rate: 130.0,
      license_plate: 'def-1234',
      fine_amount: 40,
      brand: 'Car_brand',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      name: 'Car_test',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by brand', async () => {
    const car = await carsRepository.create({
      name: 'Car',
      description: 'car description',
      daily_rate: 130.0,
      license_plate: 'def-1234',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: 'category_id',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: 'Car_brand_test',
    });

    expect(cars).toEqual([car]);
  });

  it('should be able to list all available cars by category_id', async () => {
    const car = await carsRepository.create({
      name: 'Car',
      description: 'car description',
      daily_rate: 130.0,
      license_plate: 'def-1234',
      fine_amount: 40,
      brand: 'Car_brand_test',
      category_id: '12345',
    });

    const cars = await listAvailableCarsUseCase.execute({
      brand: '12345',
    });

    expect(cars).toEqual([car]);
  });
});
