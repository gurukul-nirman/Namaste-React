import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestarurantMenu";

const RestaurantMenu = () => {
    
    const { resId } = useParams();

    // custom hook to get the restaurant data
    // This makes the RestaurantMenu component is now following Single responsibility principle
    const resInfo = useRestaurantMenu(resId);   

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log('itemsCards : ', itemCards)

    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(itemCard => <li key={itemCard?.card?.info?.id}>{itemCard?.card?.info?.name} - Rs.{itemCard?.card?.info?.price / 100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;