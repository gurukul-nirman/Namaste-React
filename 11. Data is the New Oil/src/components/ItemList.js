import { IMG_CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    return <div>
        {
            items?.map((item) => {
                return <div key={item?.card?.info?.id} className="p-2 m-2 pb-5 flex justify-between border-b-2 border-gray-200 last:border-none">
                            <div className="flex flex-col text-left">
                                <div>
                                    {item?.card?.info?.isVeg 
                                        ? <span>🥬</span>
                                        : <span>🥩</span>
                                    } 
                                    {
                                        item?.card?.info?.isBestseller 
                                            ? <span className="text-orange-500 text-xs">⭐ Bestseller</span>
                                            : ''
                                    }
                                </div>
                                <span>{item?.card?.info?.name}</span>
                                <span>₹{item?.card?.info?.price / 100}</span>
                                <p className="text-sm text-slate-400 mt-2">{item?.card?.info?.description}</p>    
                            </div>
                            <div className="w-[118px] m-2 flex-none">
                                <div className="absolute">
                                    <button className="px-2 py-1 bg-gray-400 shadow-lg rounded opacity-90 hover:opacity-100 hover:bg-gray-600 hover:text-white">Add +</button>
                                </div>
                                <img src={IMG_CDN_URL + item?.card?.info?.imageId} className="w-full h-24 rounded"/>
                            </div>
                        </div>
            })
        }
    </div>
};

export default ItemList;