'use client';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Box, MobileStepper, useMediaQuery, useTheme } from '@mui/material';
import { type Perfume } from '@/entities';
import { useState } from 'react';
import { IconArrowRight, IconArrrowLeft } from '.';
import { CardEssence } from '../molecules';
import Image from 'next/image';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

interface CarruselComponentProps {
	items: Perfume[];
}

export const CarruselComponent = ({
	items,
}: CarruselComponentProps): JSX.Element => {
	const [activeStep, setActiveStep] = useState(0);
	const theme = useTheme();
	const len = items.length;

	const handleAddStep = (): void => {
		if (activeStep === len - 1) {
			setActiveStep(0);
		} else {
			setActiveStep(prevActiveStep => prevActiveStep + 1);
		}
	};

	const handleSubtractStep = (): void => {
		if (activeStep === 0) {
			setActiveStep(len - 1);
		} else {
			setActiveStep(prevActiveStep => prevActiveStep - 1);
		}
	};

	return (
		<Box display={'flex'} alignItems={'center'}>
			<Box
				onClick={handleSubtractStep}
				height={'24px'}
				onPointerDown={e => {
					e.preventDefault();
				}}
				pr={3}
				sx={{ cursor: 'pointer' }}
			>
				<IconArrrowLeft />
			</Box>
			<Box sx={{ width: { xs: 183, sm: 300 }, }}>
				<AutoPlaySwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={activeStep}
				>
					{items.map((item, index) => (
						<Box key={index}>
							<CardEssence
								title={'Escencia #' + item._id}
								description={'Quedan ' + item.stock + ' en el inventario'}
								image={item.images.length > 0 ? item.images[0] : ''} // Accede a la primera imagen
							/>
						</Box>
					))}
				</AutoPlaySwipeableViews>
			</Box>
			<Box
				onClick={handleAddStep}
				height={'24px'}
				onPointerDown={e => {
					e.preventDefault();
				}}
				sx={{ cursor: 'pointer' }}
				pl={3}
			>
				<IconArrowRight />
			</Box>
		</Box>
	);
};

interface CarruselProductProps {
	item: Perfume;
}

export const CarruselProduct = ({
	item,
}: CarruselProductProps): JSX.Element => {
	const [activeStep, setActiveStep] = useState(0);
	const theme = useTheme();
	const len = item.images.length;

	const handleAddStep = (): void => {
		if (activeStep === len - 1) {
			setActiveStep(0);
		} else {
			setActiveStep(prevActiveStep => prevActiveStep + 1);
		}
	};

	const handleSubtractStep = (): void => {
		if (activeStep === 0) {
			setActiveStep(len - 1);
		} else {
			setActiveStep(prevActiveStep => prevActiveStep - 1);
		}
	};

	const isDesktop = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Box display={'flex'} alignItems={'center'}>
			<Box
				onClick={handleSubtractStep}
				height={'24px'}
				onPointerDown={e => {
					e.preventDefault();
				}}
				pr={{ xs: 0, sm: 3 }}
				sx={{ cursor: 'pointer' }}
			>
				<IconArrrowLeft />
			</Box>
			<Box width={isDesktop ? 350 : 300}>
				<AutoPlaySwipeableViews
					axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
					index={activeStep}
				>
					{item.images.map((image, index) => (
						<Box key={index}>
							<Image
								src={image}
								alt={'imagen de producto'}
								width={isDesktop ? 350 : 300}
								height={isDesktop ? 350 : 300}
							/>
						</Box>
					))}
				</AutoPlaySwipeableViews>
			</Box>
			<Box
				onClick={handleAddStep}
				height={'24px'}
				onPointerDown={e => {
					e.preventDefault();
				}}
				sx={{ cursor: 'pointer' }}
				pl={{ xs: 0, sm: 3 }}
			>
				<IconArrowRight />
			</Box>
		</Box>
	);
};
export interface CarruselImageProps {
	images: Array<{ image: string, link: string }>;
}

export const CarruselImage = ({ images }: CarruselImageProps): JSX.Element => {

	const primaryColor = useTheme().palette.primary.main;
	const theme = useTheme();
	const [activeStep, setActiveStep] = useState(0);
	const maxSteps = images.length;


	const handleStepChange = (step: number): void => {
		setActiveStep(step);
	};

	return <Box position={"relative"}>
		<AutoPlaySwipeableViews
			axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
			index={activeStep}
			onChangeIndex={handleStepChange}
			enableMouseEvents
		>
			{images.map((step, index) => (
				<Box
					key={index}
					position="relative"
					height={{ xs: "830px", sm: "600px" }}
					width="100%"
					onClick={() => window.open(step.link, "_blank")}
					sx={{
						backgroundImage: `url(${step.image})`,
						backgroundSize: "cover",
						position: "relative",
					}}
				>
				</Box>
			))}
		</AutoPlaySwipeableViews>

		<Box
			position="absolute"
			bottom={0}
			right={0}
			zIndex={1}  // Ajusta el valor del zIndex según sea necesario
			sx={{ borderRadius: "100px", backgroundColor: "#000", margin: "10px" }}
		>
			<MobileStepper
				steps={maxSteps}
				position="static"
				sx={{
					backgroundColor: "transparent",
					borderRadius: "100px",
					"& .MuiMobileStepper-dot": {
						backgroundColor: "white",
					},
					"& .MuiMobileStepper-dotActive": {
						backgroundColor: primaryColor,
					},
				}}
				activeStep={activeStep}
				backButton={undefined}
				nextButton={undefined}
			/>
		</Box>

	</Box >
}
