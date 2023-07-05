import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ClassCrud from "./pages/Class";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/masters" element={<ClassCrud />} />
      <Route path="/student" element={<Student />} />
    </Routes>
  );
}

export default App;
