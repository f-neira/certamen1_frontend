import { useState } from "react";
import {
    Button,
    Card,
    CardContent,
    FormControl,
    FormControlLabel,
    FormLabel,
    MenuItem,
    Radio,
    RadioGroup,
    Rating,
    Select,
    Slider,
    TextField,
    Typography,
} from "@mui/material";

// Formulario único para registrar guerreros en el ejército.
function FormularioGuerrero({ onRegistrar }) {
    // Captura de cada atributo del guerrero.
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("Orco");
    const [nivel, setNivel] = useState(50);
    const [categoria, setCategoria] = useState("");
    const [amenaza, setAmenaza] = useState(1);

    // Envía el guerrero al contenedor y resetea el formulario.
    const registrarGuerrero = (event) => {
        event.preventDefault();
        onRegistrar({ nombre, tipo, nivel, categoria, amenaza });
        setNombre("");
        setTipo("Orco");
        setNivel(50);
        setCategoria("");
        setAmenaza(1);
    };

    return (
        <Card className="mt-4">
            <CardContent>
                <Typography variant="h5" align="center" gutterBottom>
                    Ingresar Guerrero
                </Typography>

                <form onSubmit={registrarGuerrero}>
                    <div className="mb-3">
                        <TextField
                            fullWidth
                            label="Nombre del Guerrero"
                            value={nombre}
                            onChange={(event) => setNombre(event.target.value)}
                        />
                    </div>
                    
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <FormControl>
                                <FormLabel>Tipo de Guerrero</FormLabel>

                                <RadioGroup
                                    row
                                    value={tipo}
                                    onChange={(event) =>
                                        setTipo(event.target.value)
                                    }
                                >
                                    <FormControlLabel
                                        value="Orco"
                                        control={<Radio color="warning" />}
                                        label="Orco"
                                    />
                                    <FormControlLabel
                                        value="Uruk"
                                        control={<Radio color="warning" />}
                                        label="Uruk"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </div>

                        <div className="col-12 col-md-6">
                            <FormLabel component="legend">
                                Nivel de Combate
                            </FormLabel>

                            <Slider
                                min={1}
                                max={100}
                                step={1}
                                marks
                                color="warning"
                                valueLabelDisplay="auto"
                                value={nivel}
                                onChange={(event, value) => setNivel(value)}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 col-md-6">
                            <FormControl fullWidth>
                                <FormLabel component="legend">
                                    Categoría / Rango
                                </FormLabel>

                                <Select
                                    label="Categoría / Rango"
                                    value={categoria}
                                    onChange={(event) =>
                                        setCategoria(event.target.value)
                                    }
                                >
                                    <MenuItem value="Capitán">Capitán</MenuItem>
                                    <MenuItem value="Berserker">
                                        Berserker
                                    </MenuItem>
                                    <MenuItem value="Explorador">
                                        Explorador
                                    </MenuItem>
                                    <MenuItem value="Asediador">
                                        Asediador
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>

                        <div className="col-12 col-md-6">
                            <FormControl>
                                <FormLabel component="legend">
                                    Nivel de Amenaza / Furia
                                </FormLabel>

                                <Rating
                                    max={5}
                                    value={amenaza}
                                    onChange={(event, value) =>
                                        setAmenaza(Math.max(1, value ?? 1))
                                    }
                                />
                            </FormControl>
                        </div>
                    </div>

                    <Button
                        type="submit"
                        variant="contained"
                        color="warning"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Registrar Guerrero
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}

export default FormularioGuerrero;
