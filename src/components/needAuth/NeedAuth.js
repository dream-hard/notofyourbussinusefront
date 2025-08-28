import { Navigate,useLocation ,Outlet} from "react-router-dom";

import { useContext, useEffect } from "react";
import AuthContext from "../../auth";
import useAuth from "../../Hooks/useAuth";

function NeedAuth(){
    const {auth}=useAuth();
    const Location=useLocation();
    

    return(
        
        auth?.authtoken
        ?<Outlet></Outlet>
        :<Navigate to='/'  state={{from:Location}} replace></Navigate>
    )
}

export default NeedAuth