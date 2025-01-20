import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import BiodataCard from "./BiodataCard";

export default function Biodatas() {
  const axiosPublic = useAxiosPublic();
  const {
    data: biodatas = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["biodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get("/biodatas");
      return res.data;
    },
  });

  if (isPending) {
    return <LoadingSpinner />;
  }

  return <div className="grid grid-cols-4 gap-2">
    {biodatas.map(biodata=> <BiodataCard key={biodata._id} biodata={biodata} />)}
  </div>;
}
