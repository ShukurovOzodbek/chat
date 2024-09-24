import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: { type: mongoose.Schema.Types.String, required: true, unique: true },
    displayName: { type: mongoose.Schema.Types.String, required: true },
    username: { type: mongoose.Schema.Types.String, unique: true },
    password: { type: mongoose.Schema.Types.String }
});


export const User = mongoose.model('users', userSchema);
