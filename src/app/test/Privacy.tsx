'use client';
import { Button } from '@mui/material';
import { useState } from 'react';

async function updatePrivacy(content: string): Promise<void> {
	const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/privacy`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ content }),
	});

	if (!response.ok) {
		throw new Error('Error updating privacy policy');
	}
}

export const Privacy = (): JSX.Element => {
	const [text, setText] = useState('');
	return (
		<>
			<textarea
				onChange={e => {
					setText(e.target.value);
				}}
				defaultValue={text}
			/>
			<Button
				onClick={() => {
					updatePrivacy(text).catch(console.error);
				}}
			>
				Update Privacy
			</Button>
		</>
	);
};
