import { Suspense } from 'react';
import { FaqsGet } from './FaqsGet';
import { FaqsPut } from './FaqsPut';

export default function PrivacyPage(): JSX.Element {
	return (
		<div>
			<FaqsPut />
			<Suspense fallback={<div>Loading...</div>}>
				<FaqsGet />
			</Suspense>
		</div>
	);
}
