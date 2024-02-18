import { useEffect, useState } from "react";
import { RESTAURANT_MENU_API, CORS_PROXY } from "./constants";

const useRestaurantMenu = (resId) => {
    // fetchdata

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await fetch(CORS_PROXY + RESTAURANT_MENU_API + resId);
        const json = await data.json();

        setResInfo(json.data);
    }

    return resInfo;
};

export default useRestaurantMenu;