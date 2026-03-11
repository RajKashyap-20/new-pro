import { useState } from "react"
import { supabase } from "../lib/supabase"
import { useNavigate, Link } from "react-router-dom"

export default function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const login = async () => {

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (!error) {
      navigate("/dashboard")
    } else {
      alert(error.message)
    }

  }

  return (

    <div className="flex flex-col items-center justify-center h-screen">

      <h2 className="text-2xl mb-4">Login</h2>

      <input
        className="border p-2 mb-2 text-black"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        className="border p-2 mb-4 text-black"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        className="bg-blue-600 px-4 py-2 rounded text-white"
      >
        Login
      </button>

      <p className="mt-4">
        Don't have an account?
        <Link to="/signup" className="text-blue-400 ml-2">
          Create Account
        </Link>
      </p>

    </div>

  )
}
}
