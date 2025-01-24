import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../../Shared/LoadingSpinner/LoadingSpinner";
import { FaFemale, FaMale } from "react-icons/fa";


export default function AdminDashboard() {
  const axiosSecure = useAxiosSecure();
  const { data: adiminStat, isLoading } = useQuery({
    queryKey: ["adminStat"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/admin-stats");
      return data;
    },
  });

  const { users, maleBiodataCount, femaleBiodataCount } = adiminStat || {};
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className="stats">
        <div className="stat">
          <div className="stat-figure text-base-content size-8">
          <span className="icon-[tabler--users-group] size-8"></span>
          </div>
          <div className="stat-title">Total biodata</div>
          <div className="stat-value">{users}</div>
          {/* <div className="stat-desc">5% ↗︎ than last week</div> */}
        </div>

        <div className="stat">
          <div className="stat-figure text-base-content size-8">
            {/* <span className="icon-[tabler--users-group] size-8"></span> */}
            <FaMale size={30} />
          </div>
          <div className="stat-title">Male Biodata</div>
          <div className="stat-value">{maleBiodataCount}</div>
          {/* <div className="stat-desc">12% increase this month</div> */}
        </div>


        <div className="stat">
          <div className="stat-figure text-base-content size-8">
            {/* <span className="icon-[tabler--users-group] size-8"></span> */}
            <FaFemale size={30} />
          </div>
          <div className="stat-title">Female Biodata</div>
          <div className="stat-value">{femaleBiodataCount}</div>
          {/* <div className="stat-desc">12% increase this month</div> */}
        </div>

        
      </div>
    </div>
  );
}
