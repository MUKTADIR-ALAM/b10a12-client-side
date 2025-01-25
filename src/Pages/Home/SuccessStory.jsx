import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import { format } from "date-fns";
import { FaStar, FaRegStar } from "react-icons/fa";

export default function SuccessStory() {
  const axiosPublic = useAxiosPublic();
  const { data: successStory, isLoading } = useQuery({
    queryKey: ["successStory"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/getSuccessStory");
      return data;
    },
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="">
      <p className="text-center font-bold text-xl my-5">
        ------ Success Story (review) ------
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-8">
        {/* <div className="card image-full sm:max-w-sm">
          <figure>
            <img
              src="https://cdn.flyonui.com/fy-assets/components/card/image-5.png"
              alt="overlay image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-2.5 text-white">Marketing</h2>
            <p className="text-white">
              Boost your brand's visibility and engagement through targeted
              marketing strategies.
            </p>
          </div>
        </div> */}

        {successStory.map((item) => {
          return (
            <div key={item?._id} className="card image-full sm:max-w-sm">
              <figure>
                <img src={item?.marrigeImageLink} alt="overlay image" />
              </figure>
              <div className="card-body">
                <div className="flex items-center gap-2">
                  <h2 className="card-title mb-2.5 text-white">
                    {format(new Date(item?.marrigeDate), "yyyy-MM-dd")}
                  </h2>
                  <div className="flex space-x-1 text-yellow-500">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < item?.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                    )}
                  </div>
                </div>
                <p className="text-white">{item?.review.split(0, 5)}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
