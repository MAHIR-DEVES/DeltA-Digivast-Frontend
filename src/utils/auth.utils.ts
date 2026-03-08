export const getStoredToken = (): string | null => {
  if (typeof window === 'undefined') return null;

  return (
    localStorage.getItem('accessToken') || sessionStorage.getItem('accessToken')
  );
};

export const getStoredUser = () => {
  if (typeof window === 'undefined') return null;

  const user = localStorage.getItem('user') || sessionStorage.getItem('user');

  return user ? JSON.parse(user) : null;
};

export const clearAuthData = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('user');
  sessionStorage.removeItem('accessToken');
  sessionStorage.removeItem('user');
};
