import {
  listPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../services/postService.js'

export async function handleList(req, res) {
  const posts = await listPosts()
  res.json(posts)
}

export async function handleGet(req, res) {
  const post = await getPost(req.params.id)
  if (!post) return res.status(404).json({ error: 'Post not found' })
  res.json(post)
}

export async function handleCreate(req, res) {
  const post = await createPost(req.body)
  res.status(201).json(post)
}

export async function handleUpdate(req, res) {
  const post = await updatePost(req.params.id, req.body)
  if (!post) return res.status(404).json({ error: 'Post not found' })
  res.json(post)
}

export async function handleDelete(req, res) {
  const post = await deletePost(req.params.id)
  if (!post) return res.status(404).json({ error: 'Post not found' })
  res.json({ success: true })
}
