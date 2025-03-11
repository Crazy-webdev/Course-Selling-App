import mongoose from 'mongoose';
import { envPath } from '../utils/envPath';

envPath();

const connectDb = async (): Promise<void> => {
  const connectionString = process.env.DB_URL;

  if (!connectionString) {
    throw new Error('Database URL not found in environment variables');
  }
  try {
    await mongoose.connect(connectionString);

    console.log('Database connected successfully');
  } catch (error) {
    console.error('Failed to connect to database:', error);
    throw error;
  }
};

export default connectDb;
