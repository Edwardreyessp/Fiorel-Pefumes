'use client';

import { usePathname } from 'next/navigation';
import { Breadcrumbs, Link } from '@mui/material/';

const NameMap: Record<string, string> = {
	// Admin
	'/admin': 'Inicio',
	'/admin/resumen': 'Resumen',
	'/admin/envios': 'Envios',
	'/admin/ingresos': 'Ingresos',
	'/admin/inventario': 'Inventario',
	'/admin/inventario/crear': 'Crear',
	'/admin/inventario/editar': 'Editar',
	'/admin/faqs': 'Preguntas Frecuentes',
	'/admin/faqs/actualizar': 'Actualizar',
	'/admin/nosotros': 'Nosotros',
	'/admin/promociones': 'Promociones',
	'/admin/promociones/crear': 'Crear',
	'/admin/promociones/editar': 'Editar',
	'/admin/banners': 'Banners',
	'/admin/banners/crear': 'Crear',
	'/admin/banners/editar': 'Editar',
	'/admin/colores': 'Colores',
	'/admin/newsletter': 'Newsletter',
	'/admin/newsletter/crear': 'Crear',
	'/admin/newsletter/editar': 'Editar',
	'/admin/newsletter/vistaPrevia': 'Vista previa',
	'/admin/newsletter/ver': 'Ver',
	'/admin/resenias': 'Reseñas',
	'/admin/resenias/actualizar': 'Actualizar',
	'/admin/cancelaciones': 'Politica de cancelaciones',
	'/admin/privacidad': 'Aviso de privacidad',

	// User
	// '/': 'Inicio',
};

export const BreadCrumb = (): JSX.Element => {
	const pathname = usePathname();
	const pathArray = pathname.split('/').filter(x => x);
	return (
		<Breadcrumbs separator='/' aria-label='breadcrumb'>
			{pathArray.map((path, index) => {
				const url = `/${pathArray.slice(0, index + 1).join('/')}`;
				return (
					<Link
						variant='caption'
						key={url}
						color={index === pathArray.length - 1 ? 'text.primary' : 'inherit'}
						href={url}
						underline='hover'
					>
						{NameMap[url]}
					</Link>
				);
			})}
		</Breadcrumbs>
	);
};
