import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

export default function Login() {
  const { signIn, googleSignin } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useAxiosPublic();

  const hadleGoogleSignin = async () => {
    googleSignin()
      .then((result) => {
        // console.log(result);
        //   save user in db
        const userInfoDb = {
          name: result.user.displayName,
          email: result.user.email,
        };
        axiosPublic.post("/users", userInfoDb);
        //   save user in db end
        // console.log(location);
        navigate(location?.state ? location?.state?.from?.pathname : "/");
        toast.success("Successfully logged in");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error(error.message);
      });

  };

  //

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // console.log(data);

    signIn(data.email, data.password)
      .then((res) => {
        navigate(location?.state ? location?.state : "/");
        toast.success('Successfully logged in')
      })
      .catch((err) => {
        setErrorMessage(err.message);
        toast.error(err.message);
      });
  };

  return (
    <div className="form-container mx-auto my-4">
      <p className="title">Welcome back</p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          className="input"
          placeholder="Email"
          {...register("email")}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          {...register("password")}
        />
        {/* <p className="page-link">
          <span className="page-link-label">Forgot Password?</span>
        </p> */}
        {errorMessage && (
          <p className="text-red-500 font-semibold text-sm text-center">
            {errorMessage}
          </p>
        )}
        <button className="form-btn" type="submit">
          Log in
        </button>
      </form>
      <p className="sign-up-label">
        Don't have an account?{" "}
        <Link to={"/signup"}>
          <span className="sign-up-link">Sign up</span>
        </Link>
      </p>
      <div className="buttons-container mx-auto">
        <div onClick={hadleGoogleSignin} className="google-login-button">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            x="0px"
            y="0px"
            className="google-icon"
            viewBox="0 0 48 48"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24 c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path
              fill="#FF3D00"
              d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657 C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            ></path>
            <path
              fill="#4CAF50"
              d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            ></path>
            <path
              fill="#1976D2"
              d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
          </svg>
          <span>Log in with Google</span>
        </div>
      </div>
    </div>
  );
}
