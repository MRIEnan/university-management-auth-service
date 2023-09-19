import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicDepartmentValidation } from './academicDepartment.validation';
import { AcademicDepartmentController } from './academicDepartment.controller';

const router = express.Router();

router.post(
  '/create-department',
  validateRequest(
    AcademicDepartmentValidation.createAcademicDepartmentZodSchema,
  ),
  AcademicDepartmentController.createAcademicDepartment,
);

router.patch(
  '/:id',
  validateRequest(
    AcademicDepartmentValidation.updateAcademicDepartmentZodSchema,
  ),
  AcademicDepartmentController.updateAcademicDepartment,
);

router.delete('/:id', AcademicDepartmentController.deleteAcademicDepartment);

router.get('/:id', AcademicDepartmentController.getSingleAcademicDepartment);

router.get('/', AcademicDepartmentController.getAllAcademicDepartment);

export const AcademicDepartmentRoute = router;
