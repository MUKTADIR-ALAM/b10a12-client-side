import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import useAdmin from "../../Hooks/useAdmin";
import { IoHeartHalfOutline } from "react-icons/io5";
import { useState } from "react";


export default function NavigationBar() {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();

  
  const links = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/biodatas"}>Biodatas</Link>
      </li>
      {user && isAdmin && (
        <li>
          <Link to={"/dashboard/adminDashboard"}>Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to={"/dashboard/edit-biodata"}>Dashboard</Link>
        </li>
      )}
      <li>
        <a href="#footer">About Us</a>
      </li>
      <li>
        <a href="#footer">Contact Us</a>
      </li>
    </>
  );
  return (
    <nav className="navbar rounded-box flex w-full items-center justify-between gap-2 shadow sticky top-0 z-50 px-13">
      <div className="navbar-start max-md:w-1/4">
        <a
          className="flex items-center link text-base-content link-neutral text-xl font-semibold no-underline"
          
        >
         <IoHeartHalfOutline size={40} /> PairUp
        </a>
      </div>
      <div className="navbar-center max-md:hidden">
        <ul className="menu menu-horizontal p-0 font-medium">{links}</ul>
      </div>
      <div className="navbar-end items-center gap-4">
        <div className="dropdown relative inline-flex md:hidden rtl:[--placement:bottom-end]">
          <button
            id="dropdown-default"
            type="button"
            className="dropdown-toggle btn btn-text btn-secondary btn-square"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Dropdown"
          >
            <span className="icon-[tabler--menu-2] dropdown-open:hidden size-5"></span>
            <span className="icon-[tabler--x] dropdown-open:block hidden size-5"></span>
          </button>
          <ul
            className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 space-y-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-default"
          >
            {links}
          </ul>
        </div>

        {user ? (
          <div className="flex items-center gap-2">
            <div className="dropdown relative inline-flex [--auto-close:inside] [--offset:8] [--placement:bottom-end]">
              <button
                id="dropdown-scrollable"
                type="button"
                className="dropdown-toggle flex items-center"
                aria-haspopup="menu"
                aria-expanded="false"
                aria-label="Dropdown"
              >
                <div className="avatar">
                  <div className="size-9.5 rounded-full">
                    {user && <img src={`${user?.photoURL}`} referrerPolicy="no-referrer" alt="avatar 1" />}
                  </div>
                </div>
              </button>
              <ul
                className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60 z-30"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="dropdown-avatar"
              >
                <li className="dropdown-header gap-2">
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      {user && (
                        <img
                          src={user?.photoURL}
                          referrerPolicy="no-referrer"
                          alt="avatar"
                        />
                      )}
                    </div>
                  </div>
                  <div>
                    <h6 className="text-base-content text-base font-semibold">
                      {user?.displayName}
                    </h6>
                  </div>
                </li>
                <li className="gap-2">
                  <a
                    onClick={logOut}
                    className="btn btn-error btn-soft btn-block"
                    href="#"
                  >
                    <span className="icon-[tabler--logout]"></span>
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
            <button onClick={logOut} className="btn">logout</button>
          </div>
        ) : (
          <div className="flex md:order-2 gap-2">
            <Link to={"/signup"}>
              <button className="btn btn-primary">SignUp</button>
            </Link>
            <Link to={"/login"}>
              <button className="btn btn-primary">login</button>
            </Link>
          </div>
        )}
      </div>
    </nav>



  );
}
