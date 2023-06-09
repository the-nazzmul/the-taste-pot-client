import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";



const useUsers = () => {
    const { user} = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async()=>{
            const result = await axiosSecure('/users')
            return result.data
        }
        
    })
    return [users, refetch]
}

export default useUsers;