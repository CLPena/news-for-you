'use client';

import { useUser, useOrganization, useSession } from '@clerk/nextjs';

export default function UserInfo() {
  const { user, isLoaded: isUserLoaded } = useUser();
  const { organization, isLoaded: isOrganizationLoaded } = useOrganization();
  const { session, isLoaded: isSessionLoaded } = useSession();

  return (
    isUserLoaded && isOrganizationLoaded && isSessionLoaded && (
        <div>
            <h2>User Info</h2>
            <ul>
                <li>
                    <p>Name: {user?.fullName}</p>
                </li>
                <li>
                    <p>Email: {user?.emailAddresses[0].emailAddress}</p>
                </li>
                {organization && (
                    <div>
                        <li>
                            <p>Organization: {organization?.name}</p>
                        </li>
                    <li>
                        <p>Organization ID: {organization?.id}</p>
                    </li>
                </div>
                )}
                <li>
                    <p>Session ID: {session?.id}</p>
                </li>
            </ul>
        </div>
    )
  );
}