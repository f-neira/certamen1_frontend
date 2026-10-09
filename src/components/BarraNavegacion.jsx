import { AppBar, Box, Toolbar, Typography } from "@mui/material";

// Barra de navegación superior.
function BarraNavegacion() {
    return (
        <AppBar position="static" color="warning">
            <Toolbar>
                <Typography variant="h6" component="div">
                    Anillo Único
                </Typography>

                <Box sx={{ flexGrow: 1 }} />
                
                <Typography component="div" variant="h6">
                    Uno para dominarlos a todos
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default BarraNavegacion;
