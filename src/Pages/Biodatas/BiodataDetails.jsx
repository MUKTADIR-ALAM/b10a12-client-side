import React from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";

export default function BiodataDetails() {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { isPending, data: details={} } = useQuery({
    queryKey: ["biodataDetails"],
    queryFn: async () => {
      const res = await axiosSecure.get(`biodataDetails/${id}`);
      return res.data;
    },
  });
  console.log(details);

  const {
    _id,
    biodataType,
    name,
    photoURL,
    occupation,
    presentDivision,
    age,
    BiodataId,
  } = details || {};

  if(isPending){
    return <LoadingSpinner/>
  }
  return (
    <div>details</div>
  );
}
