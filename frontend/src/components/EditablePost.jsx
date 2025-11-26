import { useState } from "react";
import { useUpdatePost } from "../hooks/useUpdatePost";
import { useDeletePost } from "../hooks/useDeletePost";

function EditablePost({ post }) {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(post.title)
    const [content, setContent] = useState(post.content)
    const [author, setAuthor] = useState(post.author)
    
    const { mutate: updatePost, isPending: isUpdating } = useUpdatePost()
    const { mutate: deletePost, isPending: isDeleting, variables: deletingId } = useDeletePost()

    function handleSave() {
        updatePost({
            id: post._id,
            data: {
                title: title.trim(),
                content: content.trim(),
                author: author.trim()
            }
        })
        setIsEditing(false)
    }

    function handleDelete() {
        const confirmed = window.confirm('¿Seguro que querés eliminar este post?')
        if (!confirmed) return
        deletePost(post._id)
    }

    const deletingThis = isDeleting && deletingId === post._id

    return (
        <div
            style={{
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid #ddd',
            }}
        >
            {isEditing ? (
                <>
                    <input
                        style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem'}}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />

                    <textarea
                        rows={4}
                        style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem'}}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />

                    <input 
                        style={{ width: '100%', marginBottom: '0.5rem', padding: '0.5rem'}}
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    />

                    <button
                        onClick={handleSave}
                        disabled={isUpdating}
                        style={{ marginRight: '0.5rem' }}
                    >
                        {isUpdating ? 'Guardando...' : 'Guardar'}
                    </button>
                    
                    <button onClick={() => setIsEditing(false)}>Cancelar</button>
                </>
            ) : (
                <>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <small>
                        Autor: {post.author || 'Desconocido'} -{' '}
                        {new Date(post.createdAt).toLocaleDateString()}
                    </small>

                    <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                        <button onClick={() => setIsEditing(true)}>Editar</button>
                        
                        <button
                            onClick={handleDelete}
                            disabled={deletingThis}
                            style={{ padding: '0.25rem 0.75rem' }}
                        >
                            {deletingThis ? 'Eliminando...' : 'Eliminar'}
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}

export default EditablePost