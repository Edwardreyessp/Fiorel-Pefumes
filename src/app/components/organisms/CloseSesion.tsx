import { Box, Typography } from '@mui/material'
import React from 'react'

export function CloseSesion(): JSX.Element {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      width={"100%"}
      height={"50'vh"}
    >
      <Typography variant="subtitle1" textAlign={"center"}>Es un gusto que seas nuestro cliente</Typography>
      <Typography variant="caption">¿Cerrar Sesión?</Typography>
    </Box>
  )
}

