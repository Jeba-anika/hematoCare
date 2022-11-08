import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import EachServicePage from "../Pages/EachServicePage/EachServicePage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
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
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])