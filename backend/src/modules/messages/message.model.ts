import mongoose from "mongoose";

export const messageSchema = new mongoose.Schema({
    message: { type: mongoose.Schema.Types.String },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }],
    reply: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' }
}, { _id: true });

const Message = mongoose.model('Message', messageSchema);

export default Message;