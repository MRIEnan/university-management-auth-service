import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import usersRouter from './app/mdoules/users/users.route';

const app: Application = express();

app.use(cors());

// parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Application routes
app.use('/mainur/api/v1/users', usersRouter);

// // test
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
