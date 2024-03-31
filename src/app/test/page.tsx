import { Suspense } from 'react';
import { Privacy } from './Privacy';
import { PrivacyText } from './PrivacyText';

export default function PrivacyPage(): JSX.Element {
	return (
		<div>
			<Privacy />
			<h1>Privacy</h1>
			<Suspense fallback={<div>Loading...</div>}>
				<PrivacyText />
			</Suspense>
		</div>
	);
}
