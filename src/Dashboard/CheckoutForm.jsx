import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import useAxiosSecure from './../Hooks/useAxiosSecure';

const CheckoutForm = () => {
    const [error,setError] = useState('')
    const [clientSecret ,setClientSecret] =useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure();


    useEffect(()=>{
        axiosSecure.post('/create-payment-intent',{ amount: 100})
        .then(res=> {
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    },[])
    const handleSubmit = async (event) => {
        event.preventDefault()

        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)

        if(card == null){
            return
        }
        const {error , paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('payment error',error)
            setError(error.message)
        }
        else{
            console.log('payment method',paymentMethod)
            setError('')
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
                <button className='btn btn-outline btn-primary' type="submit"    >
                    Pay
                </button>
                <p className='text-red-400'>{error}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;