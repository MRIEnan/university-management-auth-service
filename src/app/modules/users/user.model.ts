import { Schema, model } from 'mongoose';
import { IUser, UserModel } from './user.interface';
import { ENUM_USER_ROLE } from '../../../enums/users';

const userSchema = new Schema<IUser>(
  {
    id: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ENUM_USER_ROLE,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
    faculty: {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
    },
    admin: {
      type: Schema.Types.ObjectId,
      ref: 'Admin',
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  },
);

export const User = model<IUser, UserModel>('User', userSchema);
