import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';
import "./Login.css"

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
        signInUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset()
        })
        .catch((error) => {
            console.log(error);
        })
    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Please Login</h2>
            <form onSubmit={handleSubmit}>
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