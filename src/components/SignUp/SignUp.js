import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./SignUp.css"
const SignUp = () => {
    const [error, setError] = useState("");
    

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;

       if(password.length < 6){
        setError("Password must greater than 6 charecters");
        return
       }
        if (password !== confirmPassword){
            setError("Password is not match");
            return
        }
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                <p>{error}</p>
                <p>Already, have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;