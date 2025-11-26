// frontend/src/components/PostForm.jsx
import { useState, useEffect } from 'react'
import { useCreatePost } from '../hooks/useCreatePost'

function PostForm() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')

  const {
    mutate: createPost,
    isPending,
    isSuccess,
    isError,
    error,
  } = useCreatePost()

  // Cuando se crea con éxito, reseteamos el formulario
  useEffect(() => {
    if (isSuccess) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setTitle('')
      setContent('')
      setAuthor('')
    }
  }, [isSuccess])

  function handleSubmit(e) {
    e.preventDefault()

    // Validación mínima del lado del cliente
    if (!title.trim() || !content.trim()) {
      alert('Título y contenido son obligatorios.')
      return
    }

    createPost({
      title: title.trim(),
      content: content.trim(),
      author: author.trim() || 'Anonymous',
    })
  }

  return (
    <section style={{ marginBottom: '2rem' }}>
      <h2>Crear nuevo post</h2>
      <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
        <div>
          <label>
            Título<br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ej: Mi primer post full stack"
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </label>
        </div>

        <div>
          <label>
            Contenido<br />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              placeholder="Escribí acá el contenido del post..."
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </label>
        </div>

        <div>
          <label>
            Autor (opcional)<br />
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Gonzo"
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </label>
        </div>

        <button
          type="submit"
          disabled={isPending}
          style={{
            padding: '0.5rem 1rem',
            cursor: isPending ? 'not-allowed' : 'pointer',
          }}
        >
          {isPending ? 'Creando...' : 'Publicar post'}
        </button>

        {isError && (
          <p style={{ color: 'red' }}>
            Error al crear el post:{' '}
            {error?.response?.data?.error || error.message}
          </p>
        )}
        {isSuccess && <p style={{ color: 'green' }}>Post creado con éxito.</p>}
      </form>
    </section>
  )
}

export default PostForm
