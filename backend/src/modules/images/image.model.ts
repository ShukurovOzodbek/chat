import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    url: { type: String, required: true },
    path: { type: String, required: true }
});

const Image = mongoose.model('Image', imageSchema);

export default Image;