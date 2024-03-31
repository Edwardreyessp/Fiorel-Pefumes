async function getPrivacy(): Promise<string> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/privacy`, {
		next: {
			revalidate: 1,
		},
	});
	const privacyText = await response.json();

	if (!response.ok) {
		throw new Error('Error getting privacy policy');
	}

	// Esperar 3 segundos
	await new Promise(resolve => setTimeout(resolve, 3000));

	return privacyText;
}

export const PrivacyText = async (): Promise<JSX.Element> => {
	const privacyText = await getPrivacy();

	return <div>{privacyText}</div>;
};
