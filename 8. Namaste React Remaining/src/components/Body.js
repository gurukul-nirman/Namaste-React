import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CORS_PROXY, GET_RESTAURANTS_ENDPOINT } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]); 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 
    const [searchText,setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(CORS_PROXY + GET_RESTAURANTS_ENDPOINT);

        const json = await data.json();

        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // Conditional Rendering
    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    return (listOfRestaurants.length === 0) ? <Shimmer />
    : (
        <div className='body'>
            <div className='filter'>
                <div className="search">
                    <input type="text" className="search-box" onChange={(event) => setSearchText(event.target.value)} value={searchText} />
                    <button className="search-btn" onClick={() => {
                        setFilteredRestaurants(listOfRestaurants.filter(item => item.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredLsit = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setFilteredRestaurants(filteredLsit);
                    console.log(listOfRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='restaurant-container'>
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCard resData={restaurant.info} />
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;