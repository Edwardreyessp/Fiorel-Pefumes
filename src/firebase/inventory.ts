import type { Perfume } from '@/entities';
import { db } from '@/firebase';
import {
	type DocumentData,
	getDocs,
	collection,
	doc,
	setDoc,
	query,
	orderBy,
	updateDoc,
	deleteDoc,
	type OrderByDirection,
} from 'firebase/firestore';

export const getInventory = async (sort?: string): Promise<DocumentData> => {
	try {
		const stringSort = sort ?? 'name';
		const order = stringSort.split('.')[0];
		const ascendent =
			(stringSort.split('.')[1] as OrderByDirection) ??
			('asc' as OrderByDirection);
		const collectionRef = collection(db, 'perfumes');
		const q = query(collectionRef, orderBy(order ?? 'name', ascendent));

		const querySnapshot = await getDocs(q);
		return querySnapshot.docs.map(doc => doc.data());
	} catch (e) {
		console.error('Error getting privacy policy:', e);
		return Response.error();
	}
};

export const saveInventory = async (perfume: Perfume): Promise<void> => {
	try {
		const docRef = doc(db, 'perfumes', perfume.id);

		const docSnap = {
			...perfume,
			createdAt: new Date(),
			price: Number(perfume.price),
			discount: Number(perfume.discount),
			stock: Number(perfume.stock),
		};

		await setDoc(docRef, docSnap);
	} catch (e) {
		console.error('Error saving privacy policy:', e);
	}
};

export const putInventory = async (perfume: Perfume): Promise<void> => {
	try {
		const docRef = doc(db, 'perfumes', perfume.id);

		const docSnap = {
			...perfume,
			price: Number(perfume.price),
			discount: Number(perfume.discount),
			stock: Number(perfume.stock),
		};

		await updateDoc(docRef, docSnap);
	} catch (e) {
		console.error('Error saving privacy policy:', e);
	}
};

export const deleteInventory = async (id: string): Promise<void> => {
	try {
		const docRef = doc(db, 'perfumes', id);
		await deleteDoc(docRef);
	} catch (e) {
		console.error('Error saving privacy policy:', e);
	}
};
