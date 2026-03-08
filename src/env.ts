type EnvConfig = {
  NEXT_PUBLIC_BACKEND_URL: string;
};

function getEnvVariable(key: keyof EnvConfig): string {
  const value = process.env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}

export const env: EnvConfig = {
  NEXT_PUBLIC_BACKEND_URL: getEnvVariable('NEXT_PUBLIC_BACKEND_URL'),
};
