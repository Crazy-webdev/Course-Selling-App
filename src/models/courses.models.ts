import { Document, model, Schema, Types } from 'mongoose';

interface ICourse extends Document {
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  creatorId: Types.ObjectId;
}

const courseSchema = new Schema<ICourse>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  creatorId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Admin',
  },
});

const CourseModel = model<ICourse>('course', courseSchema);

export default CourseModel;
