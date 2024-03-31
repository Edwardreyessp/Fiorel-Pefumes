import { type TagData } from '@/app/admin/categorias/Provider';
import type { PerfumeCategory } from '@/entities';
import { db } from '@/firebase/main';
import {
	arrayRemove,
	arrayUnion,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
	updateDoc,
	where,
} from 'firebase/firestore';

export const GET = async (request: Request): Promise<Response> => {
	try {
		const { searchParams } = new URL(request.url);
		const idParent: string | null = searchParams.get('id');

		if (idParent === null) {
			return Response.error();
		}

		const queryFamilies = query(
			collection(db, 'perfumeFamilies'),
			where('idParent', '==', idParent),
		);

		const queryEssences = query(
			collection(db, 'perfumeEssences'),
			// where('idParent', '==', idParent),
		);

		const categoryRef = doc(db, 'perfumeCategories', idParent);
		const categorySnap = await getDoc(categoryRef);
		const categoryData = categorySnap.data();

		const categories: PerfumeCategory = {
			id: categorySnap.id,
			name: categoryData?.name,
			families: [],
		};

		const familiesSnap = await getDocs(queryFamilies);
		familiesSnap.forEach(docSnap => {
			const familyData = docSnap.data();
			categories.families.push({
				id: docSnap.id,
				name: familyData?.name,
				icon: familyData?.icon,
				idParent: familyData?.idParent,
				essences: [],
			});
		});

		const essencesSnap = await getDocs(queryEssences);
		essencesSnap.forEach(docSnap => {
			const essenceData = docSnap.data();
			categories.families.forEach(family => {
				if (essenceData?.idParent === family.id) {
					family.essences.push({
						id: docSnap.id,
						name: essenceData?.name,
						icon: essenceData?.icon,
						idParent: essenceData?.idParent,
					});
				}
			});
		});

		return Response.json(categories, { status: 200 });
	} catch (e) {
		console.error('Error getting privacy policy:', e);
		return Response.error();
	}
};

export const POST = async (request: Request): Promise<Response> => {
	try {
		const req = await request.json();
		const tag: TagData = req.tag;
		const idCollection: string = tag.collection;

		const collectionRef = doc(db, idCollection, tag.tag.id);

		if (idCollection === 'perfumeFamilies') {
			await setDoc(collectionRef, { ...tag.tag, essences: [] });
		} else {
			await setDoc(collectionRef, { ...tag.tag });
		}

		const parentIDCollection =
			idCollection === 'perfumeFamilies'
				? 'perfumeCategories'
				: 'perfumeFamilies';

		const parentRef = doc(db, parentIDCollection, tag.tag.idParent);
		await updateDoc(parentRef, {
			[idCollection === 'perfumeFamilies' ? 'idFamilies' : 'idEssences']:
				arrayUnion(tag.tag.id),
		});

		return new Response('Document added', {
			status: 200,
		});
	} catch (e) {
		console.error('Error getting privacy policy:', e);
		return Response.error();
	}
};

export const PUT = async (request: Request): Promise<Response> => {
	try {
		const req = await request.json();
		const tag: TagData = req.tag;
		const idCollection: string = tag.collection;

		const collectionRef = doc(db, idCollection, tag.tag.id);

		await updateDoc(collectionRef, { name: tag.tag.name, icon: tag.tag.icon });

		return new Response('Document updated', {
			status: 200,
		});
	} catch (e) {
		console.error('Error getting privacy policy:', e);
		return Response.error();
	}
};

export const DELETE = async (request: Request): Promise<Response> => {
	try {
		const req = await request.json();
		const tag: TagData = req.tag;
		const idCollection: string = tag.collection;

		const collectionRef = doc(db, idCollection, tag.tag.id);

		const parentIDCollection =
			idCollection === 'perfumeFamilies'
				? 'perfumeCategories'
				: 'perfumeFamilies';

		const parentRef = doc(db, parentIDCollection, tag.tag.idParent);
		await updateDoc(parentRef, {
			[idCollection === 'perfumeFamilies' ? 'idFamilies' : 'idEssences']:
				arrayRemove(tag.tag.id),
		});

		await deleteDoc(collectionRef);

		return new Response('Document deleted', {
			status: 200,
		});
	} catch (e) {
		console.error('Error getting privacy policy:', e);
		return Response.error();
	}
};
