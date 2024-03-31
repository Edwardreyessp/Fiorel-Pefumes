"use client"
import { Box, Card, Typography, useTheme, useMediaQuery } from "@mui/material"
import Image from "next/image"
import { IconEdit, IconTrash } from "../atoms"
import { useState } from "react"

interface CardInventarioProps {
  urlImage: string
  name: string
  date: string
  id: string
  stock: number
  isAvailable: boolean
  IconEditFuction: () => void,
  IconTrashFuction: () => void,
  onClick: () => void
}



export const CardInventario = ({ name, urlImage, date, id, stock, IconEditFuction, IconTrashFuction, onClick, isAvailable }: CardInventarioProps): JSX.Element => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"))
  // Se utilizo media query para que el diseño sea responsivo , ya que al utilizar brekpoint se necesitabva mas de 2 breakpoints para que funcionara en todos los dispositivos
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <Card sx={{ display: "flex", width: "100%", height: "150", alignItems: "center", justifyContent: "space-between", p: "18px", border: isAvailable ? "1px solid #45D053" : "1px solid #FFC20A" }}  >
      <Image src={urlImage} alt="Imagen producto" width={100} height={100} />
      <Box display={"flex"} flexDirection={isDesktop ? "row" : "column"} justifyContent={isDesktop ? "space-around" : "center"} alignItems={"center"} width={"100%"} p={2}>
        <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "150px" }}>{name}</Typography>
        <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "150px" }}>{date}</Typography>
        <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "150px" }}>{id}</Typography>
        <Typography sx={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", width: "150px" }}>{stock} unidades</Typography>
      </Box>
      <Box display={"flex"} flexDirection={"column"} justifyContent={"space-between"} height={"100px"}> {/* Ajusta la altura al 100% */}
        <Box
          height={24}
          onClick={IconEditFuction}
          onPointerDown={(e) => { e.preventDefault(); }}
          sx={{ cursor: "pointer" }}
          onMouseEnter={() => { setIsHovered(true); }}
          onMouseLeave={() => { setIsHovered(false); }}
        >
          <IconEdit color={isHovered ? "#000000" : "#999999"} />
        </Box>
        <Box
          height={24}
          onClick={IconTrashFuction}
          onPointerDown={(e) => { e.preventDefault(); }}
          sx={{ cursor: "pointer" }}
          onMouseEnter={() => { setIsHovered2(true); }}
          onMouseLeave={() => { setIsHovered2(false); }}
        >
          <IconTrash
            color={isHovered2 ? "#FF2828" : "#999999"}
          />
        </Box>

      </Box>
    </Card>
  )
}

