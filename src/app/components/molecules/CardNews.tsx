"use client"
import { useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { IconEdit, IconTrash } from "../atoms";

interface CardNewsProps {
  Title: string;
  image: string;
  onClick: () => void;
  onEdit: () => void;
  onDelete: () => void;
}

export function CardNews({ Title, image, onClick, onDelete, onEdit }: CardNewsProps): JSX.Element {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <Box
      width={"296px"}
      height={"187px"}
      onClick={onClick}
    >
      <Image
        src={image}
        alt="News"
        width={296}
        height={153}
        style={{ borderRadius: "4px" }}
      />
      <Box display={"flex"} justifyContent={"space-between"} pt={"10px"}>
        <Typography variant="body2" style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }} width={"220px"} >
          {Title}
        </Typography>
        <Box display={"flex"} width={"58px"} justifyContent={"space-between"} >
          <Box
            onMouseEnter={() => { setIsHovered(true); }}
            onMouseLeave={() => { setIsHovered(false); }}
            onClick={onEdit}
            height={"24px"}
            onPointerDown={(e) => { e.preventDefault(); }}
            sx={{ cursor: "pointer" }}
          >
            <IconEdit
              color={isHovered ? "#000000" : "#999999"}
            />
          </Box>
          <Box
            onMouseEnter={() => { setIsHovered2(true); }}
            onMouseLeave={() => { setIsHovered2(false); }}
            onClick={onDelete}
            height={"24px"}
            onPointerDown={(e) => { e.preventDefault(); }}
            sx={{ cursor: "pointer" }}
          >
            <IconTrash
              color={isHovered2 ? "#FF2828" : "#999999"} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}


