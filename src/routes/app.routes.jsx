import { useRoutes } from "react-router-dom";

import {Home} from '../assets/pages/Home'
import {DishPreview} from '../assets/pages/DishPreview'
import {NewDish} from '../assets/pages/NewDish'
import {EditDish} from '../assets/pages/EditDish'


function AppRoutes(){
   const appRoute = useRoutes([
    {
        path:'/', 
        element:<Home/> , 
    },
    {
        path:'/preview/:id' ,
        element:<DishPreview/> , 
    },
    {
        path:'/newdish' ,
        element: <NewDish/>, 
    },
    {
        path:'/editdish/:id' ,
        element: <EditDish/>, 
    }
   ]) 
    return appRoute
}

export {AppRoutes}