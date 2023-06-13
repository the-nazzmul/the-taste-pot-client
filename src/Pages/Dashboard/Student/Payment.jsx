import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData} from "react-router-dom";
import useSelectedCourse from "../../../Hooks/useSelectedCourse";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)

const Payment = () => {

    const[, ,refetch] = useSelectedCourse()
    const course = useLoaderData()
    console.log(course);
    const price = course.price;

    return (

        <div className="w-full h-full px-12 mt-20">
            <h2 className="text-3xl font-bold text-center my-8">Make your Payment</h2>
            <Elements stripe={stripePromise}>
                <CheckoutForm refetch={refetch} course={course} price={price}></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;