import { useState } from "react";
import { Box } from "@mui/material";
import BarraNavegacion from "../components/BarraNavegacion.jsx";
import FormularioGuerrero from "../components/FormularioGuerrero.jsx";
import TablaEjercito from "../components/TablaEjercito.jsx";

// Contenedor principal: posee el estado del ejército y las acciones de la app.
const TROPAS_INICIALES = [
    {
        id: 1,
        nombre: "Gorbag",
        tipo: "Orco",
        nivel: 62,
        categoria: "Capitán",
        amenaza: 3,
    },
    {
        id: 2,
        nombre: "Lurtz",
        tipo: "Uruk",
        nivel: 88,
        categoria: "Berserker",
        amenaza: 5,
    },
    {
        id: 3,
        nombre: "Shagrat",
        tipo: "Orco",
        nivel: 45,
        categoria: "Explorador",
        amenaza: 2,
    },
];

function AppContainer() {
    // Lista de tropas registradas en el estado de React.
    const [tropas, setTropas] = useState(TROPAS_INICIALES);

    // Inserta el nuevo guerrero al final del arrego, sin mutar el estado.
    const registrarGuerrero = (guerreroNuevo) => {
        setTropas([...tropas, { id: Date.now(), ...guerreroNuevo }]);
    };

    // Borra al guerrero según su id, con actualización inmutable.
    const eliminarGuerrero = (id) => {
        setTropas(tropas.filter((tropa) => tropa.id !== id));
    };

    return (
        <Box>
            <BarraNavegacion />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <FormularioGuerrero onRegistrar={registrarGuerrero} />
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-12 col-md-10">
                        <TablaEjercito
                            tropas={tropas}
                            onEliminar={eliminarGuerrero}
                        />
                    </div>
                </div>
            </div>
        </Box>
    );
}

export default AppContainer;
