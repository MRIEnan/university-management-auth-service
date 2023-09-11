/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import { IAcademicSemester } from './academicSemester.interface';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { academicSemester } = req.body;
    const result =
      await AcademicSemesterService.createSemester(academicSemester);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester is created successfully',
      data: result,
    });
    next();
  },
);

export const AcademicSemesterController = {
  createAcademicSemester,
};

/* try {
  const { academicSemester } = req.body;
  const result =
  await AcademicSemesterService.createSemester(academicSemester);
  
  res.status(200).json({
    success: true,
    message: 'Academic semester is created successfully',
    data: result,
  });
} catch (error) {
  next(error);
} */

/* res.status(200).json({
  success: true,
  message: 'Academic semester is created successfully',
  data: result,
}); */
