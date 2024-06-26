import { type Perfume } from './Perfume';

export interface Ingreso {
	_id: string;
	_idPerfume: Perfume['id'];
	comision: number;
	date: Date;
	netIncome: number;
	grossIncome: number;
	totalIncome: number;
}
