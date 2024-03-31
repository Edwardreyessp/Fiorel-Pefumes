import type { Perfume, Order } from '.';

export interface Admin {
	id: number;
	username: string;
	email: string;
	role: string;
	incomes: Income[];
	orders: Order[];
}

export interface Income {
	gross: number;
	commission: number;
	net: number;
	perfume: Perfume;
}
