import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function SuccessCounter() {
  return (
    <div className="mx-auto w-full my-8">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 border-2">


        <div className="stat flex items-center gap-8">
          <div className="text-base-content size-4">
            <span className="icon-[tabler--users-group] size-8"></span>
          </div>
          <div>
            <div className="stat-title">Total biodata</div>
            <div className="stat-value">32</div>
          </div>
          {/* <div className="stat-desc">5% ↗︎ than last week</div> */}
        </div>

        <div className="stat flex items-center gap-8">
          <div className="text-base-content size-4">
            <span className="icon-[tabler--users-group] size-8"></span>
          </div>
          <div>
            <div className="stat-title">Total biodata</div>
            <div className="stat-value">32</div>
          </div>
          {/* <div className="stat-desc">5% ↗︎ than last week</div> */}
        </div>
        

        <div className="stat flex items-center gap-8">
          <div className="text-base-content size-4">
            <span className="icon-[tabler--users-group] size-8"></span>
          </div>
          <div>
            <div className="stat-title">Total biodata</div>
            <div className="stat-value">32</div>
          </div>
          {/* <div className="stat-desc">5% ↗︎ than last week</div> */}
        </div>


        <div className="stat flex items-center gap-8">
          <div className="text-base-content size-4">
            <span className="icon-[tabler--users-group] size-8"></span>
          </div>
          <div>
            <div className="stat-title">Total biodata</div>
            <div className="stat-value">32</div>
          </div>
          {/* <div className="stat-desc">5% ↗︎ than last week</div> */}
        </div>

       
      </div>
    </div>
  );
}
