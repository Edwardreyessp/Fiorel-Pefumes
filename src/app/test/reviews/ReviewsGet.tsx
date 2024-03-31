async function getReviews(): Promise<Array<{ title: string; review: string }>> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/reviews`, {
    next: {
      revalidate: 1,
    },
  });

  if (!response.ok) {
    throw new Error('Error getting reviews');
  }

  const { reviews } = await response.json();
  return reviews;

}

export const ReviewsGet = async (): Promise<JSX.Element> => {
  const reviews = await getReviews();


  return (
    <div>
      {reviews.map(({ title, review }) => (
        <div key={title}>
          <h3>{title}</h3>
          <p>{review}</p>
        </div>
      ))}
    </div>
  );
};