import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoIosContacts } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { CiLogout } from "react-icons/ci";

export default function Dashboard() {
  return (
    <div className="flex h-full">
      <div className="h-full">
        <Sidebar aria-label="Default sidebar example" className="h-full">
          <Sidebar.Items className="bg-slate-500 h-full">
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                <Link
                  to={"/"}
                  className="flex justify-start items-center gap-2"
                >
                  <FaHome />
                  home
                </Link>
              </Sidebar.Item> 
              <Sidebar.Item>
                <Link
                  to={"/"}
                  className="flex justify-start items-center gap-2"
                >
                  <FaEdit />
                  Edit Biodata
                </Link>
              </Sidebar.Item>
              <Sidebar.Item>
                <Link
                  to={"/"}
                  className="flex justify-start items-center gap-2"
                >
                  <FaEye />
                  View Biodata
                </Link>
              </Sidebar.Item>
              <Sidebar.Item>
                <Link
                  to={"/"}
                  className="flex justify-start items-center gap-2"
                >
                  <IoIosContacts />
                  Contact Request
                </Link>
              </Sidebar.Item>
              <Sidebar.Item>
                <Link
                  to={"/"}
                  className="flex justify-start items-center gap-2"
                >
                  <FcLike />
                  Favorite Biodata
                </Link>
              </Sidebar.Item>
              <Sidebar.Item>
                <button className="flex justify-start items-center gap-2">
                  <CiLogout /> Log out
                </button>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div>hello</div>
    </div>
  );
}
