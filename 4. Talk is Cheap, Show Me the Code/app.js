import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Header
 *  - Logo
 *  - Nav Links
 * Body
 *  - Search
 *  - Restaurant Container
 *  - RestaurantCard
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 * 
 */

const styleCard = {
    backgroundColor: '#f0f0f0'
};

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png'/>
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    const {resName, cuisine} = props;
    return (
        <div className='restaurant-card' style={styleCard}>
            <img className='res-logo' alt='res logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/80f040545552605e33eba09f8fa30be9'/>
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 stars</h4>
            <h4>34 mins</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className='body'>
            <div className='search'>
                Search
            </div>
            <div className='restaurant-container'>
                <RestaurantCard resName="Meghana Foods" cuisine="Pizza's, Burgers, Fast food" />
                <RestaurantCard resName="Shiv corner" cuisine="Pure Veg. Food and Snacks" />
            </div>
        </div>
    )
}

const AppLayoutComponent = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayoutComponent />);