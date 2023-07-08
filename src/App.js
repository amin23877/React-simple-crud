import { Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import ClassDetails from "./pages/ClassDetails";
import ClassCrud from "./pages/Class";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/masters" element={<ClassCrud />} />
      <Route path="/masters/:classId" element={<ClassDetails />} />
      <Route path="/student" element={<Student />} />
    </Routes>
  );
}

export default App;
