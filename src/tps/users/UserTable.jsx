const UserTable = ({ users }) => {
  return (
    <div>
      <h2 className="text-success">User</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">FullName</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullName}</td>
                <td>{user.country}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} align="center">
                No Items
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
