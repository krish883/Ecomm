import React, { useState, useEffect } from 'react';
import Header from './Header'
function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    useEffect(()=>{

        if(localStorage.getItem('user-info'))

        {
            window.location.href = '/add';
        }

    },[])  

    async function login(){
        let item = {email,password};
        let result = await fetch("http://127.0.0.1:8000/api/login", {
            method:'POST',
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },

            body:  JSON.stringify(item)

        });

        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        window.location.href = '/add';
       

    }
    return(
        <>
        <Header/>
        <div>
           

            <div className="col-sm-6 offset-sm-3">
            <h1>Login Page</h1>
            <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" />
            <br />
            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" />
            <br />
            <button className="btn btn-primary" onClick={login}>Submit</button>
        </div>

        </div>

        </>
    )
}

export default Login