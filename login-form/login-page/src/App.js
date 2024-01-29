import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import TextForm from "./components/TextForm";
import Dashboard from "./components/Dashboard";

function App() {
  const localToken = localStorage.getItem("token")
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={localToken ? <Dashboard /> : <Login />} />
        <Route path="/notes" element={localToken ? <TextForm /> : <Login />} />
        <Route path="/login" element={localToken ? <Dashboard /> : <Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="*" element={<><h1>404 page not found</h1></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
