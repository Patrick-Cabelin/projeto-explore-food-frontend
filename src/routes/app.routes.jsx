import { useRoutes } from "react-router-dom";

import {Home} from '../assets/pages/Home/index'
import {MoviePreview} from '../assets/pages/MoviePreview/index'
import {NewMovie} from '../assets/pages/NewMovie/index'
import {Profile} from '../assets/pages/Profile/Index'

function AppRoutes(){
   const appRoute = useRoutes([
    {
        path:'/', 
        element:<Home/> , 
    },
    {
        path:'/preview/:id' ,
        element:<MoviePreview/> , 
    },
    {
        path:'/newmovie' ,
        element: <NewMovie/>, 
    },
    {
        path:'/profile',
        element: <Profile/>
    },
   ]) 
    return appRoute
}

export {AppRoutes}