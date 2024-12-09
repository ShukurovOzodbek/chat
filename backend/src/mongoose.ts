import mongoose from 'mongoose';

export const Mongoose = async () => {
    mongoose
        .connect(`${process.env.MONGO_URI}`)
        .then(() => console.log("[server]: database connection restored"))
        .catch((err) => console.log(`Error: ${err}`));
};