import { Schema, model, Document } from "mongoose";

interface IUser extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const userSchema = new Schema<IUser>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const UserModel = model<IUser>("User", userSchema);

export default UserModel;
