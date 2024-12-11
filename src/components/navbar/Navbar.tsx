'use client';

import React from 'react'
import SwitchDarkMode from './SwitchDarkMode'
import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SearchComponent from './SearchComponent';

const Navbar = () => {

    return (
        <header className='container mx-auto px-4 md:px-10 py-6 flex justify-end items-center w-full'>
            <div className='flex items-center space-x-1'>
                <SearchComponent />
                <Button asChild variant={'ghost'}>
                    <Link href='https://github.com/thitiphongD' aria-label="Visit Thitiphong's GitHub">
                        <Github />
                    </Link>
                </Button>
                <SwitchDarkMode />
            </div>


        </header>
    )
}

export default Navbar