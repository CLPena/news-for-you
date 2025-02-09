'use client';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { Switch, Stack } from '@mui/material';
import { useTheme } from 'next-themes';

export default function ThemeSwitch() {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark';
    
    return (
        <Stack direction="row" spacing={1} alignItems="center">
            <LightModeIcon aria-hidden="true" />
            <Switch
                checked={isDark}
                onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
                inputProps={{
                    'aria-label': 'Toggle dark mode',
                    role: 'switch',
                    'aria-checked': isDark
                }}
                sx={{
                    '& .MuiSwitch-track': {
                        bgcolor: isDark ? '#E5E7EB' : '#374151'
                    },
                    '& .MuiSwitch-thumb': {
                        bgcolor: isDark ? '#FFFFFF' : '#0F172A'
                    }
                }}
            />
            <DarkModeIcon aria-hidden="true" />
        </Stack>
    );
}