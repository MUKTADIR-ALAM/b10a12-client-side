import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import useAuth from "../../../Hooks/useAuth";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GAREWAY_PK);

export default function Payment() {
  const { id } = useParams();
  const { user } = useAuth();
  return (
    <div className="space-y-4 my-4">
      <div className="text-xl font-bold text-center">
        ------ Pay the Request Fee 5$ ------
      </div>
      <div className="w-full">
        <label className="label label-text" htmlFor="defaultInput">
          Biodata Id
        </label>
        <input
          type="text"
          placeholder="BiodataId"
          className="input"
          id="biodataId"
          defaultValue={id}
          readOnly
        />
      </div>
      <div className="w-full">
        <label className="label label-text" htmlFor="defaultInput">
          Self Email
        </label>
        <input
          type="text"
          placeholder="your mail"
          className="input"
          id="mail"
          defaultValue={user?.email}
          readOnly
        />
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
}
