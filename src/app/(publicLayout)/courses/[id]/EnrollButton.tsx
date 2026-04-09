'use client';

import { useState } from 'react';
import { toast } from 'sonner';

interface Props {
  courseId: string;
  price: number;
  status: string;
}

export default function EnrollButton({ courseId, price, status }: Props) {
  const [loading, setLoading] = useState(false);

  const handleEnroll = async () => {
    try {
      setLoading(true);

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/payment/create-checkout-session`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            courseId,
            price,
            userId: 'USER_ID',
          }),
        },
      );

      const data = await res.json();

      //  API fail show toast
      if (!res.ok || !data.success) {
        console.error('Payment Error:', data);

        let message = 'Payment failed. Please try again.';

        if (res.status === 404) {
          message = 'Payment service is unavailable.';
        } else if (res.status === 500) {
          message = 'Server error. Try again later.';
        }

        toast.error(message);
        return;
      }
      // success -> redirect
      if (data.url) {
        toast.success('Redirecting to payment...');
        window.location.href = data.url;
      }
    } catch (error) {
      console.error(error);
      toast.error('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleEnroll}
      disabled={status !== 'PUBLISHED' || loading}
      className={`w-full px-6 py-4 rounded-xl font-semibold ${
        status === 'PUBLISHED'
          ? 'bg-green-500 text-black'
          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
      }`}
    >
      {loading
        ? 'Processing...'
        : status === 'PUBLISHED'
          ? 'Enroll Now'
          : 'Coming Soon'}
    </button>
  );
}
