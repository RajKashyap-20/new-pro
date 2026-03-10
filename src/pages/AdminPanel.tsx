import { useEffect, useState } from "react"
import { supabase } from "../lib/supabase"

export default function AdminPanel() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    fetchPosts()
  }, [])

  async function fetchPosts() {
    const { data, error } = await supabase
      .from("posts")
      .select("*")

    if (!error) {
      setPosts(data || [])
    }
  }

  async function deletePost(id: string) {
    await supabase
      .from("posts")
      .delete()
      .eq("id", id)

    fetchPosts()
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>

      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white shadow p-4 rounded">
            <h2 className="font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.content}</p>

            <button
              onClick={() => deletePost(post.id)}
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete Post
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}