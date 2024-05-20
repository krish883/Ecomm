import React, { useState, useEffect } from 'react';
import Header from './Header'

function Register() {


    useEffect(()=>{

        if(localStorage.getItem('user-info'))

        {
            window.location.href = '/login';
        }

    },[])
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    async function signUp() {
        let item = { name, email, password };
        console.warn(item);

       

        let result = await fetch("http://127.0.0.1:8000/api/register", {
            method: 'POST',
            body: JSON.stringify(item),
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            }


        });

        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        window.location.href = '/login';
        
    }

    return (
       <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">
            <h1>Sign Up</h1>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="name" />
            <br />
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="email" />
            <br />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="password" />
            <br />
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>

        </>
    );
}

export default Register;
