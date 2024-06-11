import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

 

const useAllRequest = () => {
    const axiosPublic = useAxiosPublic()
    const {data: requests = [], isPending, refetch}= useQuery({
        queryKey: ['request'],
        queryFn: async()=>{
            const res = await axiosPublic.get("/request")
            return res.data
        }
    })
    return  [requests,isPending,refetch]
};

export default useAllRequest;