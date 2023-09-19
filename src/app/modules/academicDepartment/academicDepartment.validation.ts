import { z } from 'zod';

const createAcademicDepartmentZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: 'Title is required',
    }),
    academicFaculty: z.string({
      required_error: 'Academic Faculty is required',
    }),
  }),
});

const updateAcademicDepartmentZodSchema = z
  .object({
    body: z.object({
      title: z
        .string({
          required_error: 'Title is required',
        })
        .optional(),
      academicFaculty: z
        .string({
          required_error: 'Academic Faculty is required',
        })
        .optional(),
    }),
  })
  .refine(
    data =>
      (data.body.academicFaculty && data.body.title) ||
      data.body.academicFaculty ||
      data.body.title,
    {
      message: 'Invalid data.',
    },
  );

export const AcademicDepartmentValidation = {
  createAcademicDepartmentZodSchema,
  updateAcademicDepartmentZodSchema,
};
