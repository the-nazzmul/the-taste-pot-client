import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useClientSecret = (price) => {
    const [clientSecret, setClientSecret] = useState(null);
    const [axiosSecure] = useAxiosSecure()

    useEffect(() => {
        if (!clientSecret) {
            axiosSecure.post("/create-payment-intent", { price })
            .then((res) => {
                setClientSecret(res.data.clientSecret);
            });
        }
    }, [])
    return clientSecret
};

export default useClientSecret;