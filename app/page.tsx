import { SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import InfoPanel from '@/components/InfoPanel';

export default function Home() {
  return (
    <div>
      <SignedOut>
        <h1 className="text-3xl font-bold">News for You</h1>
        <div>
          <p>Get the latest news from around the world tailored to your interests</p>
        </div>
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <h1 className="text-3xl font-bold">News for You</h1>
        <InfoPanel />
      </SignedIn>
    </div>
  );
}
