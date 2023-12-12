'use client';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      className="absolute top-4 left-4 z-10 text-4xl"
      onClick={() => router.back()}
    >
      ⬅
    </button>
  );
};

export default BackButton;
