import mongoose from 'mongoose';

const postSchema = mongoose.Schema({

    title: String,
    nessage: String,
    creator: String,
    tags : [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
});