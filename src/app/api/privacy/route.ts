import { db } from '@/firebase/main';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

export const GET = async (): Promise<Response> => {
	try {
		const docRef = doc(db, 'admin', 'privacy');
		const docSnap = await getDoc(docRef);

		return Response.json(docSnap.data()?.content, { status: 200 });
	} catch (e) {
		console.error('Error getting privacy policy:', e);
		return Response.error();
	}
};

export const PUT = async (req: Request): Promise<Response> => {
	try {
		const docRef = doc(db, 'admin', 'privacy');
		await updateDoc(docRef, { content: (await req.json()).content });

		return new Response('Privacy updated', {
			status: 200,
		});
	} catch (e) {
		console.error('Error updating privacy policy:', e);
		return Response.error();
	}
};
