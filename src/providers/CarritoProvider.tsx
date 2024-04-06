'use client';
import type { Carrito, CarritoItem } from '@/entities';
import { createContext, useState } from 'react';

interface CarritoContextType {
	carritoGlobal: Carrito;
	addItemToCart: (item: CarritoItem) => void;
	removeItemFromCarrito: (index: number) => void;
	setCarritoGlobal: (carrito: Carrito) => void;
	clearCarrito: () => void;
}

interface Props {
	children: React.ReactNode;
}

export const CarritoContext = createContext<CarritoContextType>({
	carritoGlobal: { subtotal: '0', envio: '799', items: [] },
	addItemToCart: () => {},
	removeItemFromCarrito: () => {},
	clearCarrito: () => {},
	setCarritoGlobal: () => {},
});

export const CarritoProvider = ({ children }: Props): JSX.Element => {
	const [carritoGlobal, setCarritoGlobal] = useState<Carrito>({
		subtotal: '0',
		envio: '799', // TODO: Change this to a constant
		items: [],
	});

	// TODO: Recuperar carrito del localStorage o DB

	const addItemToCart = (item: CarritoItem): void => {
		if (carritoGlobal.items.length === 0) {
			setCarritoGlobal({
				subtotal: item.item.price.toString(),
				envio: '799', // TODO: Change this to a constant
				items: [item],
			});
			return;
		}

		const newCarrito: CarritoItem[] = [...carritoGlobal?.items, item];
		const newSubtotal = newCarrito.reduce(
			(acc, curr) => acc + curr.item.price * curr.quantity,
			0,
		);
		const newEnvio = newSubtotal >= 799 ? '0' : '799'; // TODO: Change this to a constant
		setCarritoGlobal({
			...carritoGlobal,
			subtotal: newSubtotal.toString(),
			envio: newEnvio,
			items: newCarrito,
		});
	};

	const clearCarrito = (): void => {
		setCarritoGlobal({
			subtotal: '0',
			envio: '799', // TODO: Change this to a constant
			items: [],
		});
	};

	const removeItemFromCarrito = (index: number): void => {
		if (carritoGlobal.items.length === 0) {
			return;
		}

		const newCarrito: CarritoItem[] = [...carritoGlobal.items];
		newCarrito.splice(index, 1);
		setCarritoGlobal({ ...carritoGlobal, items: newCarrito });
	};

	return (
		<CarritoContext.Provider
			value={{
				carritoGlobal,
				setCarritoGlobal,
				addItemToCart,
				clearCarrito,
				removeItemFromCarrito,
			}}
		>
			{children}
		</CarritoContext.Provider>
	);
};
