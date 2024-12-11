import React from 'react'
import Summary from './Summary'
import WorkExperience from './WorkExperience'

const AboutMe = () => {
    return (
        <div className='flex flex-col md:flex-row w-full gap-10'>
            <div className='w-full md:w-1/2'>
                <Summary />
            </div>
            <div className='w-full md:w-1/2'>
                <WorkExperience />
            </div>
        </div>
    )
}

export default AboutMe