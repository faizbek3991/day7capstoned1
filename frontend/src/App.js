import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Instances from "./pages/Instances";
import Users from "./pages/Users";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="d-flex">

        <Sidebar />

        <div className="flex-grow-1">
          <Navbar />

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/instances" element={<Instances />} />
            <Route path="/users" element={<Users />} />
          </Routes>

        </div>

      </div>
    </Router>
  );
}

export default App;