import React from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";

export default function BiodataDetails() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { isPending, data: details = {} } = useQuery({
    queryKey: ["biodataDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`biodataDetails/${id}`);
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
  } = details || {};

  const handleAddtoFavorite = async () => {
    // Name
    // Biodata Id
    // Permanent Address
    // Occupation
    // Delete Button
    const favBioInfo = {
      ownerEmail: user?.email,
      name,
      BiodataId: _id,
      PermanenAddress: permanentDivision,
      occupation,
    };


      const { data } = await axiosSecure.post(
        "/saveFavoriteBiodata",
        favBioInfo
      );
      if (data?.insertedId) {
        toast.success("successfully added to favorite");
      }
      if (data?.message === "you already add this") {
        toast.error("you already add this biodata");
      }
    
  };

  if (isPending) {
    return <LoadingSpinner />;
  }
  return (
    <div className="mt-4">
      <div className="lg:flex gap-2 justify-evenly">
        <div className="w-[400px] h-[300] border p-3">
          <img className="w-full h-full" src={photoURL} alt="" />
        </div>
        <div className="space-y-2">
          <p className="text-xl">
            <span className="font-bold">Name :</span> {name}
          </p>
          <p className="text-xl">
            <span className="font-bold">Age :</span> {age} years
          </p>
          <p className="text-xl">
            <span className="font-bold">Birthdate :</span> {birthDate}
          </p>
          <p className="text-xl">
            <span className="font-bold">Gender :</span> {biodataType}
          </p>
          <p className="text-xl">
            <span className="font-bold">Height : </span> {selfHeight} cm
          </p>
          <p className="text-xl">
            <span className="font-bold">Weight : </span> {selfWeight} kg
          </p>
          <p className="text-xl">
            <span className="font-bold">occupation : </span> {occupation}
          </p>
          <p className="text-xl">
            <span className="font-bold">Race (skin color) : </span> {race}
          </p>
        </div>
      </div>

      <div className="my-3">
        <button onClick={handleAddtoFavorite} className="btn btn-accent">
          Add to Favorite
        </button>
      </div>

      <div className="mt-4 space-y-2">
        <div className="py-2 px-4 border-2 border-slate-300 rounded-md">
          <div className="text-2xl font-bold my-4">Ethnicity Information</div>
          <p className="text-xl">
            <span className="font-semibold">Fathers name : </span> {fathersName}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Mothers name : </span> {mothersName}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Present Division : </span>{" "}
            {presentDivision}
          </p>
          <p className="text-xl">
            <span className="font-semibold">permanent Division : </span>{" "}
            {permanentDivision}
          </p>
        </div>

        <div className="py-2 px-4 border-2 border-slate-300 rounded-md">
          <div className="text-2xl font-bold my-4">
            Expected partner Qulification
          </div>
          <p className="text-xl">
            <span className="font-semibold">Expected partner age : </span>{" "}
            {partnerAge} years
          </p>
          <p className="text-xl">
            <span className="font-semibold">Expected partner height : </span>{" "}
            {partnerHeight} cm
          </p>
          <p className="text-xl">
            <span className="font-semibold">Expected partner weight : </span>{" "}
            {pratnerWeight} kg
          </p>
        </div>

        <div className="py-2 px-4 border-2 border-slate-300 rounded-md">
          <div className="text-2xl font-bold my-4">Contact Infromation</div>
          <p className="text-xl">
            <span className="font-semibold">Email : </span> {email}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Phone Number : </span> {phoneNumber}
          </p>
        </div>
      </div>
    </div>
  );
}
