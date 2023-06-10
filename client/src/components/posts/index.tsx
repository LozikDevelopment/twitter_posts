import { StarRounded } from "@mui/icons-material";
import { PostsTop, PostsBox } from "../../styled";
import { Flex, Wrapper } from "./styled";
import {  useQuery } from "react-query";
import { apiHandlers } from "../../api/apiHandlers";
import { Post } from "../../types/Post";
import { PostInfo } from "./postInfo";
import { Fragment } from "react";
import { PostForm } from "./postForm";
import { CircularProgress } from "@mui/material";

export const Posts = () => {
  const { data, isLoading } = useQuery('posts', apiHandlers.posts.list);

  return (
    <PostsBox>
      <PostsTop>
        <h3>Home</h3>

        <StarRounded />
      </PostsTop>

      <PostForm />

      <Wrapper />

      {isLoading && (
        <Flex>
          <CircularProgress />
        </Flex>
      )}

      {data?.map((post: Post) => (
       <Fragment key={post.id}>
        <PostInfo post={post} />

        <Wrapper />
       </Fragment>
      ))}
    </PostsBox>
  );
};