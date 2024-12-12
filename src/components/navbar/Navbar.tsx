'use client';

import React from 'react'
import SwitchDarkMode from './SwitchDarkMode'
import { Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SearchComponent from './SearchComponent';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { usePathname } from 'next/navigation';

type LinkNav = {
    href: string,
    label: string
}

const links: LinkNav[] = [
    { href: '/posts', label: 'Post' },
    { href: '/posts/new', label: 'Create Post' }
];

const Navbar = () => {
    const pathname = usePathname();
    return (
        <header className='px-4 py-6 md:px-10 flex justify-between items-center w-full'>
            <div className='flex items-center gap-4'>
                <Link href={'/'} className='text-2xl font-extrabold hidden md:block text-emerald-500 dark:text-[#64ffda]'>D.</Link>
                {links.map((link: LinkNav) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={`text-sm ${pathname === link.href ? 'text-emerald-500 dark:text-[#64ffda] font-bold' : 'text-gray-600 dark:text-gray-300 '}`}
                    >
                        {link.label}
                    </Link>
                ))}
            </div>
            <div className='flex items-center space-x-1'>
                <SearchComponent />
                <Link href='/about-me' aria-label="About Thitiphong" className='px-2'>
                    <Avatar className='w-8 h-8'>
                        <AvatarImage src="https://avatars.githubusercontent.com/u/80618380?v=4" alt="@thitiphongD" />
                        <AvatarFallback>D</AvatarFallback>
                    </Avatar>
                </Link>
                <Button asChild variant={'ghost'}>
                    <Link href='https://github.com/thitiphongD' aria-label="Visit Thitiphong's GitHub">
                        <Github />
                    </Link>
                </Button>
                <Button asChild variant={'ghost'}>
                    <Link href='https://www.linkedin.com/in/thitiphong-srisavat-36b264239' aria-label="Visit Thitiphong's Linkedin">
                        <Linkedin />
                    </Link>
                </Button>
                <SwitchDarkMode />
            </div>
        </header>
    )
}

export default Navbar