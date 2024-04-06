import { type Dayjs } from 'dayjs';

export interface Perfume {
	id: string;
	name: string;
	brand: string; // Inspirational brand
	description: string;
	sells: number; // number of sells for popularity
	price: number;
	discount: number;
	createdAt: Dayjs;
	status: PerfumeStatus;
	stock: number;
	images: string[];
	slug: string;
	// Questionary attributes
	category: categoryName;
	family: string;
	essences: string[];
}

export type categoryName = 'Mujer' | 'Hombre' | 'Unisex';
export type PerfumeStatus = 'published' | 'draft';

export interface PerfumeCategory {
	id: string;
	name: string;
	families: PerfumeFamily[];
}

export interface PerfumeFamily {
	id: string;
	name: string;
	icon: string;
	idParent: string;
	essences: PerfumeEssence[];
}

export interface PerfumeEssence {
	id: string;
	name: string;
	icon: string;
	idParent: string;
}
