import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import "./SignUp.css"
const SignUp = () => {
    const [error, setError] = useState("");
    const {createUser} =   useContext(AuthContext);

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

        createUser(email, password)
        .then((result) => {
            const user = result.user;
            form.reset()
            console.log(user);
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
                {
                    error ? <p>{error}</p> : ""
                }
                <p>Already, have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
};

export default SignUp;