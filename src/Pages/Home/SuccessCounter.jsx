import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { GiLovers } from "react-icons/gi";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

export default function SuccessCounter() {
  const axiosPublic = useAxiosPublic();
  const { data: adiminStat, isLoading } = useQuery({
    queryKey: ["statsData"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/admin-stats");
      return data;
    },
  });

  const {
    totalBiodata,
    maleBiodataCount,
    femaleBiodataCount,
    permiumBiodataCount,
    successMarriedCount,
  } = adiminStat || {};

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="mx-auto w-full my-8">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 border-2">
        <div className="stat flex items-center gap-8">
          <div className="text-base-content size-4">
            <span className="icon-[tabler--users-group] size-8"></span>
          </div>
          <div>
            <div className="stat-title">Total biodata</div>
            <div className="stat-value">{totalBiodata}</div>
          </div>
          {/* <div className="stat-desc">5% ↗︎ than last week</div> */}
        </div>

        <div className="stat flex items-center gap-8">
          <div className="text-base-content size-4">
            <FaMale size={30} />
          </div>
          <div>
            <div className="stat-title">Male Biodata</div>
            <div className="stat-value">{maleBiodataCount}</div>
          </div>
          {/* <div className="stat-desc">5% ↗︎ than last week</div> */}
        </div>

        <div className="stat flex items-center gap-8">
          <div className="text-base-content size-4">
            <FaFemale size={30} />
          </div>
          <div>
            <div className="stat-title">Female biodata</div>
            <div className="stat-value">{femaleBiodataCount}</div>
          </div>
          {/* <div className="stat-desc">5% ↗︎ than last week</div> */}
        </div>

        <div className="stat flex items-center gap-8">
          <div className="text-base-content size-4">
            <GiLovers size={30} />
          </div>
          <div>
            <div className="stat-title">Complete Marrige</div>
            <div className="stat-value">{successMarriedCount}</div>
          </div>
          {/* <div className="stat-desc">5% ↗︎ than last week</div> */}
        </div>
      </div>
    </div>
  );
}
