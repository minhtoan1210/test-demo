import { useQuery } from "@tanstack/react-query";
import demoApiRequest from "../apiRequests/demo";
export const useDemoQuery = (params: any) => {
  return useQuery({
    queryKey: ["account-me", params],
    queryFn: () => demoApiRequest.demo(params),
  });
};
