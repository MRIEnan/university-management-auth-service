import express from 'express';
import { AcademicFacultyController } from './academicFaculty.controller';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicFacultyValidations } from './academicFaculty.validations';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(AcademicFacultyValidations.createFacultyZodSchema),
  AcademicFacultyController.createAcademicFaculty,
);

router.get('/:id', AcademicFacultyController.getSingleAcademicFaculty);

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidations.updateFacultyZodSchema),
  AcademicFacultyController.updateAcademicFaculty,
);

router.delete('/:id', AcademicFacultyController.deleteAcademicFaculty);

router.get('/', AcademicFacultyController.getAllAcademicFaulty);

export const AcademicFacultyRoute = router;
