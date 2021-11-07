import { Router } from 'express';

import { CreateSpecificationController } from '@modules/cars/useCases/createSpecification/CreateSepecificationController';
import { ensureAuthenticated } from '@shared/infra/http/middleware/ensureAuthenticated';

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.post(
  '/',
  ensureAuthenticated,
  createSpecificationController.handle
);

export { specificationsRoutes };
