import { makeHttpRequest } from "./httpClient";
import { Post } from "../types/Post";

export const getData = (url: string )=> {
  return makeHttpRequest({ url, method: 'GET' })
};

export const postData = (url: string, config: Partial<Post>) => {
  return makeHttpRequest({ url, method: 'POST', data: config})
};

export const patchData = (url: string, config: Partial<Post>) => {
  return makeHttpRequest({ url, method: 'PATCH', data: config })
};

export const deleteData = (url: string ) => {
  return makeHttpRequest({ url, method: 'DELETE' })
};
