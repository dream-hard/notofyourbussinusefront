import { Navigate,useLocation ,Outlet, useNavigate, replace} from "react-router-dom";

import {  useEffect } from "react";
import useAuth from "../../Hooks/useAuth";

function Premiumandup(){
    const {claims}=useAuth();
    const Location=useLocation();


    return (claims.roles[0]!=="general_user"&& claims.roles[0]!=="guest")?<Outlet></Outlet>: <Navigate to=''  state={{from:Location}} replace></Navigate>

    
}

export default Premiumandup

