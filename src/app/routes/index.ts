import express from 'express';
import { UserRoutes } from '../modules/users/user.route';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
// router.use('/users', UserRoutes);
// router.use('/academic-semesters', AcademicSemesterRoute);
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoute);
