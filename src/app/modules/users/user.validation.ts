import { z } from 'zod';
import { StudentConstant } from '../student/student.constant';
import { FacultyConstant } from '../faculty/faculty.constant';

const createStudentUserZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    student: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'first name is required',
        }),
        middleName: z.string().optional(),
        lastName: z.string({
          required_error: 'last name is required',
        }),
      }),
      dateOfBirth: z.string({
        required_error: 'date of birth is required',
      }),
      gender: z.enum([...StudentConstant.gender] as [string, ...string[]], {
        required_error: 'Gender is required',
      }),
      email: z.string({ required_error: 'Email is required' }).email(),
      contactNo: z.string({ required_error: 'Contact No is required' }),
      emergencyContactNo: z.string({
        required_error: 'Emergency Contact No is required',
      }),
      bloodGroup: z
        .enum([...StudentConstant.bloodGroup] as [string, ...string[]])
        .optional(),
      presentAddress: z.string({
        required_error: 'present Address is required.',
      }),
      permanentAddress: z.string({
        required_error: 'permanent Address is required.',
      }),
      academicSemester: z.string({
        required_error: 'academic Semester is required',
      }),
      academicDepartment: z.string({
        required_error: 'academic Department is required',
      }),
      academicFaculty: z.string({
        required_error: 'academic Faculty is required',
      }),
      guardian: z
        .object(
          {
            fatherName: z.string({ required_error: 'fatherName is required' }),
            fatherOccupation: z.string({
              required_error: 'fatherOccupation is required',
            }),
            fatherContactNo: z.string({
              required_error: 'fatherContactNo is required',
            }),
            motherName: z.string({ required_error: 'motherName is required' }),
            motherOccupation: z.string({
              required_error: 'motherOccupation is required',
            }),
            motherContactNo: z.string({
              required_error: 'motherContactNo is required',
            }),
            address: z.string({ required_error: 'address is required' }),
          },
          {
            required_error: 'guardian is required',
          },
        )
        .optional(),
      localGuardian: z.object(
        {
          name: z.string({
            required_error: 'local guardians name is required',
          }),
          occupation: z.string({
            required_error: 'local guardians occupation is required',
          }),
          contactNo: z.string({
            required_error: 'local guardians contactNo is required',
          }),
          address: z.string({
            required_error: 'local guardians address is required',
          }),
        },
        {
          required_error: 'local guardian is required',
        },
      ),
      profileImage: z.string().optional(),
    }),
  }),
});

const createFacultyUserZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    faculty: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'first name is required',
        }),
        middleName: z.string().optional(),
        lastName: z.string({
          required_error: 'last name is required',
        }),
      }),
      gender: z.enum([...FacultyConstant.gender] as [string, ...string[]], {
        required_error: 'gender is required!',
      }),
      dateOfBirth: z.string({
        required_error: 'date of birth is required',
      }),
      email: z
        .string({
          required_error: 'email is required!',
        })
        .email(),
      contactNo: z.string({ required_error: 'contact no is required' }),
      emergencyContactNo: z.string({
        required_error: 'emergency Contact No is required',
      }),
      presentAddress: z.string({
        required_error: 'present Address is required',
      }),
      permanentAddress: z.string({
        required_error: 'permanent Address is required',
      }),
      bloodGroup: z
        .enum([...FacultyConstant.bloodGroup] as [string, ...string[]])
        .optional(),
      designation: z.string({ required_error: 'designation is required' }),
      academicDepartment: z.string({
        required_error: 'academic department is required',
      }),
      academicFaculty: z.string({
        required_error: 'academic faculty is required',
      }),
      profileImage: z.string().optional(),
    }),
  }),
});
const createAdminUserZodSchema = z.object({
  body: z.object({
    password: z.string().optional(),
    admin: z.object({
      name: z.object({
        firstName: z.string({
          required_error: 'first name is required',
        }),
        middleName: z.string().optional(),
        lastName: z.string({
          required_error: 'last name is required',
        }),
      }),
      gender: z.enum([...FacultyConstant.gender] as [string, ...string[]], {
        required_error: 'gender is required!',
      }),
      dateOfBirth: z.string({
        required_error: 'date of birth is required',
      }),
      email: z
        .string({
          required_error: 'email is required!',
        })
        .email(),
      contactNo: z.string({ required_error: 'contact no is required' }),
      emergencyContactNo: z.string({
        required_error: 'emergency Contact No is required',
      }),
      bloodGroup: z
        .enum([...FacultyConstant.bloodGroup] as [string, ...string[]])
        .optional(),
      designation: z.string({ required_error: 'designation is required' }),
      academicDepartment: z.string({
        required_error: 'academic department is required',
      }),
      profileImage: z.string().optional(),
    }),
  }),
});
/* const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'role is required',
    }),
    password: z.string().optional(),
  }),
}); */

export const UserValidation = {
  createStudentUserZodSchema,
  createFacultyUserZodSchema,
  createAdminUserZodSchema,
};
