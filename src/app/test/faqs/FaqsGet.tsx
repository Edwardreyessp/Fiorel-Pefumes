async function getFaqs(): Promise<Array<{ question: string; answer: string }>> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/faqs`, {
    next: {
      revalidate: 1,
    },
  });

  if (!response.ok) {
    throw new Error('Error getting faqs');
  }

  const { faqs } = await response.json();
  return faqs;

}

export const FaqsGet = async (): Promise<JSX.Element> => {
  const faqs = await getFaqs();


  return (
    <div>
      {faqs.map(({ question, answer }) => (
        <div key={question}>
          <h3>{question}</h3>
          <p>{answer}</p>
        </div>
      ))}
    </div>
  );
};
