import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/dbhsxtqvj/image/upload/v1699962286/avatars/xwdus2fnwrva71ig1s4f.png"
    },

}, { timestamps: true });
const User = mongoose.model('User', userSchema);

export default User;
