import React from "react";
import LoadingSpinner from "../../../../Shared/LoadingSpinner/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";



export default function UserContactReqTable({ item,refetch }) {
  const { biodataId, status, _id } = item;
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const { data: bioData = {}, isPending } = useQuery({
    queryKey: ["bioData", biodataId],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/biodataDetails/${biodataId}`);
      return data;
    },
  });

  

  if (isPending) {
    return (
      <tr>
        <td>loading...</td>
      </tr>
    );
  }

  return (
    <tr>
      <td className="text-nowrap">{bioData?.name}</td>
      <td>{bioData?._id}</td>
      <td>{status}</td>
      <td className="text-nowrap">
        {status === "approved" ? bioData?.phoneNumber : "show after approve"}
      </td>
      <td>{status === "approved" ? bioData?.email : "show after approve"}</td>
      <td>
        <button className="btn" onClick={() => hadleDelete(_id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
