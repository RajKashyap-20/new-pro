import { useEffect,useState } from "react"
import { supabase } from "../lib/supabase"
import { useAuth } from "../context/AuthContext"
import PostForm from "../components/PostForm"

export default function Dashboard(){

const {user}=useAuth()

const [posts,setPosts]=useState<any[]>([])

useEffect(()=>{
fetchPosts()
},[])

const fetchPosts=async()=>{

const {data}=await supabase
.from("posts")
.select("*")
.eq("user_id",user.id)

setPosts(data||[])
}

const deletePost=async(id:string)=>{

await supabase.from("posts").delete().eq("id",id)

fetchPosts()
}

return(

<div className="p-10">

<h2 className="text-3xl mb-6">Dashboard</h2>

<PostForm refresh={fetchPosts}/>

{posts.map((post)=>(

<div key={post.id} className="bg-gray-800 p-4 mb-4 rounded">

<h3>{post.title}</h3>
<p>{post.content}</p>

<button
onClick={()=>deletePost(post.id)}
className="text-red-400 mt-2"
>
Delete
</button>

</div>

))}

</div>

)

}