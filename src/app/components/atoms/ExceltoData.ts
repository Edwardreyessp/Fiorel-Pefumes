// Para poder correr este código necesitas instalar las siguientes dependencias yarn add xlsx
import { type Faq } from '@/entities';
import { type Review } from '@/entities/Review';
import * as XLSX from 'xlsx';

export async function leerExcel(file: File): Promise<Faq[] | null> {
	try {
		const arrayBuffer = await file.arrayBuffer();
		const data = new Uint8Array(arrayBuffer);
		const workbook = XLSX.read(data, { type: 'array' });
		const sheetName = workbook.SheetNames[0];
		const sheet = workbook.Sheets[sheetName];

		// Convertir el contenido del Excel a un arreglo de objetos
		const excelData: Faq[] = XLSX.utils.sheet_to_json(sheet, {
			header: ['question', 'answer'],
		});

		return excelData;
	} catch (error) {
		console.error('Error al leer el archivo Excel:', error);
		return null;
	}
}

export async function leerExcel2(file: File): Promise<Review[] | null> {
	try {
		const arrayBuffer = await file.arrayBuffer();
		const data = new Uint8Array(arrayBuffer);
		const workbook = XLSX.read(data, { type: 'array' });
		const sheetName = workbook.SheetNames[0];
		const sheet = workbook.Sheets[sheetName];

		// Limitar la lectura a 2 filas y 3 columnas
		const excelData: Review[] = XLSX.utils.sheet_to_json(sheet, {
			header: ['title', 'review'],
		});

		return excelData;
	} catch (error) {
		console.error('Error al leer el archivo Excel:', error);
		return null;
	}
}
