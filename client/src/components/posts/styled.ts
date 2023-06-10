import { Box, Input, styled } from "@mui/material";

export const ButtonBox = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
`;

export const Wrapper = styled(Box)`
  height: 13px;
  margin-bottom: 10px;
  background-color: #eeeeee;
`;

export const WrapperEdit = styled(Box)`
  display: flex;
  gap: 30px;
`;

export const IconsBox = styled(Box)`
  display: flex;
  gap: 15px;
`;

export const Textinput = styled(Input)`
  height: 100px;
  width: 100%;
  padding: 20px;
`;

export const EditInput = styled(Input)`
  margin-bottom: 15px;
  width: max-content;
`;

export const Flex = styled(Box)`
  display: flex;
  justify-content: center;
`;

export const FlexColumn = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;