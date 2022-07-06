import React, { useState } from "react";
import {useHistory} from 'react-router-dom'


function Login(){
    const [username,setUsername] = useState("")
    const [password,setPassword] = useState("")
    let history = useHistory()
    let [isAdmin, setIsAdmin] = useState('')
    const loginHandler = e =>{
        if(username === "admin" && password === "admin" ){
            history.push("/")
        }
    }
    return (
        <div>
            <div>login</div>
            <br />
            <input type='text' placeholder="username" value={username} onChange={e=>setUsername(e.target.value)} />
            <br />
            <input type='text' placeholder="password"  value={password} onChange={e=>setPassword(e.target.value)} />
            <button onClick={loginHandler}>Login</button>
        </div>
    )
}

export default Login