import React, { useState } from "react";
import "../Login/Login.css";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Signup() {
  const { createUser, setUser, updateUserProfile, googleSignin } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  const hadleGoogleSignin = () => {
    googleSignin()
      .then((result) => {
        console.log(result);
        //   save user in db
            const userInfoDb = {
            name: result.user.displayName,
            email: result.user.email,
            };
            axiosPublic.post("/users", userInfoDb);
        //   save user in db end
        navigate(location?.state ? location?.state : "/");
        toast.success("Successfully loggen in!");
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error(error.message);
      });
  };

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.PhotoUrl);
    setErrorMessage("");

    const urlPattern =
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if (!urlPattern.test(data.PhotoUrl)) {
      console.log("inside");
      toast.error("Invalid img url");
      return;
    }

    createUser(data.email, data.password).then((result) => {
      //   console.log(result.user);
      updateUserProfile(data.name, data.PhotoUrl)
        .then(() => {
          setUser((prevUser) => {
            return {
              ...prevUser,
              displayName: data.name,
              photoURL: data.PhotoUrl,
            };
          });
          //   save user in db
          const userInfoDb = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfoDb);
          //   save user in db end
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((err) => {
          setErrorMessage(err.message);
          console.log(err);
        });
    });
  };
  return (
    <div className="form-container">
      <p className="title">Register your account</p>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="input"
          placeholder="name"
          required
          {...register("name")}
        />
        <input
          type="email"
          className="input"
          placeholder="Email"
          required
          {...register("email")}
        />
        <input
          type="text"
          className="input"
          placeholder="PhotoUrl"
          required
          {...register("PhotoUrl")}
        />
        <input
          type="password"
          className="input"
          placeholder="Password"
          required
          {...register("password")}
        />
        {errorMessage && (
          <p className="text-red-500 font-semibold text-sm text-center">
            {errorMessage}
          </p>
        )}
        <button className="form-btn" type="submit">
          Sign In
        </button>
      </form>
      <p className="sign-up-label">
        Already have an account?{" "}
        <Link to={"/login"}>
          <span className="sign-up-link">Login</span>
        </Link>
      </p>
      <div className="buttons-container mx-auto">
        <button onClick={hadleGoogleSignin} className="google-login-button">
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
        </button>
      </div>
    </div>
  );
}
