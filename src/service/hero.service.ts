export const getHeroData = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/hero/3b67800f-77e6-43e6-a132-3b2c230d628e`,
    {
      cache: 'no-store', // always fresh data
    },
  );

  if (!res.ok) {
    throw new Error('Failed to fetch hero data');
  }

  return res.json();
};
