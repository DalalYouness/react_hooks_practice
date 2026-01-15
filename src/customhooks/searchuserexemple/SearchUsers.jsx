import useDebouncedSearch from "../hooks/useDebouncedSearch";

function SearchUsers() {
  const [query, users, loading, hanleChangeQuery] = useDebouncedSearch(
    "",
    [],
    "https://jsonplaceholder.typicode.com/users?q="
  );
  return (
    <div>
      <input
        value={query}
        onChange={hanleChangeQuery}
        placeholder="Search users..."
      />
      {loading && <p>Loading...</p>}
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchUsers;
