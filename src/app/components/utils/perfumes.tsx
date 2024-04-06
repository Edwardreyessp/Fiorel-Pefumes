import type { CarritoItem, Perfume } from '@/entities';
import dayjs from 'dayjs';

export const perfume: Perfume = {
	id: '#1234',
	brand: 'Basado en la marca inspiradora',
	name: 'Nombre del perfume',
	description:
		'Descripción del perfume que se muestra en la tarjeta del producto.',
	createdAt: dayjs(),
	discount: 499,
	price: 599,
	stock: 20,
	family: 'Familia',
	images: ['/images/perfume1.png', '/images/perfume2.png'],
	sells: 0,
	slug: 'Nombre-del-perfume',
	status: 'published',
	category: 'Mujer',
	essences: [],
};

export const perfumes: Perfume[] = [
	{ ...perfume, id: '#1', name: 'Perfume 1' },
	{ ...perfume, id: '#2', name: 'Perfume 2' },
	{ ...perfume, id: '#3', name: 'Perfume 3' },
	{ ...perfume, id: '#4', name: 'Perfume 4' },
	{ ...perfume, id: '#5', name: 'Perfume 5' },
	{ ...perfume, id: '#6', name: 'Perfume 6' },
	{ ...perfume, id: '#7', name: 'Perfume 7' },
	{ ...perfume, id: '#8', name: 'Perfume 8' },
	{ ...perfume, id: '#9', name: 'Perfume 9' },
	{ ...perfume, id: '#10', name: 'Perfume 10' },
	{ ...perfume, id: '#11', name: 'Perfume 11' },
	{ ...perfume, id: '#12', name: 'Perfume 12' },
	{ ...perfume, id: '#13', name: 'Perfume 13' },
	{ ...perfume, id: '#14', name: 'Perfume 14' },
	{ ...perfume, id: '#15', name: 'Perfume 15' },
	{ ...perfume, id: '#16', name: 'Perfume 16' },
	{ ...perfume, id: '#17', name: 'Perfume 17' },
	{ ...perfume, id: '#18', name: 'Perfume 18' },
	{ ...perfume, id: '#19', name: 'Perfume 19' },
	{ ...perfume, id: '#20', name: 'Perfume 20' },
	{ ...perfume, id: '#21', name: 'Perfume 21' },
	{ ...perfume, id: '#22', name: 'Perfume 22' },
	{ ...perfume, id: '#23', name: 'Perfume 23' },
	{ ...perfume, id: '#24', name: 'Perfume 24' },
	{ ...perfume, id: '#25', name: 'Perfume 25' },
];

export const carritoItems: CarritoItem[] = [
	{
		item: perfumes[0],
		quantity: 1,
	},
	{
		item: perfumes[1],
		quantity: 2,
	},
];
