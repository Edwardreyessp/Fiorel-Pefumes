import { type Review } from '@/entities/Review';
import { db } from '@/firebase/main';
import { doc, getDoc, updateDoc } from 'firebase/firestore';

// Modifica la función getFAQS para que devuelva directamente los datos de las preguntas frecuentes
export const getReviews = async (): Promise<Review[]> => {
	try {
		const docRef = doc(db, 'admin', 'reviews');
		const docSnap = await getDoc(docRef);

		if (docSnap.exists()) {
			const ReviewsData = docSnap.data();
			if (Array.isArray(ReviewsData?.reviews)) {
				return ReviewsData.reviews as Review[]; // Return the reviews array
			} else {
				console.error('Invalid data structure for reviews:', ReviewsData);
				throw new Error('Invalid data structure for reviews'); // Throw error if data structure is invalid
			}
		} else {
			console.error('No reviews document found');
			throw new Error('No reviews document found'); // Throw error if no document is found
		}
	} catch (e) {
		console.error('Error getting reviews:', e);
		throw e; // Propaga el error para que pueda ser manejado en el componente
	}
};

export const updateReviews = async (newData: Review[]): Promise<void> => {
	try {
		const docRef = doc(db, 'admin', 'reviews');
		await updateDoc(docRef, {
			reviews: newData,
		}); // Pass newData as a plain JavaScript object
		console.log('Reviews updated successfully');
	} catch (error) {
		console.error('Error updating Reviews:', error);
		throw error;
	}
};
