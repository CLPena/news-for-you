'use client';

import Accordion from '@/components/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { UserResource } from '@clerk/types';

interface CategorySelectorProps {
    onSelect: (category: string) => void;
    user: UserResource | null;
}

const categories = [
    'general',
    'business',
    'entertainment',
    'health',
    'science',
    'sports',
    'technology'
];

export default function CategorySelector({ onSelect, user }: CategorySelectorProps) {
    const defaultCategory = user?.unsafeMetadata?.preferredCategory as string || 'general';

    return (
        <Accordion title="Categories" icon={<ExpandMoreIcon />} defaultExpanded>
            {categories.map(category => (
                <li key={category}>
                    <label 
                        className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-[#2e2e2e] rounded-md cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="category"
                            value={category}
                            defaultChecked={category === defaultCategory}
                            onChange={() => onSelect(category)}
                            className="mr-3"
                        />
                        <span className="capitalize">{category}</span>
                    </label>
                </li>
            ))}
        </Accordion>
    );
}
