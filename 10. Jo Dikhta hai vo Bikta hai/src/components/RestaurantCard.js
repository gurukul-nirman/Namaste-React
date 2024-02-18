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

export default RestaurantCard;