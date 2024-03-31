"use client";
import { Box, Card, InputAdornment, Typography } from "@mui/material";
import { IconHashtag, Input } from "../atoms";

interface CardcolorProps {
  Title: string;
  Color: string;
  isError: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Cardcolor = ({ Title, Color, isError, handleChange, }: CardcolorProps): JSX.Element => {

  return (
    <Card
      sx={{
        width: 250,
        height: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        border: isError ? "2px solid #FF2828" : "1px solid  discret",
        transition: 'border-color 0.3s ease-in-out',
        padding: "20px",
        // Añade una transición al cambio de color
      }}
    >
      <Typography variant="body2">{Title}</Typography>
      <Box
        sx={{
          width: "100px",
          height: "100px",
          backgroundColor: "#" + Color,
          border: "1px solid #999999", // Cambia el color del borde según tus preferencias
        }}
      />
      <Box width={"198px"} height={"48px"} >
        <Input
          id="color"
          label="Color"
          defaultValue={Color}
          maxLen={6}
          onChange={handleChange}
          startIcon={<InputAdornment position="start"><IconHashtag /></InputAdornment>}
          added={false}
        />
      </Box>
    </Card>
  );
}
