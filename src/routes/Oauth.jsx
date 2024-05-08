import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";

export default function Oauth() {
    const navigate = useNavigate();
    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ minHeight: "100vh" }}
        >
            <Grid item xs={3}>
                <Box sx={{ minWidth: 275 }}>
                    <Card variant="outlined">
                        {" "}
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Service provider would like to access the
                                following data:
                            </Typography>
                            <br />
                            <Stack direction="row" spacing={1}>
                                <Chip label="Age" />
                                <Chip label="Phone number" />
                            </Stack>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="success">
                                Allow
                            </Button>
                            <Button onClick={() => {navigate("/");}} variant="contained" color="error">
                                Deny
                            </Button>
                        </CardActions>
                    </Card>
                </Box>
            </Grid>
        </Grid>
    );
}
