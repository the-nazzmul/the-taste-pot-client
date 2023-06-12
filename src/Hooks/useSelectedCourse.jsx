import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useSelectedCourse = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()
    const { data: selectedCourses =[], refetch } = useQuery({
        queryKey: [user?.email],
        enabled: !loading,
        queryFn: async () => {
            const result = await axiosSecure(`/selectedClasses/${user?.email}`)
            return result.data
        }
    })
    return [selectedCourses, refetch]
};

export default useSelectedCourse;