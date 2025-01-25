import React from "react";
import { FaFemale, FaMale } from "react-icons/fa";
import { MdWorkspacePremium } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

export default function SuccessCounter() {
  return (
    <div className="mx-auto w-fit my-8">
      <div>
        <div className="stats">
          <div className="stat">
            <div className="stat-figure text-base-content size-4">
              <span className="icon-[tabler--users-group] size-8"></span>
            </div>
            <div className="stat-title">Total biodata</div>
            <div className="stat-value">32</div>
            {/* <div className="stat-desc">5% ↗︎ than last week</div> */}
          </div>

          <div className="stat">
            <div className="stat-figure text-base-content size-4">
              {/* <span className="icon-[tabler--users-group] size-8"></span> */}
              <FaMale size={30} />
            </div>
            <div className="stat-title">Male Biodata</div>
            <div className="stat-value">20</div>
            {/* <div className="stat-desc">12% increase this month</div> */}
          </div>

          <div className="stat">
            <div className="stat-figure text-base-content size-4">
              {/* <span className="icon-[tabler--users-group] size-8"></span> */}
              <FaFemale size={30} />
            </div>
            <div className="stat-title">Female Biodata</div>
            <div className="stat-value">10</div>
            {/* <div className="stat-desc">12% increase this month</div> */}
          </div>

          <div className="stat">
            <div className="stat-figure text-base-content size-4">
              {/* <span className="icon-[tabler--users-group] size-8"></span> */}
              <MdWorkspacePremium size={30} />
            </div>
            <div className="stat-title">Premiun Biodata</div>
            <div className="stat-value">10</div>
            {/* <div className="stat-desc">12% increase this month</div> */}
          </div>

          <div className="stat">
            <div className="stat-figure text-base-content size-4">
              {/* <span className="icon-[tabler--users-group] size-8"></span> */}
              <RiMoneyDollarCircleFill size={30} />
            </div>
            <div className="stat-title">Revenue</div>
            <div className="stat-value">320 $</div>
            {/* <div className="stat-desc">12% increase this month</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
