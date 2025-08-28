import axios from "axios"



const customAxios = axios.create({
   baseURL:`http://172.27.176.1:3001`,
   withCredentials:true,
});

export { axios as originalAxios };  // export original axios
export default customAxios;