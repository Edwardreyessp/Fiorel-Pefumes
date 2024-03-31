"use client"
import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { IconCalendar, IconPerfume, IconProfile, Stats } from "../components/atoms";
import { Layout } from "../components/organisms";

export default function AboutPage(): JSX.Element {
	const isDesktop = useMediaQuery(useTheme().breakpoints.up('sm'));

	return (
		<main>
			<Layout>
				<Stack spacing={1} >
					<Box
						position="relative"
						height="434px"
						width={"100%"}
						sx={{
							backgroundImage: `url(${isDesktop ? "/images/Banner3_Desktop.png" : "/images/Banner3_mobile.png"})`,
							backgroundSize: "cover",
						}}
					>

						<Box width={{ xs: "500px", sm: "550px" }} pt={10} pl={2} display={{ xs: "none", md: "block" }}>
							<Typography textAlign={"center"} variant="subtitle1" p={2}>Nosotros</Typography>
							<Typography >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae convallis neque. Phasellus pellentesque risus sit amet gravida dictum. Donec iaculis eros eu neque efficitur, ac consectetur felis suscipit. Suspendisse et congue ante. Cras vel convallis leo. Etiam mattis iaculis nisl mattis semper</Typography>
						</Box>

					</Box>
					<Box display={"flex"} flexDirection={{ xs: "column", md: "row" }} alignItems={"center"}>
						<Box p={2} textAlign={{ xs: "center", md: "left" }}>
							<Typography variant="subtitle1" textAlign="center" p={2}>Nuestra misión</Typography>
							<Typography width={{ xs: "100%", sm: "650px" }} textAlign={{ xs: "center", md: "justify" }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae convallis neque.
								Phasellus pellentesque risus sit amet gravida dictum. Donec iaculis eros eu neque efficitur,
								ac consectetur felis suscipit. Suspendisse et congue ante. Cras vel convallis leo.
								Etiam mattis iaculis nisl mattis semper
							</Typography>
						</Box>

						<Box width={"100%"} display="flex" flexDirection={{ xs: "column", md: "row" }} alignItems="center" justifyContent={"space-evenly"}>
							<Box pt={2}>
								<Stats startIcon={<IconProfile />} text={"Clientes satisfechos"} valueShown={"+50"} />
							</Box>
							<Box pt={3}>
								<Stats startIcon={<IconPerfume />} text={"Perfumes vendidos"} valueShown={"+50"} />
							</Box>
							<Box pt={3}>
								<Stats startIcon={<IconCalendar />} text={"Años de experiencia"} valueShown={"+50"} />
							</Box>
						</Box>

					</Box>

				</Stack>
			</Layout>
		</main>
	);
}


