'use client';

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const ButtonFields = () => {

    const onDownload = () => {
        const pdfUrl = '/thitiphong_resume.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <>
            <Button
                onClick={onDownload}
                className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-emerald-100 rounded hover:bg-white group py-1.5 px-2.5">
                <span className="w-56 h-48 rounded bg-emerald-500 dark:bg-[#64ffda] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="font-bold relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white dark:group-hover:text-black">Resume</span>
            </Button>
            <Button className="btn relative inline-flex items-center justify-start overflow-hidden font-medium transition-all bg-emerald-100 rounded hover:bg-white group py-1.5 px-2.5" asChild>
                <Link href='/blogs'>
                    <span className="w-56 h-48 rounded bg-emerald-500 dark:bg-[#64ffda] absolute bottom-0 left-0 translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                    <span className="font-bold relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white dark:group-hover:text-black">Read my blogs</span>
                </Link>
            </Button>
        </>
    )
}

export default ButtonFields