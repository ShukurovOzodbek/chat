import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    email: { type: mongoose.Schema.Types.String, required: true, unique: true },
    displayName: { type: mongoose.Schema.Types.String, required: true },
    username: { type: mongoose.Schema.Types.String, unique: true },
    password: { type: mongoose.Schema.Types.String },
    pincode: { type: mongoose.Schema.Types.Number },
    bio: { type: mongoose.Schema.Types.String, maxLength: 200 },
    birth: { type: mongoose.Schema.Types.String },
    refreshToken: { type: mongoose.Schema.Types.String },
    country: { type: mongoose.Schema.Types.String, required: true },
    helpPhrase: { type: mongoose.Schema.Types.String }
});

export const User = mongoose.model('users', userSchema);
