import useFetch from "../hooks/useFetch";

function Posts() {
  const [posts, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (loading) return <p>Loading...</p>;
  return (
    <ul>
      {posts.map((u) => (
        <li key={u.id}>{u.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
