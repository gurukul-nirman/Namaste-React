import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {name, cuisines, costForTwo, sla, avgRating, cloudinaryImageId} = props.resData;

    return (
        <div className='m-4 p-4 w-52 rounded min-h-[92.99%] bg-gray-100 hover:bg-gray-200 ease-in-out duration-300 hover:scale-105'>
            <img className='rounded' alt='res logo' src={IMG_CDN_URL+cloudinaryImageId}/>
            <h3 className="font-bold py-1 text-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    )
}

// Higher Order Component

// input - RestrauntCard => RestrauntCardOpen

// withOpenLabel is a higher order component which is taking RestaurantCard as an input and returning 
// new compnent(enhanced RestrauantCard) with enhancement (open label in our case) 
export const withOpenLabel = (RestaurantCard) => {
    return (props) => {          // Return a component
        return (
            <div className="min-h-[92.99%]">
                <label className="absolute bg-black text-white m-2 px-2 pb-1 rounded">Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export default RestaurantCard;