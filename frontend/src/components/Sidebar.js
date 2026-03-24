import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="bg-white border-end vh-100 p-3" style={{ width: "250px" }}>
      <h4 className="text-primary mb-4">SumoPod</h4>

      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/instances" className="nav-link">Instances</Link>
        </li>
        <li className="nav-item">
          <Link to="/users" className="nav-link">Users</Link>
        </li>
      </ul>
    </div>
  );
}