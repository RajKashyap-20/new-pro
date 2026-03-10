import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function Profile() {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    getUser()
  }, [])

  async function getUser() {
    const { data } = await supabase.auth.getUser()
    setUser(data.user)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>

      {user ? (
        <div className="bg-white shadow p-4 rounded">
          <p>
            <strong>Email:</strong> {user.email}
          </p>

          <p>
            <strong>User ID:</strong> {user.id}
          </p>

          <p>
            <strong>Created At:</strong> {new Date(user.created_at).toLocaleString()}
          </p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  )
}