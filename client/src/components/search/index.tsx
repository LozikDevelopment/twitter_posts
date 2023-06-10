import { Box, TextField } from "@mui/material"
import { SearchBox } from "../../styled"
import { ThemeProvider } from "@mui/material/styles"
import { theme } from "../../styled/theme"

export const Search = () => {
  return (
    <SearchBox>
      <Box>
       <ThemeProvider theme={theme}>
         <TextField 
           fullWidth 
           label="Search" 
           id="fullWidth" 
         />
       </ThemeProvider>
      </Box>
    </SearchBox>
  )
}