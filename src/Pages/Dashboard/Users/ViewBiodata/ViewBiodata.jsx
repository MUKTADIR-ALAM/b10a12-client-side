import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import LoadingSpinner from "../../../../Shared/LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";
import Swal from "sweetalert2";


export default function ViewBiodata() {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const {
    isPending,
    data: selfBiodata = {},
    refetch,
  } = useQuery({
    queryKey: ["selfBiodata", user],
    queryFn: async () => {
      const res = await axiosSecure.get(`/selfBiodata/${user?.email}`);
      return res.data;
    },
  });

  const {
    _id,
    biodataType,
    name,
    photoURL,
    occupation,
    presentDivision,
    age,
    BiodataId,
    permanentDivision,
    fathersName,
    mothersName,
    partnerHeight,
    pratnerWeight,
    phoneNumber,
    partnerAge,
    birthDate,
    email,
    race,
    selfHeight,
    selfWeight,
    status,
  } = selfBiodata || {};

  const hadlePremium = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Apply",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.patch(
          `/applyBiodataPremium/${email}`
        );
        console.log(data)
        if (data?.modifiedCount) {
          Swal.fire({
            title: "Applied!",
            text: "Your Applied for premium Biodata.",
            icon: "success"
          });
          refetch();
        }
      }
    });
  };

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      {selfBiodata?.name ? (
        <div>
          {/* premium */}
          <div className="mb-4">
            {status === 'normal' && (
              <button
                onClick={hadlePremium}
                className="btn btn-error text-white"
              >
                Apply for premium
              </button>
            )}
            {status === "pending" && (
              <div className="font-bold text-xl">
                Your request for premium biodata is pending
              </div>
            )}
            {status === "premium" && (
              <div className="font-bold text-xl">
                Now your Biodata is premium
              </div>
            )}
          </div>

          {/* image */}
          <div className="w-40">
            <img className="w-full" src={photoURL} alt="" />
          </div>

          {/* basic information */}
          <div className="mt-4">
            <p className="text-2xl font-bold mb-2">Basic Information</p>
            <p>
              <span className="font-bold">Name:</span> {name}
            </p>
            <p>
              <span className="font-bold">Gender:</span> {biodataType}
            </p>
            <p>
              <span className="font-bold">Age:</span> {age} years
            </p>
            <p>
              <span className="font-bold">Occupation:</span> {occupation}
            </p>
          </div>
          
          <div className="mt-4">
            <p className="text-2xl font-bold mb-2">Health Statistics</p>
            <p>
              <span className="font-bold">Race:</span> {race}
            </p>
            <p>
              <span className="font-bold">Height:</span> {selfHeight} cm
            </p>
            <p>
              <span className="font-bold">Weight:</span> {selfWeight} kg
            </p>
            <p>
              <span className="font-bold">Occupation:</span> {occupation}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold mb-2">Ethnicity Information</p>
            <p>
              <span className="font-bold">Fathers Name:</span> {fathersName}
            </p>
            <p>
              <span className="font-bold">Mothers Name:</span> {mothersName}
            </p>
            <p>
              <span className="font-bold">Present Division:</span>{" "}
              {presentDivision}
            </p>
            <p>
              <span className="font-bold">Permanent Division:</span>{" "}
              {permanentDivision}
            </p>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold mb-2">
              Expected Partner Qualification
            </p>
            <p>
              <span className="font-bold">Expected Partner Height:</span>{" "}
              {partnerHeight} cm
            </p>
            <p>
              <span className="font-bold">Expected Partner Weight:</span>{" "}
              {pratnerWeight} kg
            </p>
            <p>
              <span className="font-bold">Expected age:</span> {partnerAge}{" "}
              years
            </p>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold mb-2">Contact Information</p>
            <p>
              <span className="font-bold">Email:</span> {email}
            </p>
            <p>
              <span className="font-bold">Phone Number:</span> {phoneNumber}
            </p>
          </div>
        </div>
      ) : (
        <div className="text-xl font-bold">
          {" "}
          Please first submit your biodata{" "}
        </div>
      )}
    </div>
  );
}
