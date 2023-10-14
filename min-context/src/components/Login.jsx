import React from 'react'
import { useState } from 'react'
import UserContext from '../context/UserContext'
import { useContext } from 'react'

function Login() {

    const [password,setPassword]=useState('')
    const [username,setUsername]=useState('')
    const {setUser}=useContext(UserContext)
    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})

    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/> {" "}
      <input type="password" placeholder='password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login
