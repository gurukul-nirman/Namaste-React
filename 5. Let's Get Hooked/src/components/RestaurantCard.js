const styleCard = {
    backgroundColor: '#f0f0f0'
};

const RestaurantCard = (props) => {
    const {name, cuisines, costForTwo, deliverytime, avgRating, cloudinaryImageId} = props.resData;
    
    return (
        <div className='restaurant-card' style={styleCard}>
            <img className='res-logo' alt='res logo' src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>₹{costForTwo/100} FOR TWO</h4>
            <h4>{deliverytime} mins</h4>
        </div>
    )
}

export default RestaurantCard;