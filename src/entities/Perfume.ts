import { type Dayjs } from 'dayjs';

export interface Perfume {
	_id: string;
	name: string;
	brand: string; // Inspirational brand
	description: string;
	sells: number; // number of sells for popularity
	price: number;
	discount: number;
	createdAt: Dayjs;
	essence: Essence;
	status: PerfumeStatus;
	stock: number;
	images: string[];
	slug: string;
	// Questionary attributes
	gender: categoryName;
	family: string;
	notes: string[];
}

export type categoryName = 'Mujer' | 'Hombre' | 'Unisex';
export type PerfumeStatus = 'published' | 'draft';

export interface Category {
	id: string;
	name: categoryName;
	idFamilies: string[];
}

export interface Family {
	id: string;
	name: string;
	icon: string;
	// idCategory: string;
	idEssences: string[];
}

export interface Essence {
	id: string;
	name: string;
	icon: string;
	// idCategory: string;
	// idFamily: string;
}

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
