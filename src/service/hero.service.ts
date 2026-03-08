export const getHeroData = async () => {
  const res = await fetch(
    'http://localhost:5000/api/v1/hero/58b384ac-f06b-4b18-8429-18771238ede0',
    {
      cache: 'no-store', // always fresh data
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch hero data');
  }

  return res.json();
};
