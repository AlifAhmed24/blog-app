import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom';
import './login.css';

export default function Login(){




    const [loginData, setLoginData] = useState({
        username:'',
        password:''
    })
    const [err, setErr] = useState(null)
    
    const navigate = useNavigate();

    function hanleChange(e){
        setLoginData(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }
    

    async function handleSubmit(e){
        e.preventDefault();
        
        try {

            const res = await axios.post('http://localhost:8800/user/login', loginData)
            navigate('/write')
            
        } catch (error) {
            setErr(error.response.data)
        }
    }
    
    
    
    return(
        <div className='login'>
            <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='input'>
                <span>Username</span>
                <input type="text" name="username"  onChange={hanleChange} value={loginData.username} required/>
            </div>
            <div className='input'>
                <span>Password</span>
                <input type="password" name="password" onChange={hanleChange} value={loginData.password} required/>
            </div>
            {err && <p>{err.message}</p>}
            <button>Register</button>
            <Link to="">Register</Link>
            </form>
        </div>
    )
}