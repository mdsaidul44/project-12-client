import axios from "axios";

 
const axiosPublic = axios.create({
    baseURL: 'https://my-assignment12-server-seven.vercel.app'
})
const useAxiosPublic = () => { 
    return  axiosPublic
};

export default useAxiosPublic;