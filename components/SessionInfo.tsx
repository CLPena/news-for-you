'use client';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { SessionResource } from '@clerk/types';

interface SessionInfoProps {
    session: SessionResource | null | undefined;
    icon: React.ReactNode;
}

export default function SessionInfo({ session, icon }: SessionInfoProps) {
    return (
        <Accordion>
            <AccordionSummary
                aria-controls="user-info-content"
                id="user-info-header"
                expandIcon={icon}
            >
                <h2 className="font-bold">Session</h2>
            </AccordionSummary>
            <AccordionDetails>
                <ul className="[&_p]:break-words">
                    <li>
                        <h3 className="font-bold">Session ID:</h3>
                        <p> {session?.id}</p>
                    </li>
                </ul>
            </AccordionDetails>
        </Accordion>
    )
}