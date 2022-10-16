import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

const Login = () => {
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Login</h2>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id=""  required/>
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id=""  required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
                <p>New to Ema Jhon? <Link to="/signup">Create an account</Link></p>
            </form>
        </div>
    );
};

export default Login;