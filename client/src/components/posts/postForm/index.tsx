import { Button, Input } from "@mui/material";
import { ButtonBox, IconsBox, Textinput } from "../styled";
import { AccountCircle, Image, Title } from "@mui/icons-material";
import { useForm } from "./useForm";

export const PostForm = () => {
  const {
    author,
    title,
    text,
    image,
    setAuthor,
    setTitle,
    setText,
    setImage,
    handleAddPost,
  } = useForm();
  
  return (
    <>
      <Textinput 
        value={text}
        placeholder="What's happening?" 
        onChange={(e) => setText(e.target.value)}
      />

      <ButtonBox>
        <IconsBox>
          <Image />
          <Input 
            value={author}
            placeholder="Author" 
            onChange={(e) => setAuthor(e.target.value)}
          />

          <AccountCircle />
          <Input
            value={title}
            placeholder="Tittle"
            onChange={(e) => setTitle(e.target.value)}
          />

          <Title />
          <Input
            value={image} 
            placeholder="Image"
            onChange={(e) => setImage(e.target.value)} 
          />
        </IconsBox>

        <Button 
          variant="contained" 
          onClick={handleAddPost}
        >
          Tweet
        </Button>
      </ButtonBox>
    </>
  );
} ;