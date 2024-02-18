const ItemList = ({items}) => {
    console.log(items);
    return <div>
        {
            items?.map((item) => {
                return <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2">
                    <div className="flex justify-between">
                        <span>{item?.card?.info?.name}</span>
                        <span>₹ {item?.card?.info?.price / 100}</span>
                    </div>
                    <p className="text-left text-sm">{item?.card?.info?.description}</p>
                </div>
            })
        }
    </div>
};

export default ItemList;