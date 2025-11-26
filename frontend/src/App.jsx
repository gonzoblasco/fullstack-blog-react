// frontend/src/App.jsx
import { useQuery } from '@tanstack/react-query'
import api from './api/client'
import PostForm from './components/PostForm'
import { useDeletePost } from './hooks/useDeletePost'

function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await api.get('/posts')
      return res.data
    },
  })
}

function App() {
  const { data: posts, isLoading, isError } = usePosts()
  const {
    mutate: deletePost,
    isPending: isDeleting,
    variables: deletingId
  } = useDeletePost()

  function handleDeleteClick(postId) {
    const confirmed = window.confirm('¿Seguro que querés eliminar este post?')
    if (!confirmed) return
    
    deletePost(postId)
  }

  return (
    <main style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem' }}>
      <h1>Fullstack Blog</h1>

      <PostForm />

      <hr style={{ margin: '2rem 0' }} />

      <h2>Posts publicados</h2>

      {isLoading && <p>Cargando posts...</p>}
      {isError && <p>Error al cargar posts.</p>}

      {!isLoading && !isError && posts?.length === 0 && (
        <p>No hay posts todavía. Creá el primero.</p>
      )}

      <ul>
        {posts?.map((post) => {
          const deletingThis = isDeleting && deletingId === post._id

          return (
            <li
              key={post._id}
              style={{
                marginBottom: '1.5rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid #ddd',
              }}
            >
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <small>
                Autor: {post.author || 'Desconocido'} -{' '}
                {new Date(post.createdAt).toLocaleDateString()}
              </small>

              <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.5rem' }}>
                {/* Más adelante acá podemos agregar botón "Editar" */}
                <button
                  type="button"
                  onClick={() => handleDeleteClick(post._id)}
                  disabled={deletingThis}
                  style={{
                    padding: '0.25rem 0.75rem',
                    cursor: deletingThis ? 'not-allowed' : 'pointer',
                  }}
                >
                  {deletingThis ? 'Eliminando...' : 'Eliminar'}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}

export default App
