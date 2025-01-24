import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import Swal from "sweetalert2";

export default function FavouritesBiodata() {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const {
    data: favoritesList = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["favoritesList"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/favoritesList/${user?.email}`);
      return data;
    },
  });

  const handleDelete = async (email) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const { data } = await axiosSecure.delete(`/favoritesList/${email}`);
        if (data?.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
        refetch();
      }
    });
  };

  console.log(favoritesList);

  return (
    <div>
      <h1 className="text-center font-bold text-xl mb-5">
        ----- Favorites Biodata List -----
      </h1>
      <div className="w-full overflow-x-auto border-base-content/25 border">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Biodata Id</th>
              <th>Permanent Address</th>
              <th>Occupation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td className="text-nowrap">John Doe</td>
              <td>johndoe@example.com</td>
              <td>
                hallo
              </td>
              <td className="text-nowrap">March 1, 2024</td>
              <td>
                hello
              </td>
            </tr> */}

            {favoritesList.map((item) => {
              return (
                <tr key={item?._id}>
                  <td className="text-nowrap">{item?.name}</td>
                  <td>{item?.BiodataId}</td>
                  <td>{item?.PermanenAddress}</td>
                  <td className="text-nowrap">{item?.occupation}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(item?.ownerEmail)}
                      className="btn"
                    >
                      Delete
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
