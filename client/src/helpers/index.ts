import { Post } from "../types/Post";

export const findPosts = (posts: Post[] | [], value: string) => {
  const lowerValue = value.toLowerCase();

  return posts?.filter(post => (
    post.title.toLowerCase().includes(lowerValue) 
    || post.text.toLowerCase().includes(lowerValue)
  ));
}