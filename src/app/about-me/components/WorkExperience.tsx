import { dataExperience } from '@/app/data'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import React from 'react'

const WorkExperience = () => {
    return (
        <ScrollArea className="md:h-[80vh]">
            <>
                <p className="block text-2xl font-bold mb-6 text-emerald-500 dark:text-[#64ffda] md:hidden">
                    Experience
                </p>
                {dataExperience.map((experience) => (
                    <Link key={experience.id}
                        className=" md:p-4 flex flex-col md:flex-row mb-10 cursor-pointer hover:bg-white/10 hover:backdrop-blur-lg hover:brightness-90 group w-full rounded-lg"
                        href={experience.link}
                    >
                        <div className='w-full md:w-1/4'>
                            <p className="text-xs font-bold mt-2">{experience.date}</p>
                        </div>
                        <div className='w-full md:w-3/4'>
                            <p className="mb-2 text-2xl leading-normal font-semibold group-hover:text-emerald-500 dark:group-hover:text-[#64ffda]">{experience.position}, {experience.company}</p>
                            <p className='tracking-wide leading-normal'>{experience.description}</p>
                            <div className="mt-4 flex gap-2 flex-wrap">
                                {experience.stack.map((tech, index) => (
                                    <Badge key={index} className="text-xs bg-[#3ecf8e] dark:bg-[#64ffda]">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </>
        </ScrollArea>
    )
}

export default WorkExperience