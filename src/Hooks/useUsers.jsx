import { useQuery } from "react-query";
import useAuth from "./useAuth";



const useUsers = () => {
    const { user} = useAuth()

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:4000/users`);
            return res.json()
        }
    })
    return [users, refetch]
}

export default useUsers;