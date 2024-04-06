import { type TagData } from '@/providers/CategoryProvider';
import type { PerfumeCategory } from '@/entities';
import { db } from '@/firebase/main';
import {
	arrayRemove,
	arrayUnion,
	collection,
	deleteDoc,
	doc,
	getDocs,
	query,
	setDoc,
	updateDoc,
} from 'firebase/firestore';

export const getTags = async (): Promise<PerfumeCategory[]> => {
	try {
		const queryCategories = query(collection(db, 'perfumeCategories'));
		const queryFamilies = query(collection(db, 'perfumeFamilies'));
		const queryEssences = query(collection(db, 'perfumeEssences'));
		const categoriesSnap = await getDocs(queryCategories);
		const essencesSnap = await getDocs(queryEssences);
		const familiesSnap = await getDocs(queryFamilies);

		const categories: PerfumeCategory[] = [];

		categoriesSnap.forEach(docSnap => {
			const categoryData = docSnap.data();
			const category: PerfumeCategory = {
				id: docSnap.id,
				name: categoryData.name,
				families: [],
			};

			familiesSnap.forEach(docSnap => {
				const familyData = docSnap.data();
				if (familyData.idParent === category.id) {
					category.families.push({
						id: docSnap.id,
						name: familyData.name,
						icon: familyData.icon,
						idParent: familyData.idParent,
						essences: [],
					});
				}
			});

			essencesSnap.forEach(docSnap => {
				const essenceData = docSnap.data();
				category.families.forEach(family => {
					if (essenceData.idParent === family.id) {
						family.essences.push({
							id: docSnap.id,
							name: essenceData.name,
							icon: essenceData.icon,
							idParent: essenceData.idParent,
						});
					}
				});
			});

			categories.push(category);
		});

		return categories;
	} catch (e) {
		console.error('Error getting privacy policy:', e);
		return [];
	}
};

export const postTag = async (tag: TagData): Promise<Response> => {
	try {
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

export const putTag = async (tag: TagData): Promise<Response> => {
	try {
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

export const deleteTag = async (tag: TagData): Promise<Response> => {
	try {
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
