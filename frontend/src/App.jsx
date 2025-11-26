import { useQuery } from "@tanstack/react-query";
import api from './api/client';

function usePosts() {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const res = await api.get('/posts');
      return res.data;
    }
  })
}

function App() {
  const { data: posts, isLoading, isError } = usePosts();

  if (isLoading) return <p>Cargando posts...</p>
  if (isError) return <p>Error al cargar posts</p>

  return (
    <main style={{maxWidth: '800px', margin: '0 auto', padding: '1rem'}}>
      <h1>Fullstack Blog</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id} style={{marginBottom: '1rem'}}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>
              Autor: {post.author || 'Desconocido'} -{' '}
              {new Date(post.createdAt).toLocaleDateString()}
            </small>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default App
