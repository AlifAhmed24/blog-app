import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import './register.css';

export default function Register(){

    const [registerData, setRegisterdata] = useState({
        username:'',
        email:'',
        password:''
    })
    const [err, setErr] = useState(null)
    
    const navigate = useNavigate();

    function hanleChange(e){
        setRegisterdata(prev => {
            return {...prev, [e.target.name]: e.target.value}
        })
    }


    async function handleSubmit(e){
        e.preventDefault();
        
        try {

            const res = await axios.post('http://localhost:8800/user/register', registerData)
            navigate('/login')
            
        } catch (error) {
            setErr(error.response.data)
        }
    }

    return (
        <div className='register'>
            <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='input'>
                <span>Username</span>
                <input type="text" name="username"  onChange={hanleChange} value={registerData.username} required/>
            </div>
            <div className='input'>
                <span>Email Adress</span>
                <input type="text" name="email" onChange={hanleChange} value={registerData.email} required/>
            </div>
            <div className='input'>
                <span>Password</span>
                <input type="password" name="password" onChange={hanleChange} value={registerData.password} required/>
            </div>
            <div className='input'>
                <span>Confirm Password</span>
                <input type="password" name="confirmPassword" onChange={hanleChange} value={registerData.password} required/>
            </div>
            {err && <p>{err.message}</p>}
            <button>Register</button>
            <Link to="/login">Login</Link>
            </form>
        </div>
    )
}