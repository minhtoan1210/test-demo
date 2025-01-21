/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClient from "../lib/http";

const demoApiRequest = {
  demo: (params: any) => httpClient.get(`/pages?${params}`),
};
export default demoApiRequest;
