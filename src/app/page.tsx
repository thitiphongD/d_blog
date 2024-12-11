import React from 'react'
import Summary from './components/Summary'
import WorkExperience from './components/WorkExperience'

const HomePage = () => {
  return (
    <div className='flex w-full gap-10'>
      <div className='w-1/2'>
        <Summary />
      </div>
      <div className='w-1/2'>
        <WorkExperience />
      </div>

    </div>

  )
}

export default HomePage