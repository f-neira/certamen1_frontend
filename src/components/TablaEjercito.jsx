import {
    Button,
    Card,
    CardContent,
    Chip,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
} from "@mui/material";

// Tabla con el catálogo de tropas existentes, 
// clasificación por tipo y eliminación.
function TablaEjercito({ tropas, onEliminar }) {
    return (
        <Card className="mt-4">
            <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                    Despliegue del Ejército
                </Typography>

                <TableContainer>
                    <Table aria-label="tabla de tropas del ejército de Sauron">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nombre del Guerrero</TableCell>
                                <TableCell>Tipo de Guerrero</TableCell>
                                <TableCell>Categoría / Rango</TableCell>
                                <TableCell>Nivel</TableCell>
                                <TableCell>Clasificación</TableCell>
                                <TableCell>Acción</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {tropas.map((tropa) => (
                                <TableRow key={tropa.id}>
                                    <TableCell>{tropa.nombre}</TableCell>
                                    <TableCell>{tropa.tipo}</TableCell>
                                    <TableCell>{tropa.categoria}</TableCell>
                                    <TableCell>{tropa.nivel}</TableCell>
                                    <TableCell>
                                        <Chip
                                            label={tropa.tipo}
                                            color={
                                                tropa.tipo === "Orco"
                                                    ? "error"
                                                    : "secondary"
                                            }
                                            size="small"
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Button
                                            variant="contained"
                                            color="error"
                                            size="small"
                                            onClick={() => onEliminar(tropa.id)}
                                        >
                                            Asesinado por la aparición
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}

export default TablaEjercito;
