import React from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";

export default function SuccessStory() {
  const axiosPublic = useAxiosPublic();
  const { data: successStory, isLoading } = useQuery({
    queryKey: ["successStory"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/getSuccessStory");
      return data;
    },
  });
  console.log(successStory);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="">
      <p className="text-center font-bold text-xl my-5">
        ------ Success Story (review) ------
      </p>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-8">
        <div className="card image-full sm:max-w-sm">
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
        </div>

        <div className="card image-full sm:max-w-sm">
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
        </div>

        <div className="card image-full sm:max-w-sm">
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
        </div>
      </div>
    </div>
  );
}
