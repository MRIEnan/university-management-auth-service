import { Request, Response } from 'express';
import { IUser } from './user.interface';
import { UserService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createStudent = catchAsync(
  async (req: Request, res: Response): Promise<IUser | void> => {
    const { student, ...user } = req.body;
    const result = await UserService.createStudent(student, user);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user of student created successfully',
      data: result,
    });
    // res.status(200).json({
    //   success  : true,
    //   message: 'user created successfully',
    //   data: result,
    // });
  },
);
const createFaculty = catchAsync(
  async (req: Request, res: Response): Promise<IUser | void> => {
    const { faculty, ...user } = req.body;
    const result = await UserService.createFaculty(faculty, user);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user of faculty created successfully',
      data: result,
    });
    // res.status(200).json({
    //   success  : true,
    //   message: 'user created successfully',
    //   data: result,
    // });
  },
);
const createAdmin = catchAsync(
  async (req: Request, res: Response): Promise<IUser | void> => {
    const { admin, ...user } = req.body;
    const result = await UserService.createAdmin(admin, user);
    sendResponse<IUser>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user of admin created successfully',
      data: result,
    });
    // res.status(200).json({
    //   success  : true,
    //   message: 'user created successfully',
    //   data: result,
    // });
  },
);

export const UserController = {
  createStudent,
  createFaculty,
  createAdmin,
};

// res.status(200).json({
//   success: true,
//   message: 'user created successfully',
//   data: result,
// });

/* const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
): Promise<IUser | void> => {
  try {
    const { user } = req.body;
    const result = await usersService.createUser(user);
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
  } catch (err) {
      next(err);
    // res.status(400).json({
      //   error: err,
      // });
    }
  }; */

/*   res.status(200).json({
    success: true,
    message: 'user created successfully',
    data: result,
  }); */
