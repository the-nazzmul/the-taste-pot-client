import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useUserRole = () => {
    const{user} = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const {data: userRole,isLoading: userLoading} = useQuery(['userRole', user?.email], async()=>{
        const response = await axiosSecure(`/users/role/${user?.email}`)
        return response.data.admin
    })
    return [userRole, userLoading]
 };

export default useUserRole;