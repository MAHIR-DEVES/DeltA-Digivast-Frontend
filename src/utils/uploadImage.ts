// utils/uploadImage.ts
import axios from 'axios';

const IMGBB_API_KEY = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

export const uploadImage = async (file: File): Promise<string> => {
  if (!IMGBB_API_KEY) throw new Error('ImgBB API key not found');

  const base64 = await toBase64(file);
  const formData = new FormData();
  formData.append('image', base64.split(',')[1]); // remove data:image/png;base64,

  const response = await axios.post(
    `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`,
    formData,
  );

  return response.data.data.url;
};

// Helper: File to base64
const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
  });
