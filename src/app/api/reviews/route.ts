import { db } from '@/firebase/main';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const GET = async (): Promise<Response> => {
	try {
		const docRef = doc(db, 'admin', 'reviews');
		const docSnap = await getDoc(docRef);

		return Response.json(docSnap.data(), { status: 200 });
	} catch (e) {
		console.error('Error getting reviews', e);
		return Response.error();
	}
};

export const PUT = async (req: Request): Promise<Response> => {
	try {
		const docRef = doc(db, 'admin', 'reviews');
		await updateDoc(docRef, { reviews: (await req.json()).reviews });

		return new Response('Reviews update', {
			status: 200,
		});
	} catch (e) {
		console.error('Error updating reviews', e);
		return Response.error();
	}
};
