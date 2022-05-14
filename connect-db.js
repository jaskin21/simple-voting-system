import mongoose from 'mongoose';

export default async (connection, dbName) => {
  try {
    console.log('connection Complete');
    await mongoose.connect(connection, { dbName });
  } catch (error) {
    console.log(error);
  }
};
