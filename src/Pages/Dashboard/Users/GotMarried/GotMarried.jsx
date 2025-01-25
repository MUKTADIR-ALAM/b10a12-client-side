import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

export default function GotMarried() {
  const { register, handleSubmit, reset } = useForm();

  

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* your and your partner biodata id */}
        <div className="flex gap-6">
          <label className="w-full">
            <div className="label">
              <span className="label-text">Self Biodata id</span>
            </div>
            <input
              type="text"
              {...register("selfBiodataId", { required: true })}
              placeholder="Your Biodata ID"
              className="input input-bordered w-full"
            />
          </label>
          <label className="w-full">
            <div className="label">
              <span className="label-text">Partner Biodata id</span>
            </div>
            <input
              type="text"
              {...register("partnerBiodataId", { required: true })}
              placeholder="Your Partner Biodata id"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        {/* image and review */}
        <div className="flex gap-6">
          <label className="w-full">
            <div className="label">
              <span className="label-text">Couple Image Link</span>
            </div>
            <input
              type="text"
              {...register("marrigeImageLink", { required: true })}
              placeholder="Couple Image Link"
              className="input input-bordered w-full"
            />
          </label>

          <label className="w-full">
            <div className="label">
              <span className="label-text">Success Story Review</span>
            </div>
            <input
              type="text"
              {...register("review", { required: true })}
              placeholder="Success Story Review"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <button className="flex items-center bg-slate-400 p-3 rounded-lg">
          submit
        </button>
      </form>
    </div>
  );
}
