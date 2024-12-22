'use client';

import React from 'react';
import { Github, Linkedin, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import SwitchDarkMode from './SwitchDarkMode';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter, SheetClose } from '@/components/ui/sheet';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

type LinkNav = {
    href: string,
    label: string
}

const links: LinkNav[] = [
    { href: '/posts', label: 'Post' },
    { href: '/board', label: 'Board' }
];

const Navbar = () => {
    return (
        <header className="px-4 py-6 md:px-10 flex">

            <div className="hidden md:flex items-center md:justify-between space-x-1 w-full">
                <div className='flex items-end gap-4'>
                    <Link href={'/'} className='text-2xl font-extrabold hidden md:block text-emerald-500 dark:text-[#64ffda]'>D.</Link>
                    {links.map((link, index) => (
                        <Link key={index} href={link.href} aria-label={link.label} className='text-sm font-semibold hover:text-emerald-500 dark:hover:text-[#64ffda]'>
                            {link.label}
                        </Link>
                    ))}
                </div>
                <div className='flex items-center gap-4'>

                    {/* <Link href="/about-me" aria-label="About Thitiphong" className="px-2">
                        <Avatar className="w-8 h-8">
                            <AvatarImage src="https://avatars.githubusercontent.com/u/80618380?v=4" alt="@thitiphongD" />
                        </Avatar>
                    </Link> */}
                    <Button asChild variant="ghost">
                        <Link href="https://github.com/thitiphongD" aria-label="Visit Thitiphong's GitHub">
                            <Github />
                        </Link>
                    </Button>
                    <Button asChild variant="ghost">
                        <Link href="https://www.linkedin.com/in/thitiphong-srisavat-36b264239" aria-label="Visit Thitiphong's Linkedin">
                            <Linkedin />
                        </Link>
                    </Button>
                    <SwitchDarkMode />
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>

            </div>

            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" aria-label="Open Menu">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent className='w-full'>
                        <SheetHeader>
                            <SheetTitle>Menu</SheetTitle>
                            <SheetDescription>
                                Navigate through the options below.
                            </SheetDescription>
                        </SheetHeader>
                        <div className="flex flex-col gap-4 py-4 justify-start">
                            <Button asChild variant="ghost">
                                <Link href="/about-me" aria-label="About Thitiphong" className="flex items-center gap-2">
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/80618380?v=4" alt="@thitiphongD" />
                                        <AvatarFallback>D</AvatarFallback>
                                    </Avatar>
                                </Link>
                            </Button>

                            <Button asChild variant="ghost">
                                <Link href="https://github.com/thitiphongD" aria-label="Visit Thitiphong's GitHub">
                                    <Github className="mr-2" /> GitHub
                                </Link>
                            </Button>
                            <Button asChild variant="ghost">
                                <Link href="https://www.linkedin.com/in/thitiphong-srisavat-36b264239" aria-label="Visit Thitiphong's Linkedin">
                                    <Linkedin className="mr-2" /> LinkedIn
                                </Link>
                            </Button>
                            <div className="flex justify-start">
                                <SwitchDarkMode />
                            </div>
                        </div>
                        <SheetFooter>
                            <SheetClose asChild>
                                <Button variant="outline" aria-label="Close Menu">
                                    Close
                                </Button>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
};

export default Navbar;
