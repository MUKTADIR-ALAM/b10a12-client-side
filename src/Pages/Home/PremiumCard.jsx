import { useQuery } from "@tanstack/react-query";
import React from "react";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import BiodataCard from "../Biodatas/BiodataCard";

export default function PremiumCard() {
  const axiosPublic = useAxiosPublic();
  const {
    data: premiumBiodatas = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["premiumBiodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/getPremiumBiodata`);
      return res.data;
    },
  });

  if (isPending) {
    <LoadingSpinner />;
  }

  return (
    <div className="my-4">
        <div className="text-center font-bold text-xl mb-13">------ Premium Biodata ------</div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4 sm:col-span-1 md:col-span-2 lg:col-span-3 gap-y-6">
        {premiumBiodatas.length ? (
          premiumBiodatas.map((biodata) => (
            <BiodataCard key={biodata._id} biodata={biodata} />
          ))
        ) : (
          <div>No result Found</div>
        )}
      </div>
    </div>
  );
}
