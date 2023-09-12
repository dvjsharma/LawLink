import mongoose from "mongoose";

const schema = new mongoose.Schema({
    email: { 
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    name: { 
        type: String,
        required: true
    },
    usertype: { 
        type: String,
        required: true
    },
})

export const User = mongoose.model('User', schema);