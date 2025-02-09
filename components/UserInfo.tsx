'use client';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { UserResource } from '@clerk/types';

interface UserInfoProps {
    user: UserResource | null | undefined;
    icon: React.ReactNode;
}

export default function UserInfo({ user, icon }: UserInfoProps) {
    return (
        <Accordion>
            <AccordionSummary
                aria-controls="user-info-content"
                id="user-info-header"
                expandIcon={icon}
            >
                <h2 className="font-bold">User</h2>
            </AccordionSummary>
            <AccordionDetails>
                <ul className="[&_p]:break-words">
                    <li>
                        <h3 className="font-bold">Name:</h3>
                        <p> {user?.fullName}</p>
                    </li>
                    <li>
                        <h3 className="font-bold">Email:</h3>
                        <p> {user?.emailAddresses[0].emailAddress}</p>
                    </li>
                </ul>
            </AccordionDetails>
        </Accordion>
    )
}