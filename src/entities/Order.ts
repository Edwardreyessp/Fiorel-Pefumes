import type { Perfume } from '.';

export interface Order {
	id: number;
	products: Perfume[];
	quantity: number;
	total: number;
	status: orderStatus;
	createdAt: Date;
}

type orderStatus = 'pending' | 'completed' | 'cancelled';
