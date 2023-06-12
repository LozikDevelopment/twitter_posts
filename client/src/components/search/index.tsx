import { Box, TextField } from "@mui/material"
import { SearchBox } from "../../styled"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "../../styled/theme"
import { ChangeEvent, FC } from "react"

interface Props {
  query: string,
  onQueryChange: (value: string) => void
}

export const Search: FC<Props> = (props) => {
  const { query, onQueryChange } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onQueryChange(e.target.value)
  };

  return (
    <SearchBox>
      <Box>
       <ThemeProvider theme={theme}>
         <TextField
           value={query} 
           fullWidth 
           label="Search" 
           id="fullWidth" 
           onChange={handleChange}
         />
       </ThemeProvider>
      </Box>
    </SearchBox>
  );
};