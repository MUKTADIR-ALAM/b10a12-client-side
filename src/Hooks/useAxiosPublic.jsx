import axios from "axios";

const axiosSecure = axios.create({
  baseURL: "https://pair-up-server.vercel.app",
});

export default function useAxiosPublic() {
  return axiosSecure;
}
