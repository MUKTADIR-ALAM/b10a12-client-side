import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import LoadingSpinner from "../../../../Shared/LoadingSpinner/LoadingSpinner";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";

export default function ManageUsers() {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: allUsers = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["allUsers", user?.email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/allUsers/${user?.email}`);
      return data;
    },
  });

  const makeAdmin = async (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make Admin!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // console.log(email)

        const { data } = await axiosSecure.patch(`/makeAdmin/${email}`);
        if (data?.modifiedCount) {
          Swal.fire({
            title: "Adimin!",
            text: "The user is now Admin",
            icon: "success",
          });
        }
        refetch();
      }
    });
  };

  const makePremium = async (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make premium!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // console.log(email)

        const { data } = await axiosSecure.patch(`/makePremium/${email}`);
        if (data?.modifiedCount) {
          Swal.fire({
            title: "premium!",
            text: "The user is now Premium",
            icon: "success",
          });
        }
        refetch();
      }
    });
  };

  if (isPending) {
    return <LoadingSpinner />;
  }
  return (
    <div className="border-base-content/25 w-full overflow-x-auto border">
      <table className="table">
        <thead>
          <tr>
            <th>User name</th>
            <th>User email</th>
            <th>Make admin</th>
            <th>Make premium</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td className="text-nowrap">John Doe</td>
            <td>johndoe@example.com</td>
            <td>
              <span className="badge badge-soft badge-success text-xs">
                Professional
              </span>
            </td>
            <td className="text-nowrap">March 1, 2024</td>
          </tr> */}

          {allUsers.map((user) => {
            return (
              <tr key={user?._id}>
                <td className="text-nowrap">{user?.name}</td>
                <td>{user?.email}</td>
                <td>
                  {user?.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => makeAdmin(user?.email)}
                      className="btn btn-accent"
                    >
                      <MdAdminPanelSettings />
                    </button>
                  )}
                </td>
                <td className="text-nowrap">
                  {/* {user?.status === "premium" ? (
                    "premium user"
                  ) : (
                    <button
                      onClick={() => makePremium(user?.email)}
                      className="btn btn-success"
                    >
                      <FaAward />
                    </button>
                  )} */}
                  {user?.status === "premium" && "premium user"}
                  {user?.status === "normal" && "didnot apply"}
                  {user?.status === "pending" && (
                    <button
                      onClick={() => makePremium(user?.email)}
                      className="btn btn-success"
                    >
                      <FaAward />
                    </button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
