import React from 'react'

const Summary = () => {
    return (
        <div className='flex flex-col gap-4'>
            <h2 className='text-2xl'> Hello! I&apos;m</h2>
            <h1 className='text-4xl md:text-6xl font-semibold'>Thitiphong Srisavat</h1>
            <h1 className='text-2xl md:text-4xl font-semibold'>I build Something for the Web</h1>
            <p className='tracking-widest text-base'>I&apos;m a Full-Stack Developer with expertise in front-end development using Next.js and back-end development using Node.js, along with PostgreSQL for database management. I am passionate about creating web applications that provide seamless user experiences. I also have experience with Object-Relational Mapping (ORM) tools, which enhance database interactions and streamline development processes. Additionally, I am currently expanding my technical skills by studying Golang and Rust.</p>
            <p className='tracking-widest text-base'>In my spare time, I&apos;m usually hiking reading, hanging out, or running</p>
        </div>
    )
}

export default Summary