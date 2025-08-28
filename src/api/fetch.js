import axios from "axios"



const customAxios = axios.create({
   baseURL:`https://cortex-7.com/api/`,
   withCredentials:true,
});

export { axios as originalAxios };  // export original axios
export default customAxios;
