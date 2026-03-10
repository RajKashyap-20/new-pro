import { useState } from "react"
import { supabase } from "../lib/supabase"
import { useNavigate } from "react-router-dom"

export default function Signup(){

const navigate=useNavigate()

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")

const signup=async()=>{

const {error}=await supabase.auth.signUp({
email,
password
})

if(!error){
navigate("/dashboard")
}else{
alert(error.message)
}

}

return(

<div className="flex flex-col items-center mt-20">

<h2 className="text-2xl mb-4">Signup</h2>

<input
className="border p-2 mb-2 text-black"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
className="border p-2 mb-2 text-black"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button
onClick={signup}
className="bg-green-600 px-4 py-2 rounded"
>
Signup
</button>

</div>

)
}