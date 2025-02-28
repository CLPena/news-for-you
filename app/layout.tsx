import type { Metadata } from 'next';
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton, OrganizationSwitcher } from '@clerk/nextjs';
import { ThemeProvider } from '../providers/theme-provider';
import ClerkProvider from '../providers/clerk-provider';
import { Geist, Geist_Mono } from 'next/font/google';
import ThemeSwitch from '@/components/ThemeSwitch';
import Button from '@/components/Button';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'News for You',
  description: 'Curated news from around the world tailored to your interests',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ClerkProvider>
            <header className="flex justify-end items-center p-4 gap-4 h-16">
              <div className="flex items-center gap-4 w-full">
                <SignedOut>
                <div className="flex items-center justify-center w-full relative">
                  <h1 className="text-3xl font-bold">News for You</h1>
                  <div className="absolute right-0 flex items-center gap-4">
                    <SignInButton>
                      <Button label="Sign In" />
                    </SignInButton>
                    <SignUpButton>
                      <Button label="Sign Up" />
                    </SignUpButton>
                  </div>
                  </div>
                </SignedOut>
                <SignedIn>
                  <div className="flex items-center justify-between w-full">
                    <ThemeSwitch />
                    <h1 className="text-3xl font-bold">News for You</h1>
                    <div className="flex items-center gap-4">
                      <OrganizationSwitcher />
                      <UserButton />
                    </div>
                  </div>
                  </SignedIn>
              </div>
            </header>
            {children}
          </ClerkProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
