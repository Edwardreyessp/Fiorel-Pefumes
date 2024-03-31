import { db } from '@/firebase/main';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const GET = async (): Promise<Response> => {
	try {
		const docRef = doc(db, 'admin', 'faqs');
		const docSnap = await getDoc(docRef);

		return Response.json(docSnap.data(), { status: 200 });
	} catch (e) {
		console.error('Error getting faqs:', e);
		return Response.error();
	}
};

export const PUT = async (req: Request): Promise<Response> => {
	try {
		const docRef = doc(db, 'admin', 'faqs');
		await updateDoc(docRef, { faqs: (await req.json()).faqs });

		return new Response('Faqs updated', {
			status: 200,
		});
	} catch (e) {
		console.error('Error updating privacy policy:', e);
		return Response.error();
	}
};
