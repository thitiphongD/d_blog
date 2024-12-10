'use client';

import React from 'react'
import SwitchDarkMode from './SwitchDarkMode'
import { Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SearchComponent from './SearchComponent';

const Navbar = () => {

    return (
        <header className='container mx-auto px-10 py-6 flex justify-between items-center w-full'>
            <p className="text-2xl font-extrabold">
                <span className="hidden sm:inline mr-1">Thitiphong</span>
                <span className="inline sm:hidden md:inline mr-1">D.</span>
                <span className="hidden lg:inline">Srisavat</span>
            </p>
            <div className='flex items-center space-x-1 justify-end'>
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