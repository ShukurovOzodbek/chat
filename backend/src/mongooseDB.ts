import mongoose from 'mongoose';

export default () => {
    mongoose
        .connect(`${process.env.MONGO_URI}`)
        .then(() => console.log("[server]: database connection restored"))
        .catch((err) => console.log(`Error: ${err}`));
};