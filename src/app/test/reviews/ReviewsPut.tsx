"use client";
import { Button } from '@mui/material';

export interface Review {
  title: string;
  review: string;
}

async function updateReviews(reviews: Review[]): Promise<void> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/reviews`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ reviews })
  });

  if (!response.ok) {
    throw new Error('Error updating faqs');
  }
}

export const ReviewsPut = (): JSX.Element => {

  const reviews: Review[] = [
    { title: 'Title 2', review: 'Review 2' },
    { title: 'Title 3', review: 'Review 3' },
    { title: 'Title 4', review: 'Review 4' },
  ]


  return (
    <>
      <Button
        onClick={() => {
          updateReviews(reviews).catch(console.error);
        }}
      >
        Update  Reviews
      </Button>

    </>
  );
};