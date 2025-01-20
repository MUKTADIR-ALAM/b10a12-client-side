import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function BiodataCard({ biodata }) {
  console.log(biodata);
  const {
    _id,
    biodataType,
    name,
    photoURL,
    occupation,
    presentDivision,
    age,
    BiodataId,
  } = biodata || {};
  console.log(BiodataId);
  return (
    
    <div className="bg-gray-300 hover:bg-gray-900 hover:text-white transition duration-300 max-w-xs rounded overflow-hidden shadow-lg">
      <div className="py-4 px-8">
        <div>
          <img
            src={photoURL}
            alt="Author"
            className="rounded-full h-12 w-12 mb-4"
          />
          <p>Biodata ID : {BiodataId}</p>
        </div>
        <a href="#">
          <h4 className="text-lg mb-3 font-semibold">
            Biodata Type : {biodataType}
          </h4>
        </a>
        <p className="mb-2 text-sm text-gray-600">
          Permanent Division : {presentDivision}
        </p>
        <p>Age: {age} years</p>
        <p>Occupation: {occupation}</p>
        <div className="my-5">
          <Link
            to={`/biodataDetails/${_id}`}
            className=" rounded-md p-3 bg-slate-600"
          >
            View profile
          </Link>
        </div>
      </div>
    </div>
  );
}
