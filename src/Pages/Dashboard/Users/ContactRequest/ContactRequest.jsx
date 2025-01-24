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
  console.log(contactRequest);

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
            {/* <tr>
              <td className="text-nowrap">John Doe</td>
              <td>johndoe@example.com</td>
              <td>
                <span className="badge badge-soft badge-success text-xs">
                  Professional
                </span>
              </td>
              <td className="text-nowrap">March 1, 2024</td>
              <td>hello</td>
              <td>hello</td>
            </tr> */}

            {contactRequest.map((item) => {
              return (
                <UserContactReqTable key={item?._id} item={item}/>
              );  
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
