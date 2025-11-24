import { Post } from "../models/Post.js";

export async function listPosts() {
    return await Post.find().sort({ createdAt: -1 })
}

export async function getPost(id) {
    return await Post.findById(id)
}

export async function createPost(data) {
    const post = new Post(data)
    return await post.save()
}

export async function updatePost(id, data) {
    return await Post.findByIdAndUpdate(id, data, { new: true })
}

export async function deletePost(id) {
    return await Post.findByIdAndDelete(id)
}
