'use client';

import React from 'react'
import SwitchDarkMode from './SwitchDarkMode'
import { Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SearchComponent from './SearchComponent';

const Navbar = () => {
    return (
        <header className='px-4 py-6 md:px-10 flex justify-end items-center w-full'>
            <div className='flex items-center space-x-1'>
                <SearchComponent />
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