import React, {lazy, Suspense, useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import UserContext from './utils/UserContext';

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayoutComponent = () => {

    const [userName, setUserName] = useState();
    
    // authentication
    useEffect(() => {
        // Make an API call and send username and password
        const data = {
            name: 'Shivdas'
        }
        setUserName(data.name);
    }, []);

    return (
        // we passed setUserName in the userContext.Provider so that we could change the value of the context from anywhere in the code
        <UserContext.Provider value={{ loggedInUser: userName, setUserName}}>
            <div className='app'>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayoutComponent />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h2>Loading...</h2>}> <Grocery /> </Suspense>
            }
        ],
        errorElement: <Error />
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);