import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestarurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    
    const { resId } = useParams();

    // custom hook to get the restaurant data
    // This makes the RestaurantMenu component is now following Single responsibility principle
    const resInfo = useRestaurantMenu(resId);   

    if(resInfo === null) return <Shimmer />;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log('itemsCards : ', resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item => {
        return item?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory';
    })

    // console.log(categories);

    return (
        <div className="text-center">
            <h1 className="font-bold text-2xl my-5">{name}</h1>
            <p className="font-bold text-lg">{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {/** accordian */}
            {
                categories.map((category) => {
                    return <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
                })
            }
        </div>
    )
}

export default RestaurantMenu;