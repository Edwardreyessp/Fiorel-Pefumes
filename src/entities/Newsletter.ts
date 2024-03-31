export interface NewsletterItem {
	id: string;
	title: string;
	description: string;
	image: string;
	link: string;
	modifies: modify[];
}

export interface modify {
	date: string;
	type: type;
}

type type = 'Se envió' | 'Se editó' | 'Se creó';
