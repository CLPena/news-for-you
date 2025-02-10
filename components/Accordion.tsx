'use client';

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { useTheme } from 'next-themes';
import { ReactNode } from 'react';

interface AccordionProps {
    title: string;
    icon: ReactNode;
    children: ReactNode;
}

export default function Accordion({ title, icon, children }: AccordionProps) {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <MuiAccordion 
            sx={{
                backgroundColor: isDark ? '#1e1e1e' : '#fafafa',
                color: isDark ? '#f4f4f5' : '#0a0a0a',
                boxShadow: 'none',
                borderTop: isDark ? '1px solid #333333' : '1px solid #e5e5e5',
                borderBottom: isDark ? '1px solid #333333' : '1px solid #e5e5e5',
                '&:not(:last-child)': {
                    borderBottom: 'none',
                },
                '& .MuiAccordionSummary-expandIconWrapper': {
                    color: isDark ? '#f4f4f5' : '#0a0a0a'
                }
            }}
        >
            <MuiAccordionSummary
                expandIcon={icon}
                aria-controls={`${title.toLowerCase()}-content`}
                id={`${title.toLowerCase()}-header`}
            >
                <h2 className="font-bold">{title}</h2>
            </MuiAccordionSummary>
            <MuiAccordionDetails>
                <ul className="[&_p]:break-words">
                    {children}
                </ul>
            </MuiAccordionDetails>
        </MuiAccordion>
    );
}
