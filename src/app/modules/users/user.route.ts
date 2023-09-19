import express from 'express';
import { UserController } from './user.controller';
import { UserValidation } from './user.validation';
import validateRequest from '../../middlewares/validateRequest';
const usersRouter = express.Router();

// usersRouter.post(
//   '/create-user',
//   validateRequest(UserValidation.createUserZodSchema),
//   UserController.createUser,
// );

usersRouter.post(
  '/create-student',
  validateRequest(UserValidation.createStudentUserZodSchema),
  UserController.createStudent,
);

usersRouter.post(
  '/create-faculty',
  validateRequest(UserValidation.createFacultyUserZodSchema),
  UserController.createFaculty,
);

usersRouter.post(
  '/create-admin',
  validateRequest(UserValidation.createAdminUserZodSchema),
  UserController.createAdmin,
);

export const UserRoutes = usersRouter;
