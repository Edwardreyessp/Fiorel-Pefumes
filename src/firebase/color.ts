import { db } from '@/firebase';
import { type DocumentData, doc, getDoc } from 'firebase/firestore';
import { setDoc } from 'firebase/firestore';

export const getColor = async (): Promise<DocumentData> => {
	try {
		const docRef = doc(db, 'admin', 'color');
		const docSnap = await getDoc(docRef);

		if (!docSnap.exists()) {
			console.error('No such document');
			return Response.error();
		}
		return docSnap.data();
	} catch (e) {
		console.error('Error getting color:', e);
		return Response.error();
	}
};

export const putColor = async (color: string): Promise<Response> => {
	try {
		const docRef = doc(db, 'admin', 'color');
		await setDoc(docRef, { color });

		return new Response('Color updated');
	} catch (e) {
		console.error('Error updating color:', e);
		return Response.error();
	}
};
