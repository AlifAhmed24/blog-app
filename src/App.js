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
import Write from './componnents/write/write.jsx';
import Register from './componnents/register/register.jsx';
import Login from './componnents/login/login.jsx';
import AdminDashboard from "./page/adminDashboard.jsx";
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
    {
        path: "/cpanel:201",
        element: <AdminDashboard />
    },
    {
        path: "/cpanel:201/update/:id",
        element: <AdminDashboard />
    },
    {
        path: "/cpanel:201/write",
        element: <AdminDashboard />
    },
    {
        path: "/cpanel:201/article/Life Style",
        element: <AdminDashboard />
    },
    {
        path: "/cpanel:201/article/Health",
        element: <AdminDashboard />
    },
    {
        path: "/cpanel:201/article/Fashion",
        element: <AdminDashboard />
    },
    {
        path: "/cpanel:201/article/Food and Cooking",
        element: <AdminDashboard />
    },
    {
        path: "/cpanel:201/article/Technology",
        element: <AdminDashboard />
    },
    {
        path: "/cpanel:201/article/Business",
        element: <AdminDashboard />
    },
    {
        path: "/cpanel:201/article/Sports",
        element: <AdminDashboard />
    },
    {
        path: "/cpanel:201/article/Education",
        element: <AdminDashboard />
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