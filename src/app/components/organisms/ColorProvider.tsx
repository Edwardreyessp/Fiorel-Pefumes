"use client"
import { getColor } from '@/firebase/color';
import { useEffect, useState, createContext } from 'react';
import { Box } from '@mui/material'; // Importa el componente CircularProgress de Material-UI
import { Spinner } from '../molecules';

export const ColorContext = createContext({
  Color: '#B2CD27',
});

function ColorProvider({ children }: { children: React.ReactNode }): JSX.Element {
  const [Color, setColor] = useState("#B2CD27");
  const [loading, setLoading] = useState(true); // Estado para controlar la carga

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const ColorData = await getColor();
        if (ColorData != null) {
          setColor(ColorData.color as string);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false); // Cuando la solicitud de color termina, establece loading en false
      }
    };

    // Ejecuta el efecto solo una vez pasando un array vacío de dependencias
    void fetchData();
  }, []);

  // Muestra un componente de carga mientras se está obteniendo el color
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', background: '#FFF' }}>
        <Spinner text="Cargando..." />
      </Box>
    );
  }

  // Una vez que se obtiene el color, renderiza los componentes hijos con el contexto de color
  return (
    <ColorContext.Provider value={{ Color }}>
      {children}
    </ColorContext.Provider>
  );
}

export default ColorProvider;
