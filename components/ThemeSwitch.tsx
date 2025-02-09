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
                    '& .MuiSwitch-switchBase': {
                        '&.Mui-checked': {
                            '& + .MuiSwitch-track': {
                                backgroundColor: '#7F7F7F'
                            },
                            '& .MuiSwitch-thumb': {
                                backgroundColor: '#ffffff'
                            }
                        },
                        '& + .MuiSwitch-track': {
                            backgroundColor: '#A7A7AB'
                        },
                        '& .MuiSwitch-thumb': {
                            backgroundColor: '#0a0a0a'
                        }
                    }
                }}
            />
            <DarkModeIcon aria-hidden="true" />
        </Stack>
    );
}