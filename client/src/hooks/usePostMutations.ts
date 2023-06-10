import { useMutation } from "react-query";
import { apiHandlers } from "../api/apiHandlers";

export const usePostMutations = () => {
  const createPost = useMutation(apiHandlers.posts.create);
    const updatePost = useMutation(apiHandlers.posts.update);
  const deletePost = useMutation(apiHandlers.posts.delete);
  
  return { createPost, updatePost, deletePost };
};