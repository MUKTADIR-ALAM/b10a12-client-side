import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import BiodataCard from "../Biodatas/BiodataCard";

export default function PremiumCard() {
  const [sortOrder, setSortOrder] = useState("asc"); 
  const axiosPublic = useAxiosPublic();
  const {
    data: premiumBiodatas = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["premiumBiodatas"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/getPremiumBiodata`);
      return res.data;
    },
  });

  if (isLoading) {
    <LoadingSpinner />;
  }


   const sortedBiodatas = [...premiumBiodatas].sort((a, b) => {
    return sortOrder === "asc" ? a.age - b.age : b.age - a.age;
  });

  return (
    <div className="my-4">
        <div className="text-center font-bold text-xl mb-13">------ Premium user biodata ------</div>


{/*  */}

 {/* Dropdown for sorting */}
 <div className="flex justify-end mb-4">
        <label className="mr-2 font-medium">Sort by Age:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border px-2 py-1 rounded-md"
        >
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
{/*  */}



      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4 sm:col-span-1 md:col-span-2 lg:col-span-3 gap-y-6">
        {sortedBiodatas.length ? (
          sortedBiodatas.slice(0, 6).map((biodata) => (
            <BiodataCard key={biodata._id} biodata={biodata} />
          ))
        ) : (
          <div>No result Found</div>
        )}
      </div>
    </div>
  );
}
