import type { NewsletterItem } from '@/entities';

export const NewsletterCard: NewsletterItem = {
	id: '1',
	title: '¡Hola Mundo!',
	description: '¡Hola Mundo!',
	image: 'https://via.placeholder.com/150',
	link: 'https://via.placeholder.com/150',
	modifies: [
		{
			date: '2021-08-27',
			type: 'Se envió',
		},
	],
};

export const NewsletterItems: NewsletterItem[] = [
	{ ...NewsletterCard, id: '1', title: '¡Hola Mundo 1!' },
	{ ...NewsletterCard, id: '2', title: '¡Hola Mundo 2!' },
	{ ...NewsletterCard, id: '3', title: '¡Hola Mundo 3!' },
	{ ...NewsletterCard, id: '4', title: '¡Hola Mundo 4!' },
	{ ...NewsletterCard, id: '5', title: '¡Hola Mundo 5!' },
	{ ...NewsletterCard, id: '6', title: '¡Hola Mundo 6!' },
	{ ...NewsletterCard, id: '7', title: '¡Hola Mundo 7!' },
	{ ...NewsletterCard, id: '8', title: '¡Hola Mundo 8!' },
];
