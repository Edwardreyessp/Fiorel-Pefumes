"use client";
import { Button } from '@mui/material';

export interface FAQ {
  answer: string;
  question: string;
}

async function updateFaqs(faqs: FAQ[]): Promise<void> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/faqs`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ faqs })
  });

  if (!response.ok) {
    throw new Error('Error updating faqs');
  }
}

export const FaqsPut = (): JSX.Element => {

  const faqs: FAQ[] = [{
    answer: "answer",
    question: "question"
  },
  {
    answer: "answer",
    question: "question"
  }
  ]


  return (
    <>
      <Button
        onClick={() => {
          updateFaqs(faqs).catch(console.error);
        }}
      >
        Update Faqs
      </Button>

    </>
  );
};
