'use client';

import { useUser, useSession, useOrganization } from '@clerk/nextjs';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import UserInfo from '@/components/UserInfo';
import OrganizationInfo from '@/components/OrganizationInfo';
import SessionInfo from '@/components/SessionInfo';

export default function InfoPanel() {
    const { user, isLoaded: isUserLoaded } = useUser();
    const { session, isLoaded: isSessionLoaded } = useSession();
    const { organization, isLoaded: isOrganizationLoaded } = useOrganization();
    
    return (
        <div className="w-[300px]">
            {isUserLoaded && <UserInfo user={user} icon={<ExpandMoreIcon />} />}
            {isSessionLoaded && <SessionInfo session={session} icon={<ExpandMoreIcon />} />}
            {organization && isOrganizationLoaded && <OrganizationInfo organization={organization} icon={<ExpandMoreIcon />} />}
        </div>
    );
}
