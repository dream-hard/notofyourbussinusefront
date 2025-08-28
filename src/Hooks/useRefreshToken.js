import axios from '../api/fetch'
import useAuth from './useAuth'

const useRefreshToken=()=>{
    const {Setauth}=useAuth();
    const refresh= async ()=>{


        const response =await axios("",{
            method:"GET",
            headers:{
                "Content-Type": "application/x-www-form-urlencoded",


                withCredentials:true
             },
        });
        Setauth(response.data.authtoken);
        return response.data.authtoken;



    }
    return refresh;
}
export default useRefreshToken;