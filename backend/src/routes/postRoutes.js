import { Router } from 'express'
import {
  handleList,
  handleGet,
  handleCreate,
  handleUpdate,
  handleDelete,
} from '../controllers/postController.js'
import { validatePost } from '../middleware/validatePost.js'

const router = Router()

router.get('/', handleList)
router.get('/:id', handleGet)
router.post('/', validatePost, handleCreate)
router.put('/:id', validatePost, handleUpdate)
router.delete('/:id', handleDelete)

export default router
