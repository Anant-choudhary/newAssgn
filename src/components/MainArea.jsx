import React from 'react'
import Timeline from './Timeline'
import Claimbox from './Claimbox'
import Heading from './Heading'

const MainArea = () => {
  return (
    <div className='md:col-span-10 grid md:grid-rows-11 md:px-10 md:py-4 rounded-2xl bg-slate-100 h-[85%]'>
        <Timeline/>
        <Heading/>
        <Claimbox/>
    </div>
  )
}

export default MainArea