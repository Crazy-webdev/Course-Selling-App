import { Document, model, Schema } from 'mongoose';

interface IAdmin extends Document {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const adminSchema = new Schema<IAdmin>(
  {
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
  },
  {
    versionKey: false,
  }
);
const AdminModel = model<IAdmin>('admin', adminSchema);

export default AdminModel;
