import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import useClientSecret from "../../../Hooks/useClientSecret";

const CheckoutForm = ({ price }) => {
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const { user } = useAuth()
    const stripe = useStripe();
    const elements = useElements();
    const clientSecret = useClientSecret(price)

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) { return; }
        const card = elements.getElement(CardElement);

        if (card === null) { return; }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('[error]', error);
            setCardError(error.message)
        } else {
            setCardError('')
        }

        setProcessing(true)

        const { paymentIntent, error: confrimError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        );
        if (confrimError) {
            console.log(confrimError);
        }

        setProcessing(false)

        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
        }
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm bg-orange-400 mt-8" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 mt-8">{cardError}</p>}
            {transactionId && <p className="text-green-500 mt-8">Transaction complete. Transaction Id: {transactionId}</p>}
        </div>
    );
};

export default CheckoutForm;