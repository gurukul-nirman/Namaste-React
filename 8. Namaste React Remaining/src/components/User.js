import { useState } from "react";

const User = ({name}) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    useEffect(() => {
        // in case you want to do something when count changes
    }, [count]);

    useEffect(() => {
        // in case you want to do something when count2 changes
    }, [count2]);

    // useEffect(() => {
        // in case you want to do something when either/both of count or count 2 changes
    // }, [count, count2]);

    return (
        <div className="user-card">
            <h1>Count = {count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Earth</h3>
            <h4>Contact: @theZiton</h4>
        </div>
    )
};

export default User;