import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { CORS_PROXY, GET_RESTAURANTS_ENDPOINT } from "../utils/constants";
import RestaurantCard, {withOpenLabel} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]); 
    const [filteredRestaurants, setFilteredRestaurants] = useState([]); 
    const [searchText,setSearchText] = useState("");

    const RestaurantCardOpen = withOpenLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const { loggedInUser, setUserName } = useContext(UserContext);

    const fetchData = async () => {
        const data = await fetch(CORS_PROXY + GET_RESTAURANTS_ENDPOINT);

        const json = await data.json();

        console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if(!onlineStatus) {
        return (
            <h1>
                Looks like you're offline!! Please check your internet connection !!
            </h1>
        )
    }

    // Conditional Rendering
    // if(listOfRestaurants.length === 0) {
    //     return <Shimmer />
    // }

    return (listOfRestaurants.length === 0) ? <Shimmer />
    : (
        <div className='body'>
            <div className='filter flex'>
                <div className="search ml-4">
                    <input type="text" className="border border-solid border-black" onChange={(event) => setSearchText(event.target.value)} value={searchText} />
                    <button className="px-4 py-0.5 bg-green-100 m-4 border border-solid border-green-700 rounded" onClick={() => {
                        setFilteredRestaurants(listOfRestaurants.filter(item => item.info.name.toLowerCase().includes(searchText.toLowerCase())));
                    }}>Search</button>
                </div>
                <div className="search">
                    <button className="px-3 py-0.5 bg-gray-100 m-4 border border-solid border-gray-700 rounded" onClick={() => {
                        const filteredLsit = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        )
                        setFilteredRestaurants(filteredLsit);
                        console.log(listOfRestaurants);
                    }}>Top Rated Restaurants</button>
                    <label>UserName : </label>
                    <input className="border border-black ml-2 pl-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />

                </div>
            </div>
            <div className='flex flex-wrap justify-center'>
                {
                    filteredRestaurants.map((restaurant) => (
                        <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>
                            {/** if the retaurant is open then add a open label to it. (example of higher order component) */
                                restaurant.info.isOpen 
                                    ? <RestaurantCardOpen resData={restaurant.info} /> 
                                    : <RestaurantCard resData={restaurant.info} />
                            }
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Body;