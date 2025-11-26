export function validatePost(req, res, next) {
    const { title, content } = req.body;
    
    if (!title || title.trim().length < 3) {
        return res.status(400).json({ error: "Title is required (min 3 characters)"})
    }

    if (!content || content.trim().length < 10) {
        return res.status(400).json({ error: "Content is required (min 10 characters)"})
    }
    
    next()
}