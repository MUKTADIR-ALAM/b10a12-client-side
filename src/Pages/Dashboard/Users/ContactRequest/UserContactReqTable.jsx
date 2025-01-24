import React from "react";

export default function UserContactReqTable({item}) {
    const {_id,biodataId,email,name}  = item; 
  return (
    <tr key={item?._id}>
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
    </tr>
  );
}
