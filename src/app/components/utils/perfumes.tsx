import type { CarritoItem, Perfume } from '@/entities';
import dayjs from 'dayjs';

export const perfume: Perfume = {
	_id: '#1234',
	brand: 'Basado en la marca inspiradora',
	name: 'Nombre del perfume',
	description:
		'Descripción del perfume que se muestra en la tarjeta del producto.',
	createdAt: dayjs(),
	discount: 499,
	price: 599,
	stock: 20,
	essence: {
		id: '1',
		name: 'Familia',
		icon: 'IconHeart',
	},
	family: 'Familia',
	gender: 'Mujer',
	images: ['/images/perfume1.png', '/images/perfume2.png'],
	notes: ['Nota 1', 'Nota 2', 'Nota 3'],
	sells: 0,
	slug: 'Nombre-del-perfume',
	status: 'published',
};

export const perfumes: Perfume[] = [
	{ ...perfume, _id: '#1', name: 'Perfume 1' },
	{ ...perfume, _id: '#2', name: 'Perfume 2' },
	{ ...perfume, _id: '#3', name: 'Perfume 3' },
	{ ...perfume, _id: '#4', name: 'Perfume 4' },
	{ ...perfume, _id: '#5', name: 'Perfume 5' },
	{ ...perfume, _id: '#6', name: 'Perfume 6' },
	{ ...perfume, _id: '#7', name: 'Perfume 7' },
	{ ...perfume, _id: '#8', name: 'Perfume 8' },
	{ ...perfume, _id: '#9', name: 'Perfume 9' },
	{ ...perfume, _id: '#10', name: 'Perfume 10' },
	{ ...perfume, _id: '#11', name: 'Perfume 11' },
	{ ...perfume, _id: '#12', name: 'Perfume 12' },
	{ ...perfume, _id: '#13', name: 'Perfume 13' },
	{ ...perfume, _id: '#14', name: 'Perfume 14' },
	{ ...perfume, _id: '#15', name: 'Perfume 15' },
	{ ...perfume, _id: '#16', name: 'Perfume 16' },
	{ ...perfume, _id: '#17', name: 'Perfume 17' },
	{ ...perfume, _id: '#18', name: 'Perfume 18' },
	{ ...perfume, _id: '#19', name: 'Perfume 19' },
	{ ...perfume, _id: '#20', name: 'Perfume 20' },
	{ ...perfume, _id: '#21', name: 'Perfume 21' },
	{ ...perfume, _id: '#22', name: 'Perfume 22' },
	{ ...perfume, _id: '#23', name: 'Perfume 23' },
	{ ...perfume, _id: '#24', name: 'Perfume 24' },
	{ ...perfume, _id: '#25', name: 'Perfume 25' },
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
