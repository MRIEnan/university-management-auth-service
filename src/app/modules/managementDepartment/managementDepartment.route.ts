import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ManagementDepartmentValidation } from './managementDepartment.validation';
import { ManagementDepartmentController } from './managementDepartment.controller';

const router = express.Router();

router.post(
  '/create-management',
  validateRequest(ManagementDepartmentValidation.createManagementDepartment),
  ManagementDepartmentController.createManagementDepartment,
);

router.get(
  '/:id',
  ManagementDepartmentController.getSingleManagementDepartment,
);

router.patch(
  '/:id',
  validateRequest(ManagementDepartmentValidation.updateManagementDepartment),
  ManagementDepartmentController.updateManagementDepartment,
);

router.delete(
  '/:id',
  ManagementDepartmentController.deleteManagementDepartment,
);
router.get('/', ManagementDepartmentController.getAllManagementDepartment);

export const ManagementDepartmentRoute = router;
