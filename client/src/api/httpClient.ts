import axios, { AxiosRequestConfig } from "axios";

function createHttpClient() {
  return axios.create({
    baseURL: "http://localhost:3000",
  });
}

export const httpClient = createHttpClient();

export async function makeHttpRequest(config: AxiosRequestConfig) {
  const { headers } = config;
  const headersToSend = { ...headers };

  const response = await httpClient.request({
    headers: {
      ...headersToSend,
    },
    ...config,
  });

  return response.data;
}