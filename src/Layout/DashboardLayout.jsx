import React from "react";
import {
  FaCalendar,
  FaEye,
  FaHome,
  FaUsers,
} from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { IoIosContacts } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import useAdmin from "../Hooks/useAdmin";

export default function DashboardLayout() {

  const [isAdmin] = useAdmin();

  const normalUser = (
    <>
      {/* <li>
        <NavLink
          to="/"
          className={"flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg"}
        >
          <FaHome></FaHome>
          User Home
        </NavLink>
      </li> */}
      <li>
        <NavLink
          to="/dashboard/edit-biodata"
          className={({ isActive }) => isActive ? 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg bg-slate-200' : 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg'}
        >
          <FaCalendar></FaCalendar>
          Edit Biodata
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/viewBiodata"
          className={({ isActive }) => isActive ? 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg bg-slate-200' : 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg'}
        >
          <FaEye></FaEye>
          View Biodata
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/contactRequest" className={({ isActive }) => isActive ? 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg bg-slate-200' : 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg'}>
        <IoIosContacts />
          Contact Request
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/favouritesBiodata" className={({ isActive }) => isActive ? 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg bg-slate-200' : 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg'}>
        <AiFillLike />
        Favourites Biodata
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className={"flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg"}>
        <TbLogout2 />
          Logout
        </NavLink>
      </li>
    </>
  );


  const admin = (
    <>
      <li>
        <NavLink
          to="/dashboard/adminDashboard"
          className={({ isActive }) => isActive ? 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg bg-slate-200' : 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg'}
        >
          <FaHome></FaHome>
          Admin Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/manageUsers"
          className={({ isActive }) => isActive ? 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg bg-slate-200' : 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg'}
        >
          <FaUsers />
          Manage Users
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/approvedPremium"
          className={({ isActive }) => isActive ? 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg bg-slate-200' : 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg'}
        >
          <MdOutlineWorkspacePremium />
          Approved Premium
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard/approvedContactRequest" className={({ isActive }) => isActive ? 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg bg-slate-200' : 'flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg'}>
        <VscGitPullRequestGoToChanges />
          Approved contact Request
        </NavLink>
      </li>
      <li>
        <NavLink to={'/'} className={"flex gap-2 items-center p-2 hover:bg-slate-200 rounded-lg"}>
        <TbLogout2 />
          Logout
        </NavLink>
      </li>
    </>
  );


  
  return (
    <div className="flex">
      <div className="bg-slate-400 w-64 min-h-screen">
        <ul className="p-4 space-y-4">{isAdmin ? admin :normalUser}</ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}
