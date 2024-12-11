import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import React from 'react'
import { dataExperience } from '../data'

const WorkExperience = () => {
    return (
        <ScrollArea className="md:h-[80vh]">
            {dataExperience.map((experience) => (
                <Link key={experience.id}
                    className="gap-2 py-2 flex flex-col md:flex-row mb-4 cursor-pointer hover:bg-white/10 hover:backdrop-blur-lg hover:brightness-90 group w-full"
                    href={experience.link}
                >
                    <div className='w-full md:w-1/4'>
                        <p className="text-xs font-bold">{experience.date}</p>
                    </div>
                    <div className='w-full md:w-3/4'>
                        <p className="text-xl leading-normal font-semibold group-hover:text-[#3ecf8e]">{experience.position}, {experience.company}</p>
                        <p className='tracking-wide leading-normal'>{experience.description}</p>
                        <div className="mt-2 flex gap-2 flex-wrap">
                            {experience.stack.map((tech, index) => (
                                <Badge key={index} className="text-xs bg-[#3ecf8e]">
                                    {tech}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </ScrollArea>
    )
}

export default WorkExperience