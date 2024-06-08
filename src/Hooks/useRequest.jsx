import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";
import useAuth from "./useAuth";

 

const useRequest = () => {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic()
    const {data: requests = [], isPending, refetch}= useQuery({
        queryKey: ['request'],
        queryFn: async()=>{
            const res = await axiosPublic.get(`/request/${user.email}`)
            return res.data
        }
    })
    return  [requests,isPending,refetch]
};

export default useRequest;