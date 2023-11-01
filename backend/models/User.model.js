import mongoose from "mongoose";

export const UserSchema  = new mongoose.Schema({
    username : {
        type: String,
        required : [true, "Please provide unique Username"],
        unique: [true, "Username Exist"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"],
        unique : false,
    },
    email: {
        type: String,
        required : [true, "Please provide a unique email"],
        unique: true,
    },
    firstName: { type: String},
    lastName: { type: String},
    mobile : { type : Number},
    address: { type: String},
    profile: { type: String},
    recommendation: { type: String},

    // emotions: {
    //     Monday: { Joy: Number, Surprise: Number, Anger: Number, Sad: Number, Happy: Number },
    //     Tuesday: { Joy: Number, Surprise: Number, Anger: Number, Sad: Number, Happy: Number },
    //     Wednesday: { Joy: Number, Surprise: Number, Anger: Number, Sad: Number, Happy: Number },
    //     Thursday: { Joy: Number, Surprise: Number, Anger: Number, Sad: Number, Happy: Number },
    //     Friday: { Joy: Number, Surprise: Number, Anger: Number, Sad: Number, Happy: Number },
    //     Saturday: { Joy: Number, Surprise: Number, Anger: Number, Sad: Number, Happy: Number },
    //     Sunday: { Joy: Number, Surprise: Number, Anger: Number, Sad: Number, Happy: Number },
    // },
});

export default mongoose.model.Users || mongoose.model('User', UserSchema );