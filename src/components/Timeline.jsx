import React from 'react'
import Phase from './Phase'

const time = [
    {
        id: "01",
        heading:"Preliminary",
        completed:true
    },
    {
        id: "02",
        heading:"YourDetails",
        completed:true
    },
    {
        id: "03",
        heading:"KYC",
        completed:true
    },
    {
        id: "04",
        heading:"Parties",
        completed:false
    },
   
    {
        id: "05",
        heading:"Claim",
        completed:false
    },
    {
        id: "06",
        heading:"Review",
        completed:false
    },
    {
        id: "07",
        heading:"Payment",
        completed:false
    },

]
const Timeline = () => {
  return (
    <div className='md:row-span-2 bg-slate-100 grid md:grid-cols-7'>
       
        {
            time.map((val,index)=>(<Phase id={val.id} heading={val.heading} completed={val.completed}/>))
        }
        
    </div>
  )
}

export default Timeline