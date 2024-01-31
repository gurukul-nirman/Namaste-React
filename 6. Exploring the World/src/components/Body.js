import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { GET_RESTAURANTS_ENDPOINT } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]); 

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(GET_RESTAURANTS_ENDPOINT);

        const json = await data.json();

        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    // Conditional Rendering
    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    return (listOfRestaurants.length === 0) ? <Shimmer />
    : (
        <div className='body'>
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    const filteredLsit = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    setListOfRestaurants(filteredLsit);
                    console.log(listOfRestaurants);
                }}>Top Rated Restaurants</button>
            </div>
            <div className='restaurant-container'>
                {
                    listOfRestaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;