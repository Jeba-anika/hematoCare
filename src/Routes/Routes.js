import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import EachServicePage from "../Pages/EachServicePage/EachServicePage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyReviewsPage from "../Pages/MyReviewsPage/MyReviewsPage";
import Services from "../Pages/Services/Services";
import SignUp from "../Pages/SignUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('https://hemato-care-server.vercel.app/home')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: ()=> fetch('https://hemato-care-server.vercel.app/services')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/services/:id',
                element: <EachServicePage></EachServicePage>,
                loader: ({params}) => fetch(`https://hemato-care-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/myreviews',
                element: <MyReviewsPage></MyReviewsPage>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])