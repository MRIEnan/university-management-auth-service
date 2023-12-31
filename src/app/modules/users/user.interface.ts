import { Model, Types } from 'mongoose';
import { IStudent } from '../student/student.interface';
import { IFaculty } from '../faculty/faculty.interface';
import { IAdmin } from '../admin/admin.interface';

export type IUser = {
  id: string;
  role: 'student' | 'faculty' | 'admin' | 'super_admin';
  password: string;
  createdAt: string;
  updatedAt: string;
  student?: Types.ObjectId | IStudent;
  faculty?: Types.ObjectId | IFaculty;
  admin?: Types.ObjectId | IAdmin;
};

// type UserModel = Model<IUser, object>;
export type UserModel = Model<IUser, Record<string, unknown>>;
