'use client';

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { OrganizationResource } from '@clerk/types';

interface OrganizationInfoProps {
    organization: OrganizationResource | null | undefined;
    icon: React.ReactNode;
}

export default function OrganizationInfo({ organization, icon }: OrganizationInfoProps) {
    return (
        <Accordion>
            <AccordionSummary
                aria-controls="organization-info-content"
                id="organization-info-header"
                expandIcon={icon}
            >
                <h2 className="font-bold">Organization</h2>
            </AccordionSummary>
            <AccordionDetails>
                <ul className="[&_p]:break-words">
                    <li>
                        <h3 className="font-bold">Organization:</h3>
                        <p> {organization?.name}</p>
                    </li>
                    <li>
                        <h3 className="font-bold">Organization ID:</h3>
                        <p> {organization?.id}</p>
                    </li>
                </ul>
            </AccordionDetails>
        </Accordion>
    )
}