import { useQueryClient } from "react-query";
import { usePostMutations } from "../../../hooks/usePostMutations";
import { useState } from "react";
import { Post } from "../../../types/Post";

interface Options {
 post: Post,
}

export const usePostInfo = (options: Options) => {
  const { post } = options;
  const {
    title,
    text,
    image,
  } = post;

  const [isEditing, setisEditing] = useState(false);
  const [changedTitle, setChangetTitle] = useState(title);
  const [changedText, setChangedText] = useState(text);
  const [removedImage, setRemovedImage] = useState(image);

  const queryClient = useQueryClient();
  const { deletePost, updatePost } = usePostMutations();

  const handleRemovePost = (id: number) => {
    deletePost.mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    });
  };

  const handleUpdatePost = (id: number) => {
    if (title === changedTitle && text === changedText && removedImage) {
      setisEditing(false);

      return;
    }

    const updatedPost: Partial<Post> = {
      title: changedTitle,
      text: changedText,
      image: removedImage,
    }

    updatePost.mutate(({ id, post: updatedPost }), {
      onSuccess: () => {
        queryClient.invalidateQueries('posts');
      },
    });
      setisEditing(false);
  };

  return {
    changedTitle,
    changedText,
    removedImage,
    isEditing,
    setChangetTitle,
    setChangedText,
    setRemovedImage,
    setisEditing,
    handleRemovePost,
    handleUpdatePost,
  };
};