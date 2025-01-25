import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../../Shared/LoadingSpinner/LoadingSpinner";
import { FaFemale, FaMale } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";


export default function AdminDashboard() {
  const axiosSecure = useAxiosSecure();
  const { data: adiminStat, isLoading } = useQuery({
    queryKey: ["adminStat"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/admin-stats");
      return data;
    },
  });

  const { users, maleBiodataCount, femaleBiodataCount,permiumBiodataCount,revenue } = adiminStat || {};
  console.log(permiumBiodataCount,revenue);
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <div>
      <div className="stats">
        <div className="stat">
          <div className="stat-figure text-base-content size-4">
          <span className="icon-[tabler--users-group] size-8"></span>
          </div>
          <div className="stat-title">Total biodata</div>
          <div className="stat-value">{users}</div>
          {/* <div className="stat-desc">5% ↗︎ than last week</div> */}
        </div>

        <div className="stat">
          <div className="stat-figure text-base-content size-4">
            {/* <span className="icon-[tabler--users-group] size-8"></span> */}
            <FaMale size={30} />
          </div>
          <div className="stat-title">Male Biodata</div>
          <div className="stat-value">{maleBiodataCount}</div>
          {/* <div className="stat-desc">12% increase this month</div> */}
        </div>


        <div className="stat">
          <div className="stat-figure text-base-content size-4">
            {/* <span className="icon-[tabler--users-group] size-8"></span> */}
            <FaFemale size={30} />
          </div>
          <div className="stat-title">Female Biodata</div>
          <div className="stat-value">{femaleBiodataCount}</div>
          {/* <div className="stat-desc">12% increase this month</div> */}
        </div>


        <div className="stat">
          <div className="stat-figure text-base-content size-4">
            {/* <span className="icon-[tabler--users-group] size-8"></span> */}
            <MdWorkspacePremium size={30} />
          </div>
          <div className="stat-title">Premiun Biodata</div>
          <div className="stat-value">{permiumBiodataCount}</div>
          {/* <div className="stat-desc">12% increase this month</div> */}
        </div>


        <div className="stat">
          <div className="stat-figure text-base-content size-4">
            {/* <span className="icon-[tabler--users-group] size-8"></span> */}
            <RiMoneyDollarCircleFill size={30} />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{revenue} $</div>
          {/* <div className="stat-desc">12% increase this month</div> */}
        </div>

        
      </div>
    </div>
  );
}
