import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

export default function useAdmin() {
  const { user, loading } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/user/admin/${user?.email}`);
      return res.data?.isAdmin;
    },
  });
  return [isAdmin, isAdminLoading];
}
