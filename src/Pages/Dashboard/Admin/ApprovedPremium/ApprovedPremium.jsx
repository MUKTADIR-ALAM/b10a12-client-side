import React from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

export default function ApprovedPremium() {
  const axiosSecure = useAxiosSecure();

  const {
    data: appliedUsers = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["appliedUsers"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/get-applied-biodata");
      return data;
    },
  });

  const handleBiodataPremium = (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make biodata premium!",
    }).then(async (result) => {
      if (result.isConfirmed) {

        const { data } = await axiosSecure.patch(`/makeBiodataPremium/${email}`);
        if (data?.modifiedCount) {
          Swal.fire({
            title: "premium!",
            text: "The biodata is now Premium",
            icon: "success",
          });
        }
        refetch();
      }
    });
  };

  return (
    <div>
      <div className="border-base-content/25 border w-full overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Biodata Id</th>
              <th>Make Premium</th>
            </tr>
          </thead>
          <tbody>
            {appliedUsers.map((user) => {
              return (
                <tr key={user?._id}>
                  <td className="text-nowrap">{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?._id}</td>
                  <td className="text-nowrap">
                    <button
                      onClick={() => handleBiodataPremium(user?.email)}
                      className="btn"
                    >
                      Make premium
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
