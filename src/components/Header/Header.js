import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import { AuthContext } from '../contexts/UserContext';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ? <Link onClick={logOut} to="/login">
                        Sign Out
                        <FontAwesomeIcon icon={faRightFromBracket} />
                        </Link>
                    : <>
                            <Link to="/login">Login</Link>
                            <Link to="/signup">Sign Up</Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Header;