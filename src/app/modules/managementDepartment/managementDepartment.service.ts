import { managementDepartmentSearchableFields } from './managementDepartment.constant';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import {
  IManagementDepartment,
  IManagementDepartmentFilters,
} from './managementDepartment.interface';
import { ManagementDepartment } from './managementDepartment.model';
import { IPaginationOption } from '../../../interfaces/pagination';
import { paginationHelper } from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { SortOrder } from 'mongoose';

const createManagementDepartment = async (
  payload: IManagementDepartment,
): Promise<IManagementDepartment> => {
  const isExist = await ManagementDepartment.findOne({ title: payload.title });

  if (isExist) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Management department is exits already!',
    );
  }

  const result = await ManagementDepartment.create(payload);
  return result;
};

const getAllManagementDepartment = async (
  filters: IManagementDepartmentFilters,
  paginationOptions: IPaginationOption,
): Promise<IGenericResponse<IManagementDepartment[] | null>> => {
  const { searchTerm, ...filtersData } = filters;

  const { page, limit, skip, sortOrder, sortBy } =
    paginationHelper.calculatePagination(paginationOptions);

  const andCondition = [];

  if (searchTerm) {
    andCondition.push({
      $or: managementDepartmentSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andCondition.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: [value],
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions = andCondition.length > 0 ? { $and: andCondition } : {};

  const result = await ManagementDepartment.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await ManagementDepartment.countDocuments(whereConditions);

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleManagementDepartment = async (
  id: string,
): Promise<IManagementDepartment | null> => {
  const result = await ManagementDepartment.findById(id);
  return result;
};

const updateManagementDepartment = async (
  id: string,
  payload: Partial<IManagementDepartment>,
): Promise<IManagementDepartment | null> => {
  const isExist = await ManagementDepartment.findOne({
    title: { $regex: payload.title, $options: 'i' },
  });
  if (isExist) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid title');
  }
  const result = await ManagementDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    { new: true },
  );
  return result;
};

const deleteManagementDepartment = async (
  id: string,
): Promise<IManagementDepartment | null> => {
  const isExist = await ManagementDepartment.findById(id);
  if (!isExist) {
    throw new ApiError(
      httpStatus.BAD_REQUEST,
      'Invalid Id of management department',
    );
  }

  const result = await ManagementDepartment.findByIdAndDelete(id);
  return result;
};

export const ManagementDepartmentService = {
  createManagementDepartment,
  getAllManagementDepartment,
  getSingleManagementDepartment,
  updateManagementDepartment,
  deleteManagementDepartment,
};
