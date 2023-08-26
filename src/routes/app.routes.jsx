import { useRoutes } from "react-router-dom";

import {Home} from '../assets/pages/Home'
import {MoviePreview} from '../assets/pages/MoviePreview'
import {NewDish} from '../assets/pages/NewDish'


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
        path:'/NewDish' ,
        element: <NewDish/>, 
    }
   ]) 
    return appRoute
}

export {AppRoutes}