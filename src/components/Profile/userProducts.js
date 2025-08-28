import { NavLink, Outlet } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";



export default function Userpanel(){
    const {claims}=useAuth();
  


  return (
    <div className="container-fluid">
        <div className="side-section col-11 col-sm-5 col-md-4 me-auto">
            <ul className="list-unstyled">
                <NavLink to='Used_Products' className="mb-2"><li>Used Prodcuts</li></NavLink>
                <NavLink to='New_Products' className="mb-2"><li>New Prodcuts</li></NavLink>
            </ul>
        </div>
        <div className="main-section col-12 col-sm-7 col-md-8">
            <Outlet></Outlet>
        </div>



    </div>
    )
}