'use client';

import { OrganizationResource } from '@clerk/types';
import Accordion from './Accordion';

interface OrganizationInfoProps {
    organization: OrganizationResource | null | undefined;
    icon: React.ReactNode;
}

export default function OrganizationInfo({ organization, icon }: OrganizationInfoProps) {
    return (
        <Accordion title="Organization" icon={icon}>
            <li>
                <h3 className="font-bold">Organization:</h3>
                <p>{organization?.name}</p>
            </li>
            <li>
                <h3 className="font-bold">Organization ID:</h3>
                <p>{organization?.id}</p>
            </li>
        </Accordion>
    );
}