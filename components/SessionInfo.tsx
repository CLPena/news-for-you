'use client';

import { SessionResource } from '@clerk/types';
import Accordion from './Accordion';

interface SessionInfoProps {
    session: SessionResource | null | undefined;
    icon: React.ReactNode;
}

export default function SessionInfo({ session, icon }: SessionInfoProps) {
    return (
        <Accordion title="Session" icon={icon}>
            <li>
                <h3 className="font-bold">Session ID:</h3>
                <p>{session?.id}</p>
            </li>
        </Accordion>
    );
}