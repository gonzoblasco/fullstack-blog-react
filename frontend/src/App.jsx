// frontend/src/App.jsx
import { useQuery } from '@tanstack/react-query'
import api from './api/client'
import PostForm from './components/PostForm'

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
        {posts?.map((post) => (
          <li key={post._id} style={{ marginBottom: '1.5rem' }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <small>
              Autor: {post.author || 'Desconocido'} —{' '}
              {new Date(post.createdAt).toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
