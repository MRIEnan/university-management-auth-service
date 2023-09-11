/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import ApiError from './errors/ApiError';
import routes from './app/routes';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/api/v1', routes);

// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoute);

// // testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Hello World!');
//   //   throw new ApiError(400, 'This is error intentional');
//   //   Promise.reject(new Error(`Unhandled promise rejection`));
//   // next('this is error is from next');
//   //   console.log(x);
//   throw new Error('Testing error logger');
// });

app.use(globalErrorHandler);

export default app;
