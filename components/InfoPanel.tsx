'use client';

import { useUser, useSession, useOrganization } from '@clerk/nextjs';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import CategorySelector from '@/components/CategorySelector';
import UserInfo from '@/components/UserInfo';
import OrganizationInfo from '@/components/OrganizationInfo';
import SessionInfo from '@/components/SessionInfo';

interface InfoPanelProps {
    onCategoryChange: (category: string) => void;
}

export default function InfoPanel({ onCategoryChange }: InfoPanelProps) {
    const { user, isLoaded: isUserLoaded } = useUser();
    const { session, isLoaded: isSessionLoaded } = useSession();
    const { organization, isLoaded: isOrganizationLoaded } = useOrganization();
    
    return (
        <aside className="w-[300px]">
            <CategorySelector onSelect={onCategoryChange} />
            {isUserLoaded && <UserInfo user={user} icon={<ExpandMoreIcon />} />}
            {isSessionLoaded && <SessionInfo session={session} icon={<ExpandMoreIcon />} />}
            {organization && isOrganizationLoaded && <OrganizationInfo organization={organization} icon={<ExpandMoreIcon />} />}
        </aside>
    );
}
