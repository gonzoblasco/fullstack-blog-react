import { Routes, Route, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import api from "./api/client";
import PostForm from "./components/PostForm";
import EditablePost from "./components/EditablePost";
import PostDetail from "./pages/PostDetail";
import NewPost from "./pages/NewPost";

function usePosts() {
  return useQuery({
    queryKey: ["posts"],
    queryFn: async () => (await api.get("/posts")).data,
  });
}

function Home() {
  const { data: posts } = usePosts();

  return (
    <main style={{ maxWidth: "800px", margin: "0 auto", padding: "1rem" }}>
      <h1>Fullstack Blog</h1>

      <Link to="/new" style={{ display: "inline-block", marginBottom: "1rem" }}>
        Crear nuevo post
      </Link>

      <hr style={{ margin: "2rem 0" }} />

      <h2>Posts publicados</h2>

      <ul>
        {posts?.map((post) => (
          <li key={post._id} style={{ marginBottom: "1rem" }}>
            <Link to={`/posts/${post._id}`}>{post.title}</Link>
            <EditablePost post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<NewPost />} />
      <Route path="/posts/:id" element={<PostDetail />} />
    </Routes>
  );
}

export default App;
