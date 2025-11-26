import {
  listPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../services/postService.js'

export async function handleList(req, res, next) {
  try {
    const posts = await listPosts()
    res.json(posts)
  } catch (error) {
    next(error)
  }
}

export async function handleGet(req, res, next) {
  try {
    const post = await getPost(req.params.id)
    if (!post) return res.status(404).json({ error: 'Post not found' })
    res.json(post)
  } catch (error) {
    next(error)
  }
}

export async function handleCreate(req, res, next) {
  try {
    const post = await createPost(req.body)
    res.status(201).json(post)
  } catch (error) {
    next(error)
  }
}

export async function handleUpdate(req, res, next) {
  try {
    const post = await updatePost(req.params.id, req.body)
    if (!post) return res.status(404).json({ error: 'Post not found' })
    res.json(post)
  } catch (error) {
    next(error)
  }
}

export async function handleDelete(req, res, next) {
  try {
    const post = await deletePost(req.params.id)
    if (!post) return res.status(404).json({ error: 'Post not found' })
    res.json({ success: true })
  } catch (error) {
    next(error)
  }
}
