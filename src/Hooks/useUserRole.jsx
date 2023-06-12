import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserRole = () => {
    const{ user,loading} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { refetch, data: userRole = [], isLoading: userLoading } = useQuery({
        queryKey: ['users', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure(`/users/role/${user?.email}`)
            return res.data.role;
        },
    })
    return [userRole, userLoading, refetch] 
 };

export default useUserRole;