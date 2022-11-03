import { useState } from "react"
import { useNavigate } from "react-router-dom"

import './Login.css'

import AppName from "../components/AppName"

const Login = () => {
    const navigate = useNavigate()

    const [username, setUsername] =useState ('');
    const [password, setPassword] =useState ('');

    const onChangeUsernameHandler = (event) => {
        setUsername (event.target.value);
    }

    const onChangePasswordHandler = (event) => {
        setPassword (event.target.value);
    }

    const onResetInputHandler = () => {
        setUsername('');
        setPassword('');
        alert('Login Success')
        navigate('/home')
    }

    const validateForm = () => {
        return (username==='user' && password ==='pass')
    }

        return(
            <div className="login-container">
                <form className="login-form">
                    <AppName/>
                    <h2> Log in </h2>
                    {/* <label htmlFor='username' >Username:</label> */}
                    <input 
                        type='text'
                        name='username'
                        value={username }
                        placeholder = 'username'
                        onChange = { onChangeUsernameHandler}
                    />

                   {/*  <label htmlFor='password' >Password:</label> */}
                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        value={ password }
                        onChange = { onChangePasswordHandler}
                    />

                    <button 
                        onClick={onResetInputHandler} 
                        disabled={!validateForm()}>Login</button>
                </form>
            </div>
        )
}

export default Login;