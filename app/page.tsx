import { SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs';
import UserInfo from '@/components/UserInfo';
export default function Home() {
  return (
    <div>
      <SignedOut>
        <h1>News for You</h1>
        <div>
          <p>Get the latest news from around the world tailored to your interests</p>
        </div>
        <SignUpButton />
      </SignedOut>
      <SignedIn>
        <h1>News for You</h1>
        <div>
          <UserInfo />
        </div>
      </SignedIn>
    </div>
  );
}
