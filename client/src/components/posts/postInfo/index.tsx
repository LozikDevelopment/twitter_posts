import { FC } from "react";
import { Post } from "../../../types/Post";
import { Box, Typography } from "@mui/material";
import { EditInput, FlexColumn, WrapperEdit } from "../styled";
import { Cancel, Check, Close, Delete, Edit } from "@mui/icons-material";
import { usePostInfo } from "./usePostInfo";

interface Props {
  post: Post,
}

export const PostInfo: FC<Props> = (props) => {
  const { post } = props;
  const {
    id,
    author,
    title,
    text,
  } = post;

  const {
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
  } = usePostInfo({ post });
  
  return (
    <Box sx={{ p: 5 }}>
      {isEditing && (
        <Box>
          <Close 
          sx={{ cursor: 'pointer', mr: 2 }}
          onClick={() => setisEditing(false)} 
        />

        <Check 
          sx={{ cursor: 'pointer' }}
          onClick={() => handleUpdatePost(id)}
        />
        </Box>
      )}

      <h2>{author}</h2>

      <FlexColumn>
        {isEditing ? (
          <>
            <EditInput
              value={changedTitle}
              onChange={(e) => setChangetTitle(e.target.value)}
            />

            <EditInput
              value={changedText}
              onChange={(e) => setChangedText(e.target.value)}
             />
          </>
        ) : (
          <>
            <Typography sx={{ mb: 2 }}>
              {title}
            </Typography>

            <Typography sx={{ mb: 4 }}>
              {text}
            </Typography>
          </>
        )}
      </FlexColumn>

      <Box sx={{ mb: 2}}>
        {isEditing && removedImage && (
          <Cancel 
            onClick={() => setRemovedImage("")}
            sx={{ cursor: 'pointer' }} 
          />
        )}

        {isEditing && !removedImage && (
          <EditInput
            value={removedImage}
            onChange={(e) => setRemovedImage(e.target.value)}
            placeholder="Image"
        />
        )}

        {removedImage && (
          <img 
            src={removedImage}
            alt="post view"
            style={{ width: "100%" }}
          />
        )}
      </Box>

      <WrapperEdit>
        <Delete 
          sx={{ cursor: "pointer" }}
          onClick={() => handleRemovePost(id)} 
        />

        <Edit 
          sx={{ cursor: "pointer" }}
          onClick={() => setisEditing(true)}
        />
      </WrapperEdit>
    </Box>
  );
};