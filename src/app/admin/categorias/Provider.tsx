'use client';
import { AlertFloat } from '@/app/components/molecules';
import { CategoryPicker } from '@/app/components/organisms';
import { Backdrop, CircularProgress } from '@mui/material';
import { createContext, useState } from 'react';

export interface Tag {
	id: string;
	name: string;
	icon: string;
	idParent: string;
}

export interface TagData {
	tag: Tag;
	collection: 'perfumeFamilies' | 'perfumeEssences';
	method: 'POST' | 'PUT';
}

interface ContextProps {
	selectedTag: TagData;
	setTag: (tag: TagData) => void;
	clearTag: () => void;
	showAlert: (
		message?: string,
		type?: 'error' | 'warning' | 'info' | 'success',
	) => void;
	handleLoading: (loading: boolean) => void;
}

export const CategoryContext = createContext<ContextProps>({
	setTag: () => {},
	clearTag: () => {},
	selectedTag: {
		tag: {
			id: '',
			name: '',
			icon: '',
			idParent: '',
		},
		collection: 'perfumeFamilies',
		method: 'POST',
	},
	showAlert: () => {},
	handleLoading: () => {},
});

export const CategoryProvider = ({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element => {
	const [open, setOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [alertState, setAlertState] = useState({
		showAlert: false,
		type: 'success',
		message: 'Guardado correctamente',
	});
	const [selectedTag, setSelectedTag] = useState<TagData>({
		tag: {
			id: '',
			name: '',
			icon: '',
			idParent: '',
		},
		collection: 'perfumeFamilies',
		method: 'POST',
	});

	const setTag = (tag: TagData): void => {
		setSelectedTag(tag);
		setOpen(true);
	};

	const clearTag = (): void => {
		setOpen(false);
		setSelectedTag({
			tag: {
				id: '',
				name: '',
				icon: '',
				idParent: '',
			},
			collection: 'perfumeFamilies',
			method: 'POST',
		});
	};

	const showAlert = (
		message?: string,
		type?: 'error' | 'warning' | 'info' | 'success',
	): void => {
		setAlertState({
			showAlert: true,
			type: type ?? 'success',
			message: message ?? 'Guardado correctamente',
		});
	};

	const handleClose = (): void => {
		setAlertState({ ...alertState, showAlert: false });
	};

	const handleLoading = (loading: boolean): void => {
		setIsLoading(loading);
	};

	return (
		<CategoryContext.Provider
			value={{ selectedTag, setTag, clearTag, showAlert, handleLoading }}
		>
			{children}
			<CategoryPicker open={open} setOpen={setOpen} />
			<AlertFloat
				text={alertState.message}
				open={alertState.showAlert}
				type={alertState.type as 'error' | 'warning' | 'info' | 'success'}
				handleClose={handleClose}
			/>
			<Backdrop sx={{ color: '#fff', zIndex: 1000 }} open={isLoading}>
				<CircularProgress color='primary' />
			</Backdrop>
		</CategoryContext.Provider>
	);
};
