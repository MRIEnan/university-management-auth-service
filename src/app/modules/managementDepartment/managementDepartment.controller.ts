import { IManagementDepartment } from './managementDepartment.interface';
import { Request, Response } from 'express';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import { paginationFields } from '../../../constants/paginationFields';
import { ManagementDepartmentService } from './managementDepartment.service';
import { managementDepartmentFilterableFields } from './managementDepartment.constant';

const createManagementDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { ...managementDepartmentData } = req.body;
    const result = await ManagementDepartmentService.createManagementDepartment(
      managementDepartmentData,
    );

    sendResponse<IManagementDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Management department is created successfully',
      data: result,
    });
  },
);

const getAllManagementDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, managementDepartmentFilterableFields);
    const paginationOptions = pick(req.query, paginationFields);

    const result = await ManagementDepartmentService.getAllManagementDepartment(
      filters,
      paginationOptions,
    );

    sendResponse<IManagementDepartment[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Management Department retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
  },
);

const getSingleManagementDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result =
      await ManagementDepartmentService.getSingleManagementDepartment(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Management Department retrieved successfully',
      data: result,
    });
  },
);

const updateManagementDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const { ...updatedData } = req.body;

    const result = await ManagementDepartmentService.updateManagementDepartment(
      id,
      updatedData,
    );

    sendResponse<IManagementDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic semester is updated successfully',
      data: result,
    });
  },
);

const deleteManagementDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;

    const result =
      await ManagementDepartmentService.deleteManagementDepartment(id);

    sendResponse<IManagementDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Management Department deleted successfully',
      data: result,
    });
  },
);

export const ManagementDepartmentController = {
  createManagementDepartment,
  getAllManagementDepartment,
  getSingleManagementDepartment,
  updateManagementDepartment,
  deleteManagementDepartment,
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

/*  const paginationOptions = {
      page: Number(req.query.page),
      limit: Number(req.query.limit),
      sortBy: req.query.sortBy,
      sortOrder: req.query.sortOrder,
    }; */
