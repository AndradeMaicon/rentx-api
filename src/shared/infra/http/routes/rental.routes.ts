import { Router } from 'express';

import { CreateRentalController } from '@modules/rentals/useCases/createRental/CreateRentalController';
import { DevolutionRentalController } from '@modules/rentals/useCases/devolutionRental/DevolutionRentalController';
import { ListRentalsByUserController } from '@modules/rentals/useCases/listRentalsByUser/ListRentalsByUserController';

import { ensureAuthenticated } from '../middleware/ensureAuthenticated';

const rentalRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalConroller = new DevolutionRentalController();
const listRentalsByUserController = new ListRentalsByUserController();

rentalRoutes.post('/', ensureAuthenticated, createRentalController.handle);
rentalRoutes.post(
  '/devolution/:id',
  ensureAuthenticated,
  devolutionRentalConroller.handle
);
rentalRoutes.get(
  '/user',
  ensureAuthenticated,
  listRentalsByUserController.handle
);

export { rentalRoutes };
