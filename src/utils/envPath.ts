import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

export const envPath = () => {
  const envPathResolve = path.resolve(__dirname, '../../.env');

  if (fs.existsSync(envPathResolve)) {
    dotenv.config({ path: envPathResolve });
  } else {
    console.warn('.env file not found, using environment variables');
  }
};
