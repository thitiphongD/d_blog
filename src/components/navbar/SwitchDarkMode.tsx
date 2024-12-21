"use client";
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useState, useEffect } from 'react';

const SwitchDarkMode = () => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleClick = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    };

    if (!mounted) return null;

    return (
        <Button variant={'ghost'} onClick={handleClick} className='hidden md:block'>
            {theme === 'dark' ? <Sun /> : <Moon />}
        </Button>
    );
};

export default SwitchDarkMode;