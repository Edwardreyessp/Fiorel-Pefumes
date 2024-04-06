"use client"
import { BreadCrumb, ButtonPrimary } from "@/app/components/atoms";
import CardReviews from "@/app/components/molecules/CardReview";
import { type Review } from "@/entities/Review";
import { getReviews } from "@/firebase/reviews";
import { Skeleton, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";

export default function ReviewsPage(): JSX.Element {

	const [ReviewData, setReviewData] = useState<Review[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async (): Promise<void> => {
			try {
				const ReviewData = await getReviews();
				setReviewData(ReviewData);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
			}
		};

		void fetchData();
	}, []);

	const changeToUpdate = (): void => {
		window.location.href = "/admin/reviews/edit";
	};

	const isDesktop = useMediaQuery(useTheme().breakpoints.up("md"));


	return <main><Stack spacing={2} p={isDesktop ? "40px" : "20px"}>
		<Typography variant="h1">Preguntas Frecuentes</Typography>
		<BreadCrumb />
		<ButtonPrimary text={"Actualizar"} onClick={changeToUpdate} />
		<Stack spacing={2} overflow="auto" alignItems={"center"}>
			{isLoading ?
				<><Skeleton variant="rectangular" sx={{ width: { xs: 354, sm: 400 }, height: "300px" }} /><Skeleton variant="rectangular" sx={{ width: { xs: 354, sm: 400 }, height: "300px" }} /></>
				:
				ReviewData.map((review, index) => <CardReviews key={index} title={review.title} review={review.review} />)}
		</Stack>
	</Stack></main>;
}
