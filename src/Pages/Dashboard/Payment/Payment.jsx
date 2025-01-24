import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import { useParams } from 'react-router-dom'
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GAREWAY_PK);

export default function Payment() {

  const {id} = useParams();
  return (
    <div>Payment

      <Elements stripe={stripePromise}>
        <CheckoutForm/>
      </Elements>
      
    </div>
  )
}
