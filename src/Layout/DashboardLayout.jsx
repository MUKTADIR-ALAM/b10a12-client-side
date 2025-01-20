import React from "react";
import { FaAd, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex">
      <div className="bg-orange-500 w-64 min-h-screen">
        <ul className="p-4 space-y-4">
              <li>
                <NavLink to="/" className={'flex gap-2 items-center p-3 hover:bg-slate-200'}>
                  <FaHome></FaHome>
                  User Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/edit-biodata" className={'flex gap-2 items-center'}>
                  <FaCalendar></FaCalendar>
                  Edit Biodata
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart" className={'flex gap-2 items-center'}>
                  <FaShoppingCart></FaShoppingCart>
                  My Cart 
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review" className={'flex gap-2 items-center'}>
                  <FaAd></FaAd>
                  Add a Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/history" className={'flex gap-2 items-center'}>
                  <FaList></FaList>
                  My Bookings
                </NavLink>
              </li>
         
          
        </ul>
      </div>
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
}
