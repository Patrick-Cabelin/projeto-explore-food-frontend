import { useRoutes  } from "react-router-dom";


import {SignIn} from '../assets/pages/SignIn'
import {SignUp} from '../assets/pages/SignUp'

function AuthRoutes(){
    const authRoute = useRoutes([
        {
          path: '/',
          element: <SignIn />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
      ]);
    
    return authRoute
}

export {AuthRoutes}