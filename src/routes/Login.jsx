import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function Login() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 35,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              sx={{ mt: 3, mb: 2 }}
            >
                <Link href="/oauth">
                Login with IMS
                </Link>
            </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}