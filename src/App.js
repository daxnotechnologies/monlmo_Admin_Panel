import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DashboardMain from "./Components/Dashboard";
import DashboardContent from "./Components/DashboardContent";
import Login from "./Components/Login";

import "./App.css";
import Users from "./Components/AllUsers";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Dashboard" element={<DashboardMain />}>
          <Route path="/Dashboard/Home" element={<DashboardContent />} />
          <Route path="/Dashboard/Users" element={<Users  />} />

        </Route>
      </Routes>
    </Router>
  );
}

export default App;
