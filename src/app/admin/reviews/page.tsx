"use client"
import { ButtonPrimary } from "@/app/components/atoms";
import CardReviews from "@/app/components/molecules/CardReview";
import { Stack, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function ReviewsPage(): JSX.Element {

	const reviews = [
		{
			question: "¿Qué es Lorem Ipsum?",
			answer: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
		},
		{
			question: "¿Por qué lo usamos?",
			answer: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
		},
		{
			question: "¿Dónde puedo conseguirlo?",
			answer: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera."
		},
		{
			question: "¿Qué es Lorem Ipsum?",
			answer: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
		},
		{
			question: "¿Por qué lo usamos?",
			answer: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
		},
		{
			question: "¿Dónde puedo conseguirlo?",
			answer: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera."
		},
		{
			question: "¿Qué es Lorem Ipsum?",
			answer: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
		},
		{
			question: "¿Por qué lo usamos?",
			answer: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
		},
		{
			question: "¿Dónde puedo conseguirlo?",
			answer: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera."
		},
		{
			question: "¿Qué es Lorem Ipsum?",
			answer: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto."
		},
		{
			question: "¿Por qué lo usamos?",
			answer: "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño."
		},
		{
			question: "¿Dónde puedo conseguirlo?",
			answer: "Hay muchas variaciones de los pasajes de Lorem Ipsum disponibles, pero la mayoría sufrió alteraciones en alguna manera."
		},
	];

	const changeToUpdate = (): void => {
		window.location.href = "/admin/reviews/edit";
	};

	const isDesktop = useMediaQuery(useTheme().breakpoints.up("md"));


	return <main><Stack spacing={2} p={isDesktop ? "40px" : "20px"}>
		<Typography variant="h1">Preguntas Frecuentes</Typography>
		<Typography variant="caption">Esto será un breadcrumb</Typography>
		<ButtonPrimary text={"Actualizar"} onClick={changeToUpdate} />
		<Stack spacing={2} overflow="auto" alignItems={"center"}>
			{reviews.map((review, index) => (
				<CardReviews
					key={index}
					title={review.question}
					review={review.answer}
				/>
			))}
		</Stack>
	</Stack></main>;
}
