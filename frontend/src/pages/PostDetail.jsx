import { useParams, Link } from "react-router-dom";
import { usePost } from "../hooks/usePost";

function PostDetail() {
    const { id } = useParams();
    const { data: post, isLoading, isError } = usePost(id);

    if (isLoading) return <p>Cargando...</p>
    if (isError) return <p>Error al cargar el post</p>

    return (
        <article style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem'}}>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p><strong>Autor:</strong> {post.author}</p>
            <p><strong>Creado:</strong> {new Date(post.createdAt).toLocaleDateString()}</p>

            <Link to="/">← Volver</Link>
        </article>
    )
}

export default PostDetail