import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useEnrolled = () => {
    const { user, loading } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    const { data: enrolledCourses = [], isLoading: enrolledClassesLoading } = useQuery({
        queryKey: ['/paymentHistory', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            if (!loading && user.email) {
                const result = await axiosSecure(`/paymentHistory/${user?.email}`)
                return result.data
            }
        }
    })
    return [enrolledCourses, enrolledClassesLoading]
};

export default useEnrolled;