import React, { useEffect, useState } from 'react'
import { SearchBar } from './SearchBar'
import { Stats } from './Stats'
import Map from './Map';
import { useIpContext } from "./IpContext";

export const IPAddress = () => {

   const {fetchLocation} = useIpContext();

  
 useEffect(()=>{
  fetchLocation();
 },[]);


  return (
    <div className='flex flex-col h-screen relative'>
     
        <SearchBar />
        <Stats />
        <Map />
    </div>
  )
}
