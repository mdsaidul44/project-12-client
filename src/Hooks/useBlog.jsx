import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

 

const useBlog = () => {
    const axiosPublic = useAxiosPublic()
    const {data: blogs = [], loading,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
           const res = await axiosPublic.get('/blog')
           return res.data
        }
    })
     return  [blogs,loading,refetch]
};

export default useBlog;