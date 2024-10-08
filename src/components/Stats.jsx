import React from 'react'
import { useIpContext } from "./IpContext";
export const Stats = () => {
    const {IPAddress,Location,Timezone,Isp}= useIpContext();
  return (
    <div className='w-4/5 rounded-lg absolute top-52 md:top-56 left-10 
    md:left-40 bg-white z-10 flex flex-col sm:flex-row container 
    gap-4 md:gap-10 p-4 md:p-8'>

        <div className='md:border-r-2 w-full border-slate-300
        flex flex-col gap-2 items-center'>
            <p className='text-sm text-slate-400 font-semibold'>
             IP Address 
            </p>
            <p className='md:text-2xl text-black font-bold'>
             {IPAddress}
            </p>

        </div>
        <div className='md:border-r-2 w-full border-slate-300
        flex flex-col gap-2 items-center'>
            <p className='text-sm text-slate-400 font-semibold'>
            Location
            </p>
            <p className='md:text-2xl text-black font-bold'>
            {Location}
            </p>

        </div>
        <div className='md:border-r-2 w-full border-slate-300
        flex flex-col gap-2 items-center'>
            <p className='text-sm text-slate-400 font-semibold'>
            Timezone
            </p>
            <p className='md:text-2xl text-black font-bold'>
            {Timezone}
            </p>

        </div>
        <div className=' w-full 
        flex flex-col gap-2 items-center'>
            <p className='text-sm text-slate-400 font-semibold'>
            ISP
            </p>
            <p className='md:text-2xl text-black font-bold'>
            {Isp}
            </p>

        </div>
    </div>
  )
}
