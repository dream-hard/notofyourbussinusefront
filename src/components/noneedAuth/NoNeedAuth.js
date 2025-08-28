import { Navigate,useLocation ,Outlet} from "react-router-dom";

import { useEffect } from "react";


import useAuth from "../../Hooks/useAuth";

function NoNeedAuth(){
    const {auth}=useAuth();
    const Location=useLocation();

        
    return(
        
        !auth?.authtoken
        ?<Outlet></Outlet>
        :<Navigate to='/app'  state={{from:Location}} replace></Navigate>
    )
}

export default NoNeedAuth