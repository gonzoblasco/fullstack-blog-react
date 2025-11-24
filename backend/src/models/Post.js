import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true
        },
        author: {
            type: String,
            default: 'Anonymous'
        },
        tags: {
            type: [String],
            default: []
        }
    },
    {
        timestamps: true // createdAt, updatedAt
    }
)

export const Post = mongoose.model('Post', postSchema)