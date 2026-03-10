import { useState } from "react"
import { supabase } from "../lib/supabase"
import { useAuth } from "../context/AuthContext"

export default function PostForm({refresh}:any){

  const {user}=useAuth()

  const [title,setTitle]=useState("")
  const [content,setContent]=useState("")

  const handleSubmit=async()=>{

    await supabase.from("posts").insert([
      {
        title,
        content,
        user_id:user.id
      }
    ])

    setTitle("")
    setContent("")

    refresh()
  }

  return(

    <div className="bg-gray-800 p-4 rounded mb-6">

      <input
      className="w-full p-2 mb-2 text-black"
      placeholder="Title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      />

      <textarea
      className="w-full p-2 mb-2 text-black"
      placeholder="Content"
      value={content}
      onChange={(e)=>setContent(e.target.value)}
      />

      <button
      onClick={handleSubmit}
      className="bg-blue-600 px-4 py-2 rounded"
      >
      Create Post
      </button>

    </div>
  )
}