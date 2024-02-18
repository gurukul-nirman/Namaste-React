import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();
    
    return (
        <div className='header flex justify-between items-center shadow-lg pr-5 mb-4'>
            <div className='logo-container'>
                <img className='logo w-44' src={LOGO_URL} />
            </div>
            <div className='nav-items'>
                <ul className="flex items-center gap-8">
                    <li>
                        Online Status: {onlineStatus ? '✅' : '🔴'}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li>
                        <Link to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={() => {
                        btnName === 'Login' ? setBtnName('Logout') : setBtnName('Login');
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;