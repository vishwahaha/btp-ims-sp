import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            SP Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ minHeight: "90vh" }}
                >
                    <Grid item xs={3}>
                        <List>
                            <ListItem disablePadding>
                                <ListItemText primary="Age of the user:" />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText primary="Phone number of the user:" />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}
