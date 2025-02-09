import { SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import InfoPanel from '@/components/InfoPanel';
import Button from '@/components/Button';

export default function Home() {
  return (
    <div>
      <SignedOut>
        <div>
          <p>Get the latest news from around the world tailored to your interests</p>
        </div>
        <SignUpButton>
          <Button label="Sign Up" />
        </SignUpButton>
      </SignedOut>
      <SignedIn>
        <InfoPanel />
      </SignedIn>
    </div>
  );
}
