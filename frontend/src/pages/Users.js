import { useState } from "react";

export default function Users() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Faiz Yusoff",
      email: "faiz@example.com",
      role: "Admin",
      status: "Active"
    },
    {
      id: 2,
      name: "Ali Ahmad",
      email: "ali@example.com",
      role: "User",
      status: "Inactive"
    }
  ]);

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="p-4">

      <div className="card">
        
        <div className="card-header d-flex justify-content-between">
          <strong>Users Management</strong>
          <button className="btn btn-primary btn-sm">+ Add User</button>
        </div>

        <div className="table-responsive">
          <table className="table align-middle">
            
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>

                  <td>
                    <span className={`badge ${
                      user.status === "Active"
                        ? "bg-success"
                        : "bg-secondary"
                    }`}>
                      {user.status}
                    </span>
                  </td>

                  <td className="text-end">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      View
                    </button>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

    </div>
  );
}