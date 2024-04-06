"use client"
import { Box, Button, Stack, Typography } from "@mui/material";
import { CardAdmin } from '../../components/molecules/CardAdmin';
import { AlertFloat, Cardcolor } from "@/app/components/molecules";
import { type ChangeEvent, useState, useEffect } from "react";
import { BreadCrumb, ButtonSecondary } from "@/app/components/atoms";
import { useTheme } from "@mui/system";
import { getColor, putColor } from "@/firebase/color";


export default function ColorsPage(): JSX.Element {



	const [first, setfirst] = useState(useTheme().palette.primary.main.substring(1))
	const [Second, setSecond] = useState(useTheme().palette.primary.main.substring(1))
	const [isError, setisError] = useState(false)
	const [ShowError, setShowError] = useState(false)
	const [ShowSuccess, setShowSuccess] = useState(false)
	const [ErrorMessage, setErrorMessage] = useState("Error al guardar el color")
	const SuccessText = "Color guardado exitosamente"

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			try {
				const ColorData = await getColor();
				if (ColorData != null) {
					const color = ColorData.color as string;
					setfirst(color.substring(1));
					setSecond(color.substring(1));
				}
			} catch (error) {
				setErrorMessage("Error al obtener el color")
				setShowError(true)
			}
		};

		void fetchData();
	}, []);


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
	const implementColor = async (): Promise<void> => {
		try {
			await putColor("#" + first);
			setShowSuccess(true);
		} catch (error) {
			setShowError(true);
			setErrorMessage(error as string);
		}
	};



	return <main><Stack spacing={2} >
		<Typography variant="h1">Colores</Typography>
		<BreadCrumb />
		<Box display={{ xs: "block", md: "flex" }}>
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
		<Button onClick={
			() => {
				void implementColor();
			}
		}
			variant='contained'
		>Guardar cambios</Button>
		<AlertFloat text={ErrorMessage} open={ShowError} type="error" handleClose={
			() => {
				setShowError(false)
			}
		} />
		<AlertFloat text={SuccessText} open={ShowSuccess} type="success" handleClose={
			() => {
				setShowSuccess(false)
			}
		} />
	</Stack>
	</main>
}
