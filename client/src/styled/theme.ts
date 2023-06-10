import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: '#000',
          },
          ".css-1jy569b-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
            color: '#000',
          }
        },
      },
    },
  },
});