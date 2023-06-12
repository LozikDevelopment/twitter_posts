import { StarRounded } from "@mui/icons-material";
import { PostsTop, PostsBox } from "../../styled";
import { Flex, Wrapper } from "./styled";
import {  useQuery } from "react-query";
import { apiHandlers } from "../../api/apiHandlers";
import { Post } from "../../types/Post";
import { PostInfo } from "./postInfo";
import { FC, Fragment, useMemo } from "react";
import { PostForm } from "./postForm";
import { CircularProgress } from "@mui/material";
import { findPosts } from "../../helpers";

interface Props {
  value: string,
}

export const Posts: FC<Props> = (props) => {
  const { value } = props;
  const { data, isLoading } = useQuery('posts', apiHandlers.posts.list);

  const filteredPosts = useMemo(() => findPosts(data, value), [data, value]);

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

      {filteredPosts?.map((post: Post) => (
       <Fragment key={post.id}>
        <PostInfo post={post} />

        <Wrapper />
       </Fragment>
      ))}
    </PostsBox>
  );
};