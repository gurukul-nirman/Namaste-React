import { IMG_CDN_URL } from "../utils/constants";

const styleCard = {
    backgroundColor: '#f0f0f0'
};

const RestaurantCard = (props) => {
    const {name, cuisines, costForTwo, sla : {deliveryTime}, avgRating, cloudinaryImageId} = props.resData;
    
    return (
        <div className='restaurant-card' style={styleCard}>
            <img className='res-logo' alt='res logo' src={IMG_CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} mins</h4>
        </div>
    )
}

export default RestaurantCard;