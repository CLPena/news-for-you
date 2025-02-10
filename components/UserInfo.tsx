'use client';

import { UserResource } from '@clerk/types';
import Accordion from './Accordion';

interface UserInfoProps {
    user: UserResource | null | undefined;
    icon: React.ReactNode;
}

export default function UserInfo({ user, icon }: UserInfoProps) {
    return (
        <Accordion title="User" icon={icon}>
            <li>
                <h3 className="font-bold">Name:</h3>
                <p>{user?.fullName}</p>
            </li>
            <li>
                <h3 className="font-bold">Email:</h3>
                <p>{user?.emailAddresses[0].emailAddress}</p>
            </li>
        </Accordion>
    );
}