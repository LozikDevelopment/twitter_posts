import axios, { AxiosRequestConfig } from "axios";

function createHttpClient() {
  return axios.create({
    baseURL: "https://twitter-posts.onrender.com/",
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