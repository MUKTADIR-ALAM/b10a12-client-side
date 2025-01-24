import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../../Shared/LoadingSpinner/LoadingSpinner";
import Swal from "sweetalert2";

export default function ApprovedContactRequest() {
  const axiosSecure = useAxiosSecure();

  const {
    data: contactRequest = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["contactRequest"],
    queryFn: async () => {
      const { data } = await axiosSecure.get("/getContactRequestAdmin");
      return data;
    },
  });

  const handleRequest = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Approve it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.patch(
          `/approveContactRequestAdmin/${id}`
        );

        if (data?.modifiedCount) {
          Swal.fire({
            title: "Approved!",
            text: "Your request has been approved.",
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
    <div>
      <div className="border-base-content/25 border w-full overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Biodata Id</th>
              <th>Approve contact request</th>
            </tr>
          </thead>
          <tbody>
            {contactRequest.map((item) => {
              return (
                <tr key={item?._id}>
                  <td className="text-nowrap">{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.biodataId}</td>
                  <td className="text-nowrap">
                    {item?.status === "pending" && (
                      <button
                        onClick={() => handleRequest(item?._id)}
                        className="btn"
                      >
                        Approve
                      </button>
                    )}
                    {item?.status === "approved" && "approved"}
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
