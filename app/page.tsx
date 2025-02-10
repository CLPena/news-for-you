import { SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import InfoPanel from '@/components/InfoPanel';
import Button from '@/components/Button';
import NewsContainer from '@/components/NewsContainer';
import Image from 'next/image';
import newspaper from '@/public/newspaper.jpg';

export default function Home() {
  return (
    <div>
      <SignedOut>
        <div className="flex flex-col items-center justify-center w-[400px] mx-auto">
          <Image src={newspaper} alt="newspaper" width={400} height={400} />
          <p className="font-bold text-2xl mb-12">
            Get the latest news from around the world tailored to your interests
          </p>
          <SignUpButton>
            <Button fullWidth label="Sign Up" />
          </SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex p-4">
          <InfoPanel />
          <NewsContainer category="business" />
        </div>
      </SignedIn>
    </div>
  );
}
