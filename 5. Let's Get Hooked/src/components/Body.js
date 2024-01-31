import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([{
        name: 'Dominos',
        id: '334475',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliverytime: 36,
        avgRating: '3.8'
    },
    {
        name: 'MCD',
        id: '334476',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliverytime: 36,
        avgRating: '4.5'
    },
    {
        name: 'KFC',
        id: '334477',
        cloudinaryImageId: 'bdcd233971b7c81bf77e1fa4471280eb',
        cuisines: ['Burgers', 'American', 'Snacks', 'Fast Food'],
        costForTwo: 40000,
        deliverytime: 36,
        avgRating: '4.1'
    }]); 

    return (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    const filteredLsit = listOfRestaurants.filter(
                        (res) => res.avgRating > 4
                    )
                    setListOfRestaurants(filteredLsit);
                    console.log(listOfRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='restaurant-container'>
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.id} resData={restaurant} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;