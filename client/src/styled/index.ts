import { Box, styled } from "@mui/material";

export const Main = styled(Box)`
  display: flex;
  padding: 10px 20px;
  min-height: 100vh;
  width: 100%;
`;

export const SideBar = styled(Box)`
  width: 25%;
  border-right: 1px solid;
`;

export const SideBarBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const PostsBox = styled(Box)`
  width: 50%;
  border-right: 1px solid;
`;

export const PostsTop = styled(Box)`
  display: flex;
  gap: 100px;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 15px;
  border-bottom: 1px solid;
`;

export const SearchBox = styled(Box)`
  padding: 0 20px;
  width: 25%;
`;