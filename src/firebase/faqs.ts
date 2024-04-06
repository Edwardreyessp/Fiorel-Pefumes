import { type Faq } from '@/entities';
import { db } from '@/firebase/main';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

// Modifica la función getFAQS para que devuelva directamente los datos de las preguntas frecuentes
export const getFAQS = async (): Promise<Faq[]> => {
	try {
		const docRef = doc(db, 'admin', 'faqs');
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			const faqsData = docSnap.data();
			if (Array.isArray(faqsData?.faqs)) {
				return faqsData.faqs as Faq[]; // Return the faqs array
			} else {
				console.error('Invalid data structure for faqs:', faqsData);
				throw new Error('Invalid data structure for faqs'); // Throw error if data structure is invalid
			}
		} else {
			console.error('No faqs document found');
			throw new Error('No faqs document found'); // Throw error if no document is found
		}
	} catch (e) {
		console.error('Error getting faqs:', e);
		throw e; // Propaga el error para que pueda ser manejado en el componente
	}
};

export const updateFAQS = async (newData: Faq[]): Promise<void> => {
	try {
		const docRef = doc(db, 'admin', 'faqs');
		await updateDoc(docRef, {
			faqs: newData,
		}); // Pass newData as a plain JavaScript object
		console.log('FAQs updated successfully');
	} catch (error) {
		console.error('Error updating FAQs:', error);
		throw error;
	}
};
