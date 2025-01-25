import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import toast from "react-hot-toast";

export default function GotMarried() {
  const { register, handleSubmit, reset } = useForm();
  const {user} = useAuth();

  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    data.marrigeDate = new Date();
    data.selfEmail = user?.email;
    // console.log(data);

    const res = await axiosSecure.post('/successStory',data);
    // console.log(res.data);
    if(res.data.insertedId){
        toast.success('you review added successfully');
    }
    if(res.data.message === 'you already add this') {
        toast.error('you already add your success story');
    }
    // reset();

  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* your and your partner biodata id */}
        <div className="lg:flex gap-6">
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
        <div className="lg:flex gap-6">
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


        {/* image and review */}
        <div className="lg:flex gap-6">

          <label className="w-full">
            <div className="label">
              <span className="label-text">Rating</span>
            </div>
            <input
              type="number"
              {...register("rating", { required: true })}
              placeholder="Rating (1 to 5)"
              className="input input-bordered w-full"
              min={1}
              max={5}
              s
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
