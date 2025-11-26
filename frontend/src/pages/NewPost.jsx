import PostForm from "../components/PostForm";
import { Link } from "react-router-dom";

function NewPost() {
  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h1>Crear nuevo post</h1>

      <PostForm />

      <p style={{ marginTop: "1rem" }}>
        <Link to="/">← Volver al inicio</Link>
      </p>
    </main>
  );
}

export default NewPost;
