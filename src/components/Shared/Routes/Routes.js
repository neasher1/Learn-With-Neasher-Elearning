import { createBrowserRouter } from "react-router-dom";
import CourseLayout from "../../Layouts/CourseLayout/CourseLayout";
import HomeLayout from "../../Layouts/HomeLayout/HomeLayout";
import Blog from "../../Pages/Blog/Blog";
import Checkout from "../../Pages/Checkout/Checkout";
import CourseDetails from "../../Pages/CourseDetails/CourseDetails";
import Courses from "../../Pages/Courses/Courses";
import Error from "../../Pages/Error/Error";
import FAQ from "../../Pages/FAQ/FAQ";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
        errorElement:<Error></Error>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/home",
                element:<Home></Home>
            },
            {
                path:'/course/:id',
                loader:({params})=>fetch(`https://assignment10-server-iota.vercel.app/course/${params.id}`),
                element:<PrivateRoutes><CourseDetails></CourseDetails></PrivateRoutes>
            },
            {
                path:'checkout/:id',
                loader:({params})=>fetch(`https://assignment10-server-iota.vercel.app/course/${params.id}`),
                element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>
                
            },
            {
                path:'/login',
                element:<Login></Login>
            }
            ,
            {
                path:'/register',
                element:<Register></Register>
            }
            ,
            {
                path:'/blog',
                element:<Blog></Blog>
            }
            ,
            {
                path:'/faq',
                element:<FAQ></FAQ>
            }
           
        ]
    },
    {
        path:'/courses',
        element:<CourseLayout></CourseLayout>,
        errorElement:<Error></Error>,
        loader:()=>fetch('https://assignment10-server-iota.vercel.app/category'),
        children:[
            {
                path:'/courses',
                element:<Courses></Courses>,
                loader:()=>fetch('https://assignment10-server-iota.vercel.app/')
            }
            ,
            {
                path:'/courses/:name',
                element:<Courses></Courses>,
                loader:({params})=>fetch(`https://assignment10-server-iota.vercel.app/courses/${params.name}`)
            }
            
        ]

    }
   
    
    
])