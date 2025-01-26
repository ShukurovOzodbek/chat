import mongoose from "mongoose";
import { messageSchema } from "../messages/message.model";

const chatSchema = new mongoose.Schema({
    messages: [messageSchema],
    chatType: {
        type: mongoose.Schema.Types.String,
        enum: ['group', 'chat'],
        required: true
    },
    users: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    ]
});

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;