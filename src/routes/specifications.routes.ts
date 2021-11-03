import { Router } from 'express';

import { ensureAuthenticated } from '../middleware/ensureAuthenticated';
import { CreateSpecificationController } from '../modules/cars/useCases/createSpecification/CreateSepecificationController';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post(
  '/',
  ensureAuthenticated,
  createSpecificationController.handle
);

export { specificationsRoutes };
