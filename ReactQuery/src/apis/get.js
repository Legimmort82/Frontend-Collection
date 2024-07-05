import { useQuery ,UseQueryOptions} from "@tanstack/react-query";
import { apiClient } from "../instance";

/**
 * login user with credentials
 * @param {UseQueryOptions} options
 * @returns UseQueryResult
 */
const useGoogle = (link,options = {}) => {
  return useQuery({
    queryKey: ["google"],
    queryFn: () => apiClient.get(`/api/google-login${link}`),
    ...options,
  });
};

export default useGoogle;
