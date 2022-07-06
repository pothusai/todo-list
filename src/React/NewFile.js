import React, { useState } from "react";



const NewFile = () => {
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[loginStatus,setLoginStatus] = useState({status:false,email:""})


    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const onChangePassword = e =>{
        setPassword(e.target.value)
    }


    const handleLogin = () => {
        if(email && password){
            setLoginStatus({status:"success",email})
            setEmail("")
            setPassword("")
        }else{
            setLoginStatus({status:"fail",email:""})

        }
    }


    return (
        <div>
            <input type="email" placeholder="email"  value={email}   onChange={onChangeEmail} />
            <input type="password" placeholder="password" onChange={onChangePassword}  />
            <button onClick={handleLogin}>LOGIN</button>
            { loginStatus.status === "success" && <div> logged in successfully :: {loginStatus.email} </div>}
            { loginStatus.status === "fail" && <div> provide valid credentials </div>}
        </div>
    )
}   


export default NewFile