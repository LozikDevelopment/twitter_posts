import { useState } from "react";
import { useQueryClient } from "react-query";
import { usePostMutations } from "../../../hooks/usePostMutations";
import { Post } from "../../../types/Post";

export const useForm = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const queryClient = useQueryClient();
  const { createPost } = usePostMutations();
    
  const handleAddPost = () => {
    if (!author || !text || !title) {
      return;
    }

    const data = {
      author,
      title,
      text,
      image,
    };
    
    createPost.mutate(data, {
      onSuccess: (newPost) => {
        queryClient.setQueryData<Post[]>('posts', (oldPosts = []) => {
          return [newPost, ...oldPosts];
        });
      },
    });

    setText("");
    setTitle("");
    setImage("");
  };

  return {
    author,
    title,
    text,
    image,
    setAuthor,
    setTitle,
    setText,
    setImage,
    handleAddPost,
  };
}