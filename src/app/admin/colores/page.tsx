"use client"
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import { CardAdmin } from '../../components/molecules/CardAdmin';
import { Cardcolor } from "@/app/components/molecules";
import { type ChangeEvent, useState } from "react";
import { ButtonPrimary, ButtonSecondary } from "@/app/components/atoms";
import { useTheme } from "@mui/system";

export default function ColorsPage(): JSX.Element {



	const [first, setfirst] = useState(useTheme().palette.primary.main.substring(1))
	const [Second, setSecond] = useState(useTheme().palette.primary.main.substring(1))


	const [isError, setisError] = useState(false)

	const changeColor = (event: ChangeEvent<HTMLInputElement>): void => {
		setfirst(event.target.value)
	}

	const TestColor = (): void => {
		const regex = /^[0-9A-Fa-f]{6}$/;
		if (regex.test(String(first))) {
			setisError(false);
			setSecond(first);
		} else {
			setisError(true);
		}
	};

	const implementColor = (): void => {
		console.log("Implementar color")
	}


	const isDesktop = useMediaQuery(useTheme().breakpoints.up('sm'));

	return <main><Stack spacing={2} >
		<Typography variant="h1">Colores</Typography>
		<Typography variant="body1">Esto sera un breadcrum</Typography>
		{ /* TODO:Agregar el breadcrum */}
		<Box display={isDesktop ? "flex" : ""}>
			<CardAdmin dashboardText={"Antes"} captionText="Los colores se visualizan así" />
			<Box p={2} />
			<CardAdmin dashboardText={"Despues"} captionText="Los colores se visualizaran así" colorBorder={"#" + Second} colorTitle={"#" + Second} />
		</Box>
		<Typography textAlign={"center"} color={isError ? "red" : ""}>Recuerda poner en formato hexadecimal los colores</Typography>
		<Box display={"flex"} justifyContent={"center"} width={"100%"}>

			<Cardcolor Title={"Color primario"} Color={first} isError={isError} handleChange={changeColor
			} />

		</Box>

		<ButtonSecondary text={"Probar"} onClick={TestColor} />

		<ButtonPrimary text={"Salir y guardar"} onClick={implementColor} />
	</Stack>
	</main>
}
