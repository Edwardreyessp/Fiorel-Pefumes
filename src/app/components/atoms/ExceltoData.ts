// Para poder correr este código necesitas instalar las siguientes dependencias yarn add xlsx
import { type ReactNode } from 'react';
import * as XLSX from 'xlsx';

export interface PreguntaRespuesta {
	// Para poder renderizar HTML
	Respuesta: ReactNode;
	Pregunta: ReactNode;
	// Para poder guardar en un archivo JSON
	pregunta: string;
	respuesta: string;
}

export async function leerExcel(
	file: File,
): Promise<PreguntaRespuesta[] | null> {
	try {
		const arrayBuffer = await file.arrayBuffer();
		const data = new Uint8Array(arrayBuffer);
		const workbook = XLSX.read(data, { type: 'array' });
		const sheetName = workbook.SheetNames[0];
		const sheet = workbook.Sheets[sheetName];

		// Convertir el contenido del Excel a un arreglo de objetos
		const excelData: PreguntaRespuesta[] = XLSX.utils.sheet_to_json(sheet, {
			header: ['Pregunta', 'Respuesta'],
		});

		console.log(excelData);

		return excelData;
	} catch (error) {
		console.error('Error al leer el archivo Excel:', error);
		return null;
	}
}
