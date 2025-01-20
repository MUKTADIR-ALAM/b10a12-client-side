import React, { useState } from "react";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { differenceInYears } from "date-fns";

export default function EditBiodata() {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [startDate, setStartDate] = useState(new Date(2005, 1, 11));

  const heightOptions = (
    <>
      <option value="120-125">120 - 125 cm</option>
      <option value="126-130">126 - 130 cm</option>
      <option value="131-135">131 - 135 cm</option>
      <option value="136-140">136 - 140 cm</option>
      <option value="141-145">141 - 145 cm</option>
      <option value="146-150">146 - 150 cm</option>
      <option value="151-155">151 - 155 cm</option>
      <option value="156-160">156 - 160 cm</option>
      <option value="161-165">161 - 165 cm</option>
      <option value="166-170">166 - 170 cm</option>
      <option value="171-175">171 - 175 cm</option>
      <option value="176-180">176 - 180 cm</option>
      <option value="181-185">181 - 185 cm</option>
      <option value="186-190">186 - 190 cm</option>
      <option value="191-195">191 - 195 cm</option>
      <option value="196-200">196 - 200 cm</option>
    </>
  );

  const weightOptions = (
    <>
      <option value="30-35">30 - 35 kg</option>
      <option value="36-40">36 - 40 kg</option>
      <option value="41-45">41 - 45 kg</option>
      <option value="46-50">46 - 50 kg</option>
      <option value="51-55">51 - 55 kg</option>
      <option value="56-60">56 - 60 kg</option>
      <option value="61-65">61 - 65 kg</option>
      <option value="66-70">66 - 70 kg</option>
      <option value="71-75">71 - 75 kg</option>
      <option value="76-80">76 - 80 kg</option>
      <option value="81-85">81 - 85 kg</option>
      <option value="86-90">86 - 90 kg</option>
      <option value="91-95">91 - 95 kg</option>
      <option value="96-100">96 - 100 kg</option>
      <option value="101-105">101 - 105 kg</option>
      <option value="106-110">106 - 110 kg</option>
      <option value="111-115">111 - 115 kg</option>
      <option value="116-120">116 - 120 kg</option>
    </>
  );

  const onSubmit = async (data) => {
    console.log(data);
    data.birthDate = startDate;
    const age = differenceInYears(new Date(), data.birthDate);
    data.age = age;
    axiosSecure.post('/biodata',data)
    .then((res)=>{
      console.log(res);
    })
  };

  return (
    <div>
      {/* from div start */}

      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* type and name */}
          <div className="flex gap-6">
            <label className="w-full">
              <div className="label">
                <span className="label-text">Biodata type</span>
              </div>
              <select
                {...register("biodataType", { required: true })}
                defaultValue={"Male"}
                className="select select-bordered w-full"
              >
                <option disabled value={"select"}>
                  Select Gender
                </option>
                <option value={"Male"}>Male</option>
                <option value={"Female"}>Female</option>
              </select>
            </label>

            <label className="w-full">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                {...register("name", { required: true })}
                defaultValue={user?.displayName}
                placeholder="Type your name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="flex gap-6">
            <label className="w-full">
              <div className="label">
                <span className="label-text">Profile Image link</span>
              </div>
              <input
                type="text"
                required
                {...register("photoURL", { required: true })}
                defaultValue={user?.photoURL}
                placeholder="Type profile image link"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* self height weight and dateofbirth occupation skin color */}
          <div className="flex gap-2 justify-between">
            {/* height  */}
            <label className="">
              <div className="label">
                <span className="label-text">height</span>
              </div>
              <select
                {...register("selfHeight", { required: true })}
                defaultValue={"151-155"}
                className="select select-bordered w-full"
              >
                <option disabled value={"select"}>
                  select
                </option>
                {heightOptions}
              </select>
            </label>

            <label className="">
              <div className="label">
                <span className="label-text">weight</span>
              </div>
              <select
                {...register("selfWeight", { required: true })}
                defaultValue={"select"}
                className="select select-bordered w-full"
              >
                <option disabled value={"46-50"}>
                  select
                </option>
                {weightOptions}
              </select>
            </label>

            <label className="">
              <div className="label">
                <span className="label-text">Date of birth + Age</span>
              </div>
              <div className="w-full">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </label>

            <label className="">
              <div className="label">
                <span className="label-text">Occupation</span>
              </div>
              <select
                {...register("occupation", { required: true })}
                defaultValue={"job"}
                className="select select-bordered w-full"
              >
                <option disabled value={"select"}>
                select
                </option>
                <option value={"job"}>Job</option>
                <option value={"businessman"}>Businessman</option>
                <option value={"housewife"}>Housewife</option>
              </select>
            </label>
            {/* skin color */}
            <label className="">
              <div className="label">
                <span className="label-text">Race (skin color)</span>
              </div>
              <select
                {...register("race", { required: true })}
                defaultValue={"brown"}
                className="select select-bordered w-full"
              >
                <option disabled value={"select"}>
                  Select Race
                </option>
                <option value={"brown"}>brown</option>
                <option value={"white"}>white</option>
                <option value={"black"}>black</option>
              </select>
            </label>
          </div>

          {/* present divition and paermatnent */}
          <div className="flex gap-4">
            <label className="w-full">
              <div className="label">
                <span className="label-text">Permanent Division name</span>
              </div>
              <select
                {...register("permanentDivision", { required: true })}
                defaultValue={"Dhaka"}
                className="select select-bordered w-full"
              >
                <option disabled value={"select"}>
                  Select Division
                </option>
                <option value={"Dhaka"}>Dhaka</option>
                <option value={"Chattogram"}>Chattogram</option>
                <option value={"Rangpur"}>Rangpur</option>
                <option value={"Barisal"}>Barisal</option>
                <option value={"Khulna"}>Khulna</option>
                <option value={"Mymensingh"}>Mymensingh</option>
                <option value={"Sylhet"}>Sylhet</option>
              </select>
            </label>

            <label className="w-full">
              <div className="label">
                <span className="label-text">Present Division name</span>
              </div>
              <select
                {...register("presentDivision", { required: true })}
                defaultValue={"Dhaka"}
                className="select select-bordered w-full"
              >
                <option disabled value={"select"}>
                  Select Division
                </option>
                <option value={"Dhaka"}>Dhaka</option>
                <option value={"Chattogram"}>Chattogram</option>
                <option value={"Rangpur"}>Rangpur</option>
                <option value={"Barisal"}>Barisal</option>
                <option value={"Khulna"}>Khulna</option>
                <option value={"Mymensingh"}>Mymensingh</option>
                <option value={"Sylhet"}>Sylhet</option>
              </select>
            </label>
          </div>

          
          {/* father and mothers name */}
          <div className="flex gap-4">
            <label className="w-full">
              <div className="label">
                <span className="label-text">Fathers name</span>
              </div>
              <input
                type="text"
                required
                {...register("fathersName", { required: true })}
                placeholder="Type your Fathers name"
                className="input input-bordered w-full"
              />
            </label>

            <label className="w-full">
              <div className="label">
                <span className="label-text">Mothers name</span>
              </div>
              <input
                type="text"
                required
                {...register("mothersName", { required: true })}
                placeholder="Type your Mothers Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* partner height weight and age */}

          <div className="flex gap-2">
            {/* p height */}
            <label className="w-full">
              <div className="label">
                <span className="label-text">Expected Partner height</span>
              </div>
              <select
                {...register("partnerHeight", { required: true })}
                defaultValue={"151-155"}
                className="select select-bordered w-full"
              >
                <option disabled value={"select"}>
                  select
                </option>
                {heightOptions}
              </select>
            </label>

            {/* p weight */}
            <label className="w-full">
              <div className="label">
                <span className="label-text">Expected Partner weight</span>
              </div>
              <select
                {...register("pratnerWeight", { required: true })}
                defaultValue={"select"}
                className="select select-bordered w-full"
              >
                <option disabled value={"46-50"}>
                  select
                </option>
                {weightOptions}
              </select>
            </label>

            <label className="w-full">
              <div className="label">
                <span className="label-text">Expected Partner age (years)</span>
              </div>
              <input
                type="number"
                {...register("partner-age", { required: true })}
                min={5}
                max={100}
                placeholder="Input your age"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* contact email and phone */}
          <div className="flex gap-4">
            <label className="w-full">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                readOnly
                required
                {...register("email", { required: true })}
                value={user?.email}
                className="input input-bordered w-full"
              />
            </label>

            <label className="w-full">
              <div className="label">
                <span className="label-text">Phone number</span>
              </div>
              <input
                type="number"
                required
                {...register("phone-number", { required: true })}
                placeholder="Type your phone number"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <button className="flex items-center bg-slate-400 p-3 rounded-lg">
            Save or update
          </button>
        </form>
      </div>

      {/* from div end */}
    </div>
  );
}
