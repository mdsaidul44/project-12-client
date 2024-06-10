import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useVolunteer = () => {
    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data: isVolunteer, isPending: isVolunteerLoading } = useQuery({
        queryKey: ['isVolunteer'],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/volunteer/${user.email}`)
            return res.data
        }
    })
    console.log('this is volunteer ',isVolunteer)
    return [isVolunteer, isVolunteerLoading]
};

export default useVolunteer;