import mongoose from 'mongoose';

export function connect() {
  mongoose.connect(process.env.MONGODB_URI as string, {
    dbName: 'cleanASF',
  });
  return mongoose.connection;
}
