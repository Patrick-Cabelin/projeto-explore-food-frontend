import { useRoutes } from "react-router-dom";

import {Home} from '../assets/pages/Home/Index'
import {MoviePreview} from '../assets/pages/MoviePreview/Index'
import {NewMovie} from '../assets/pages/NewMovie/Index'


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
    }
   ]) 
    return appRoute
}

export {AppRoutes}