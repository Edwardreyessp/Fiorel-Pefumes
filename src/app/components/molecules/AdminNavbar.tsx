// AdminNavbar.tsx
'use client'

import { Box, Drawer, Typography, List, ListItemButton } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { IconClose, IconMenu } from '../atoms/Icons';
import { type ReactNode, useState, useEffect } from 'react';

interface AdminNavbarProps {
  children?: ReactNode;
}
interface Section {
  title: string;
  items: Array<{ label: string; href: string }>;
}

const sections: Section[] = [
  {
    title: 'Gestión',
    items: [
      { label: 'Resumen', href: '/admin/resumen' },
      { label: 'Ingresos', href: '/admin/ingresos' },
      { label: 'Envíos', href: '/admin/envios' },
      { label: 'Preguntas Frecuentes', href: '/admin/faq' },
      { label: 'Categorías', href: '/admin/categorias' },
      { label: 'Promociones', href: '/admin/promociones' },
      { label: 'Newsletters', href: '/admin/newsletter' },
      { label: 'Reseñas', href: '/admin/reviews' },
      { label: 'Cancelaciones', href: '/admin/cancelaciones' },
      { label: 'Aviso de privacidad', href: '/admin/privacidad' },
      { label: 'Inventario', href: '/admin/inventario' },
    ],
  },
  {
    title: 'Personalización',
    items: [
      { label: 'Banners', href: '/admin/banners' },
      { label: 'Colores de la página', href: '/admin/colores' },
    ],
  },
];


interface SeccionesProps {
  onClickSection?: (event: React.KeyboardEvent | React.MouseEvent) => void
}



const Secciones = ({ onClickSection }: SeccionesProps): JSX.Element => {
  return (
    <Box>
      {sections.map((section, index) => (
        <Box key={index} pl={3} pb={5} color="white">
          <Typography variant="subtitle1">{section.title}</Typography>
          <List sx={{ listStyleType: 'disc' }}>
            {section.items.map((item, i) => (
              <ListItemButton key={i} sx={{ color: 'white', padding: "1px", display: 'list-item', marginLeft: "25px" }}>
                <Link onClick={onClickSection} href={item.href} style={{ textDecoration: "none", color: "white" }}><Typography >{item.label}</Typography></Link>
              </ListItemButton>
            ))}
          </List>
        </Box>
      ))}
    </Box>
  );
};



export const AdminNavbar = ({ children }: AdminNavbarProps): JSX.Element => {
  return (
    <Box>
      <Box display={{ xs: "block", md: "none" }}>
        <MobileNavbar>{children}</MobileNavbar>
      </Box>
      <Box display={{ xs: "none", md: "block" }} >
        <DesktopNavbar>{children}</DesktopNavbar>
      </Box>
    </Box>
  );
};



const DesktopNavbar = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <Box display="flex">
      <Box
        style={{
          width: '420px',
          height: '100vh',
          backgroundColor: 'black',
          overflowY: 'auto',
          position: 'fixed',  // Fija la posición de la barra de navegación
        }}
      >
        <Box pt={1} display="flex" justifyContent="center" alignItems="center">
          <Link href="/admin">
            <Image src="/images/fiorel_perfumes_white.png"
              alt="Logo" width={156} height={47} />
          </Link>
        </Box>
        <Secciones />
      </Box>
      <Box ml="420px" flex={1} px={10} py={2}>
        {children}
      </Box>
    </Box>
  );
};



const MobileNavbar = ({ children }: { children: ReactNode }): JSX.Element => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      (event as React.KeyboardEvent).key === 'Tab'
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollPosition = window.scrollY;
      setIsTop(scrollPosition === 0 || scrollPosition < lastScrollTop);

      // Actualizar el último valor de desplazamiento al final del handleScroll
      setLastScrollTop(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <>
      <Box>
        <Box
          style={{
            backgroundColor: 'black',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0 20px',
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000, // Asegúrate de que la barra esté encima del contenido
            opacity: isTop ? 1 : 0, // Cambia la opacidad según la posición de desplazamiento
            transition: 'opacity 0.3s ease', // Agrega una transición suave
          }}
        >
          <Box onClick={toggleDrawer(true)}>
            <IconMenu color="white" />
          </Box>

          <Link href="/admin">
            <Image src="/images/fiorel_perfumes_white.png" alt="Logo" width={156} height={47} />
          </Link>
          <Box>E</Box>
        </Box>

        <Box flex={1} pt={7} />
        <Box p={2}>{children}</Box>
      </Box>

      <Drawer open={drawerOpen} onClose={toggleDrawer(false)} style={{ zIndex: 1100 }}>

        <Box
          style={{
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0px 20px',
          }}
        >
          <Box />
          <Link href="#">
            <Image src="/images/fiorel_perfumes_white.png" alt="Logo" width={156} height={47} />
          </Link>
          <Box onClick={toggleDrawer(false)}>
            <IconClose color="white" />
          </Box>
        </Box>

        <Box width={"100vw"} height={"100vh"} sx={{ backgroundColor: "#000" }}>
          <Secciones onClickSection={toggleDrawer(false)} />
        </Box>

      </Drawer>
    </>
  );
};
