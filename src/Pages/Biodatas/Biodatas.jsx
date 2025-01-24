import React, { useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import BiodataCard from "./BiodataCard";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function Biodatas() {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const ageOptions = (
    <>
      <option value={"18"}>18</option>
      <option value={"19"}>19</option>
      <option value={"20"}>20</option>
      <option value={"21"}>21</option>
      <option value={"22"}>22</option>
      <option value={"23"}>23</option>
      <option value={"24"}>24</option>
      <option value={"25"}>25</option>
      <option value={"26"}>26</option>
      <option value={"27"}>27</option>
      <option value={"28"}>28</option>
      <option value={"29"}>29</option>
      <option value={"30"}>30</option>
      <option value={"31"}>31</option>
      <option value={"32"}>32</option>
      <option value={"33"}>33</option>
      <option value={"34"}>34</option>
      <option value={"35"}>35</option>
      <option value={"36"}>36</option>
      <option value={"37"}>37</option>
      <option value={"38"}>38</option>
      <option value={"39"}>39</option>
      <option value={"40"}>40</option>
      <option value={"41"}>41</option>
      <option value={"42"}>42</option>
      <option value={"43"}>43</option>
      <option value={"44"}>44</option>
      <option value={"45"}>45</option>
      <option value={"46"}>46</option>
      <option value={"47"}>47</option>
      <option value={"48"}>48</option>
      <option value={"49"}>49</option>
      <option value={"50"}>50</option>
      <option value={"51"}>51</option>
      <option value={"52"}>52</option>
      <option value={"53"}>53</option>
      <option value={"54"}>54</option>
      <option value={"55"}>55</option>
      <option value={"56"}>56</option>
      <option value={"57"}>57</option>
      <option value={"58"}>58</option>
      <option value={"59"}>59</option>
      <option value={"60"}>60</option>
      <option value={"61"}>61</option>
      <option value={"62"}>62</option>
      <option value={"63"}>63</option>
      <option value={"64"}>64</option>
      <option value={"65"}>65</option>
      <option value={"66"}>66</option>
      <option value={"67"}>67</option>
      <option value={"68"}>68</option>
      <option value={"69"}>69</option>
      <option value={"70"}>70</option>
      <option value={"71"}>71</option>
      <option value={"72"}>72</option>
      <option value={"73"}>73</option>
      <option value={"74"}>74</option>
      <option value={"75"}>75</option>
      <option value={"76"}>76</option>
      <option value={"77"}>77</option>
      <option value={"78"}>78</option>
      <option value={"79"}>79</option>
      <option value={"80"}>80</option>
    </>
  );

  const [gender, setGender] = useState("");
  const [location, setLoacation] = useState("");
  const [fromAge, setFromAge] = useState("");
  const [toAge, setToAge] = useState("");

  const {
    data: biodatas = [],
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["biodatas", gender, location, fromAge, toAge],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/biodatas?gender=${gender}&location=${location}&fromAge=${fromAge}&toAge=${toAge}`
      );
      return res.data;
    },
  });

  const onSubmit = async (data) => {
    // console.log(data);
    const fromAge = parseInt(data.from);
    const toAge = parseInt(data.to);
    if (fromAge >= toAge) {
      return toast.error("incorrect age difference");
    }
    setFromAge(fromAge);
    setToAge(toAge);
  };

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      <div className="space-y-4 col-span-1 mt-4 h-fit mr-3 border p-3">
        {/* flilter by gender */}
        <div>
          <div className="label">
            <span className="label-text font-semibold text-xl">
              Select Gender
            </span>
          </div>
          <select
            name="category"
            id="category"
            className="border p-3 rounded-lg"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          >
            <option value="">Defualt (reset)</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* filter by location */}
        <div className="w-fit">
          <div className="label">
            <span className="label-text font-semibold text-xl">
              Select location
            </span>
          </div>
          <select
            onChange={(e) => setLoacation(e.target.value)}
            value={location}
            className="border p-3 rounded-lg"
          >
            <option value={""}>Defualt (reset)</option>
            <option value={"Dhaka"}>Dhaka</option>
            <option value={"Chattogram"}>Chattogram</option>
            <option value={"Rangpur"}>Rangpur</option>
            <option value={"Barisal"}>Barisal</option>
            <option value={"Khulna"}>Khulna</option>
            <option value={"Mymensingh"}>Mymensingh</option>
            <option value={"Sylhet"}>Sylhet</option>
          </select>
        </div>

        {/* filter by age */}
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="label">
              <span className="label-text font-semibold text-xl">
                Filter by age
              </span>
            </div>

            <div className="space-x-3">
              <select
                {...register("from", { required: true })}
                className="border py-2 px-4"
              >
                {/* <option value={""}>From</option> */}
                {ageOptions}
              </select>
              <span>to</span>
              <select
                {...register("to", { required: true })}
                className="border py-2 px-4"
                defaultValue={'40'}
              >
                {/* <option value={""}>To</option> */}
                {ageOptions}
              </select>
              <div className="m-2">
                <button className="btn">Filter by age</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 my-4 sm:col-span-1 md:col-span-2 lg:col-span-3">
        {biodatas.length ? (
          biodatas.map((biodata) => (
            <BiodataCard key={biodata._id} biodata={biodata} />
          ))
        ) : (
          <div>No result Found</div>
        )}
      </div>
    </div>
  );
}
