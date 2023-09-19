import z from 'zod';

const createManagementDepartment = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
  }),
});

const updateManagementDepartment = z.object({
  body: z.object({
    title: z.string({
      required_error: 'title is required',
    }),
  }),
});

export const ManagementDepartmentValidation = {
  createManagementDepartment,
  updateManagementDepartment,
};
