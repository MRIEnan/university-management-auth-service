import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import { AcademicDepartmentService } from './academicDepartment.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import pick from '../../../shared/pick';
import { academicDepartmentFilterableFields } from './academicDepartment.constants';
import { paginationFields } from '../../../constants/paginationFields';
import { IAcademicDepartment } from './academicDepartment.interface';

const createAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { ...academicDepartmentData } = req.body;

    const result = await AcademicDepartmentService.createDepartment(
      academicDepartmentData,
    );

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department created successfully',
      data: result,
    });
  },
);

const getAllAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const filters = pick(req.query, academicDepartmentFilterableFields);

    const paginationOptions = pick(req.query, paginationFields);

    const result = await AcademicDepartmentService.getAllDepartment(
      filters,
      paginationOptions,
    );

    sendResponse<IAcademicDepartment[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department retrieved successfully',
      meta: result.meta,
      data: result.data,
    });
  },
);

const getSingleAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await AcademicDepartmentService.getSingleDepartment(id);

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department fetched successfully',
      data: result,
    });
  },
);

const updateAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const { ...updatedData } = req.body;

    const result = await AcademicDepartmentService.updateDepartment(
      id,
      updatedData,
    );

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department fetched successfully',
      data: result,
    });
  },
);

const deleteAcademicDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await AcademicDepartmentService.deleteDepartment(id);

    sendResponse<IAcademicDepartment>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Department deleted successfully',
      data: result,
    });
  },
);

export const AcademicDepartmentController = {
  createAcademicDepartment,
  getAllAcademicDepartment,
  getSingleAcademicDepartment,
  updateAcademicDepartment,
  deleteAcademicDepartment,
};
