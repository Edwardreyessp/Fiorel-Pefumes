import * as zod from 'zod';

export const PerfumeSchema = zod.object({
	name: zod.string().min(1, 'El nombre es requerido'),
	brand: zod.string().min(1, 'La marca es requerida'),
	description: zod.string().min(1, 'La descripción es requerida'),
	price: zod.string().min(1, 'El precio es requerido'),
});
