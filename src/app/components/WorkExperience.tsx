import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import Link from 'next/link'
import React from 'react'
import { dataExperience } from '../data'

const WorkExperience = () => {
    return (
        <ScrollArea className="h-[80vh]">
            {dataExperience.map((experience) => (
                <Link key={experience.id}
                    className="p-6 flex mb-4 cursor-pointer hover:bg-white/10 hover:backdrop-blur-lg hover:brightness-90 group"
                    href={experience.link}
                >
                    <div className='w-1/4'>
                        <p className="text-xs font-bold">{experience.date}</p>
                    </div>
                    <div className='w-3/4'>
                        <p className="text-xl font-semibold group-hover:text-[#3ecf8e]">{experience.position}, {experience.company}</p>
                        <p className='text-sm'>{experience.description}</p>
                        <div className="mt-2 flex gap-2">
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