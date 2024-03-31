import type { Perfume } from '.';

export interface Carrito {
	subtotal: string;
	envio: string;
	items: CarritoItem[];
}

export interface CarritoItem {
	item: Perfume;
	quantity: number;
}
