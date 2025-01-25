import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import UserContactReqTable from "./UserContactReqTable";

export default function ContactRequest() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const {
    data: contactRequest = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["contactRequest"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/contactRequest/${user?.email}`);
      return data;
    },
  });

  return (
    <div>
      <h1 className="text-center font-bold text-xl mb-4">
        ------ My Contact Request ------
      </h1>

      <div className="border-base-content/25 border w-full overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Biodata Id</th>
              <th>Status</th>
              <th>Mobile Number</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {contactRequest.map((item) => {
              return (
                <UserContactReqTable key={item?._id} item={item} refetch={refetch}/>
              );  
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
