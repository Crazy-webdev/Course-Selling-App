import { Schema, model, Document, Types } from 'mongoose';

interface IPurchase extends Document {
  userId: Types.ObjectId;
  courseId: Types.ObjectId;
}

const purchaseSchema = new Schema<IPurchase>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    courseId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Course',
    },
  },
  {
    versionKey: false,
  }
);
const PurchaseModel = model<IPurchase>('purchase', purchaseSchema);

export default PurchaseModel;
