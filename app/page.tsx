'use client';

import { useState } from 'react';
import { SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Button from '@/components/Button';
import NewsContainer from '@/components/NewsContainer';
import InfoPanel from '@/components/InfoPanel';
import Image from 'next/image';
import newspaper from '@/public/newspaper.jpg';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('general');

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <SignedOut>
        <div className="flex flex-col items-center justify-center w-[400px] mx-auto">
          <Image src={newspaper} alt="newspaper" width={400} height={400} />
          <p className="font-bold text-2xl mb-12">
            Get curated news from around the world tailored to your interests
          </p>
          <SignUpButton>
            <Button fullWidth label="Sign Up" />
          </SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex p-4">
          <InfoPanel onCategoryChange={handleCategoryChange} />
          <NewsContainer category={selectedCategory} />
        </div>
      </SignedIn>
    </div>
  );
}
