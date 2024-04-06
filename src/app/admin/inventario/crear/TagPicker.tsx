'use client';
import {
	PerfumeContext,
	type PerfumeContextProps,
} from '@/providers/PerfumeProvider';
import { TagContext } from '@/providers/TagsProvider';
import {
	Autocomplete,
	Box,
	Chip,
	Stack,
	TextField,
	Typography,
} from '@mui/material';
import { type SyntheticEvent, useContext, useEffect, useState } from 'react';

export const TagPicker = (): JSX.Element => {
	const {
		getAllTags,
		isLoading,
		updateTags,
		selectedTags,
		allTags,
		errorTags,
		setErrors,
	} = useContext(TagContext);
	const [selectedEssence, setSelectedEssence] = useState<string[] | undefined>(
		[],
	);
	const { selectedPerfume } = useContext<PerfumeContextProps>(PerfumeContext);

	useEffect(() => {
		getAllTags().catch(error => {
			console.error('Error getting tags: ', error);
		});

		// Nombres de las tags según el di de las eseencias del perfume seleccionado
		setSelectedEssence(
			selectedPerfume.essences.map(
				essenceID =>
					allTags
						.find(tag => tag.id === selectedPerfume.category)
						?.families.find(family => family.id === selectedPerfume.family)
						?.essences.find(essence => essence.id === essenceID)?.name ?? '',
			),
		);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onChangeCategory = (value: string | null): void => {
		setErrors('category', value === null);
		if (value === null) {
			updateTags({
				categoryID: null,
				familyID: null,
				essencesID: [],
			});
		}

		const selectedTag = allTags.find(tag => tag.name === value);
		if (selectedTag !== undefined) {
			updateTags({
				categoryID: selectedTag.id,
				familyID: null,
				essencesID: [],
			});
		}
	};

	const onChangeFamily = (value: string | null): void => {
		setErrors('family', value === null);
		setSelectedEssence([]);
		if (value === null) {
			updateTags({
				...selectedTags,
				familyID: null,
			});
		}

		const selectedTag = allTags
			.find(tag => tag.id === selectedTags.categoryID)
			?.families.find(family => family.name === value);

		if (selectedTag !== undefined) {
			updateTags({
				...selectedTags,
				familyID: selectedTag.id,
			});
		}
	};

	const onChangeEssence = (value: string[]): void => {
		setErrors('essence', value.length === 0);
		setSelectedEssence(value);

		// Retrieve the essence IDs where the name is equal to the selected essence
		const essenceIDs = allTags
			.find(tag => tag.id === selectedTags.categoryID)
			?.families.find(family => family.id === selectedTags.familyID)
			?.essences.filter(essence => value.includes(essence.name))
			.map(essence => essence.id);

		updateTags({
			...selectedTags,
			essencesID: essenceIDs ?? [],
		});
	};

	if (isLoading) {
		return <p>Loading...</p>;
	}

	return (
		<Stack spacing={2}>
			<Stack>
				<Autocomplete
					disablePortal
					id='combo-box-demo'
					value={
						allTags.find(tag => tag.id === selectedTags.categoryID)?.name ??
						null
					}
					onChange={(
						event: SyntheticEvent<Element, Event>,
						newValue: string | null,
					) => {
						onChangeCategory(newValue);
					}}
					options={allTags.map(tag => tag.name)}
					getOptionLabel={option => option}
					renderOption={(props, option) => (
						<Box component='li' {...props} key={option}>
							{option}
						</Box>
					)}
					renderInput={params => (
						<TextField
							{...params}
							label='Categorías'
							sx={{ backgroundColor: '#f4f4f5' }}
							error={errorTags.category}
						/>
					)}
				/>
				{errorTags.category && (
					<Box>
						<Typography variant='caption' color='error' ml={2}>
							Selecciona una categoría
						</Typography>
					</Box>
				)}
			</Stack>
			{selectedTags.categoryID !== null && (
				<Stack>
					<Autocomplete
						disablePortal
						id='combo-box-demo'
						value={
							allTags
								.find(tag => tag.id === selectedTags.categoryID)
								?.families.find(family => family.id === selectedTags.familyID)
								?.name ?? null
						}
						onChange={(
							event: SyntheticEvent<Element, Event>,
							newValue: string | null,
						) => {
							onChangeFamily(newValue);
						}}
						options={
							allTags
								.find(tag => tag.id === selectedTags.categoryID)
								?.families.map(family => family.name) ?? []
						}
						getOptionLabel={option => option}
						renderOption={(props, option) => (
							<Box component='li' {...props} key={option}>
								{option}
							</Box>
						)}
						renderInput={params => (
							<TextField
								{...params}
								label='Familias'
								sx={{ backgroundColor: '#f4f4f5' }}
								error={errorTags.family}
							/>
						)}
					/>
					{errorTags.family && (
						<Box>
							<Typography variant='caption' color='error' ml={2}>
								Selecciona una familia
							</Typography>
						</Box>
					)}
				</Stack>
			)}
			{selectedTags.familyID !== null && (
				<Stack>
					<Autocomplete
						multiple
						filterSelectedOptions
						disablePortal
						id='combo-box-demo'
						value={selectedEssence}
						onChange={(
							event: SyntheticEvent<Element, Event>,
							newValue: string[],
						) => {
							onChangeEssence(newValue);
						}}
						options={
							allTags
								.find(tag => tag.id === selectedTags.categoryID)
								?.families.find(family => family.id === selectedTags.familyID)
								?.essences.map(essence => essence.name) ?? []
						}
						getOptionLabel={option => option}
						renderOption={(props, option) => (
							<Box component='li' {...props} key={option}>
								{option}
							</Box>
						)}
						renderTags={params => {
							return params.map((option, index) => (
								<Chip
									key={index}
									label={option}
									onDelete={() => {
										const newEssences = selectedEssence?.filter(
											essence => essence !== option,
										);
										onChangeEssence(newEssences ?? []);
									}}
								/>
							));
						}}
						renderInput={params => (
							<TextField
								{...params}
								label='Esencias'
								key={params.id}
								sx={{ backgroundColor: '#f4f4f5' }}
								error={errorTags.essence}
							/>
						)}
					/>
					{errorTags.essence && (
						<Box>
							<Typography variant='caption' color='error' ml={2}>
								Selecciona al menos una esencia
							</Typography>
						</Box>
					)}
				</Stack>
			)}
		</Stack>
	);
};
