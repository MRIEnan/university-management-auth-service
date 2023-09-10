import { RequestHandler } from 'express';
import { IUser } from './user.interface';
import { UserService } from './user.service';

const createUser: RequestHandler = async (
  req,
  res,
  next,
): Promise<IUser | void> => {
  try {
    const { user } = req.body;
    const result = await UserService.createUser(user);
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
};

export const UserController = {
  createUser,
};

// res.status(200).json({
//   success: true,
//   message: 'user created successfully',
//   data: result,
// });

/* // const createUser = async (
//   req: Request,
//   res: Response,
//   next: NextFunction,
// ): Promise<IUser | void> => {
//   try {
//     const { user } = req.body;
//     const result = await usersService.createUser(user);
//     res.status(200).json({
//       success: true,
//       message: 'user created successfully',
//       data: result,
//     });
//   } catch (err) {
//     next(err);
//     // res.status(400).json({
//     //   error: err,
//     // });
//   }
// }; */
