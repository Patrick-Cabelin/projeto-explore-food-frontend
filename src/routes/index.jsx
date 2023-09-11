import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from '../hooks/auth'

function Routes(){
    const {user} = useAuth()
    return (
        <BrowserRouter>
            {user ? <AppRoutes user={user}/> : <AuthRoutes/>}
        </BrowserRouter>
    )
}
export {Routes}