import React from "react";
import {
    createBrowserRouter as Router,
    RouterProvider,
    Route,
    Outlet
  } from "react-router-dom";
import Nav from './componnents/nav/nav.jsx';
import Home from './componnents/home/home';
import LifeStyle from './componnents/life-style/life-style.jsx';
import Health from './componnents/health/health.jsx';
import Fashion from './componnents/fashion/fashion.jsx';
import FoodAndCooking from './componnents/food-and-cooking/food-and-cooking.jsx'
import Technology from "./componnents/technology/technology.jsx";
import Business from "./componnents/business/business.jsx";
import Sports from './componnents/sports/sport.jsx'
import Education from "./componnents/education/education.jsx";
import Article from './componnents/article/article.jsx';
import Footer from './componnents/footer/footer.jsx';
import './css/style.css'

function Layout(){
    return (
        <>
            <Nav />
            <Outlet />
            <Footer />
        </>
    )
}

const router = Router([
    {
        path: "/",
        element: <Layout />,
        children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/lifestyle",
            element: <LifeStyle />
        },
        {
            path: "/health",
            element: <Health />
        },
        {
            path: "/fashion",
            element: <Fashion />
        },
        {
            path: "/foodandcooking",
            element: <FoodAndCooking />
        },
        {
            path: "/technology",
            element: <Technology />
        },
        {
            path: "/business",
            element: <Business />
        },
        {
            path: "/sports",
            element: <Sports />
        },
        {
            path: "/education",
            element: <Education />
        },
        {
            path: "/:category/:id",
            element: <Article />
        },
    ]
    },
    
])

function App(){
    return (
        <div className="main">
            <RouterProvider router={router}/>
        </div>
    )
}




export default App;