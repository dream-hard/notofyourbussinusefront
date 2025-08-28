import axios from "./api/fetch";
import { createContext,useState ,useEffect, useLayoutEffect} from "react";


const AuthContext= createContext({});

function parseJwt(token) {
  try {
    const base64Payload = token;
    const payload = atob(base64Payload); // Decode base64
    return JSON.parse(payload);
  } catch (e) {
    return null;
  }
}


export const AuthProvider= ({children})=>{

    const [auth, Setauth] = useState(null);
    const [claims, setClaims] = useState({roles:["guest"]});

    
    useEffect(()=>{

        const iflogin=async ()=>{
            try {
                const response=await axios("/iflogin",{
                    method:"GET",
                    withCredentials:true,
                });
                if(response?.data?.authtoken) Setauth(response.data.authtoken);
            } catch (error) {
                Setauth(null);
            }
        }
         iflogin();

         return;
        ////////// maybe there is a problem
    },[]);


    useLayoutEffect(()=>{
  
         const decoded = parseJwt(auth);setClaims(decoded);

        const authInterceptor = axios.interceptors.request.use((config)=>{
            config.headers.Authorization=
            (!config._retry && auth)
             ? `Bearer ${auth.authtoken}`
            :config.headers.Authorization;

        return config;
        });

        return ()=>{

            axios.interceptors.request.eject(authInterceptor);
        }
    },[auth]);


    useLayoutEffect(()=>{
        const refreshInterceptor=axios.interceptors.response.use(
            (response)=>response,
            async (error)=>{

                const originresponse=error.config;
                
                if(error.code==="ERR_NETWORK"){
                    Setauth(null);
                }else{
                if(error.response.status===403 &&
                    error.response.data.msg==="Unauthorized"
                ){try {
                    console.log("refresh token please and now");
                    const response=await axios("/refresh",{
                        method:"GET",
                        headers:{
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                        
                        withCredentials:true,
                    });
                    Setauth(response?.data);
                    originresponse.headers.Authorization=`Bearer ${response?.data?.authtoken}`;
                    originresponse._retry=true;

                    return axios(originresponse);
                    
                } catch (error) {
                    Setauth(null)
                }
            }else{
                if(error.response.status >=400 && error.response.status!==405 )
                    Setauth(null);
            }
        }
        return Promise.reject(error)
            },
        );

        return ()=>{
            axios.interceptors.response.eject(refreshInterceptor)
        }
    },[]);

    return (
        <AuthContext.Provider value={{auth,Setauth,claims,setClaims}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext;