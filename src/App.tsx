import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import AdminPanel from "./pages/AdminPanel"

function App() {
  return (
    <BrowserRouter>
      <div style={{background:"#0f172a", minHeight:"100vh", color:"white"}}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App