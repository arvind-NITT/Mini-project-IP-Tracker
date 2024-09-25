import React, { useState } from 'react'
import iconimage from '../images/icon-arrow.svg'
export const SearchBar = ({setipAddress,fetchLocation}) => {
    const [ipAddress, setipAdress] = useState('123.123.123.123');
    const handlesearch=()=>{

        var validip = ipAddress.split('.');
        console.log(validip);
        for (let index = 0; index < validip.length; index++) {
            const element = parseInt(validip[index]);
            // console.log(element)
            if(element>=256 || element <=0){
                alert("Invalid Ip Address");
                return;
            }   
        }
      setipAddress(ipAddress);
      fetchLocation(ipAddress);
    }
    
  return (
    <div className='h-2/5 min-w-full search-bar-container bg-cover flex flex-col gap-5 justify-center items-center'>
        <h2 className='text-white font-bold items-center'>
            IP Address Tracker
        </h2>
        <div className='md:w-1/2 sm:w-1/2 lg:w-1/3 flex justify-center items-center h-10'>
        <input type="text" onChange={(e)=> setipAdress(e.target.value)} className='w-4/5 h-full rounded-md border-input bgbackground px-3 py-2 text-sm ring-offset-background focus-visible:outline-none 
        placeholder:text-muted-foreground' 
        placeholder='Enter the IP Address here...'/>
        <div className='bg-black w-14 h-full flex justify-center items-center' onClick={handlesearch}>

        <img src={iconimage} alt="Arrow-icon" srcset="" className='px-3 py-2' />
        </div>


        </div>
    </div>
  )
}
