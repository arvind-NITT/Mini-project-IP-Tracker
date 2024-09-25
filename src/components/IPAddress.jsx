import React, { useEffect, useState } from 'react'
import { SearchBar } from './SearchBar'
import { Stats } from './Stats'
import Map from './Map';
import { useIpContext } from "./IpContext";

export const IPAddress = () => {
  // const [IPAddress,setipAddress] = useState('');
  // const [Location,setLocation] = useState('');
  // const [Timezone,settimezone] = useState('');
  // const [Isp,setIsp] = useState('');
  // const [coordinates,setcoordinates]= useState({});

//  const fetchLocation = (IPAddress = "")=>{
//   fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_WdQL6kdk4HA4KnZsKsRvSTPIYIwa0&ipAddress=${IPAddress}`)
//   .then((res)=>res.json())
//   .then((data)=>{
//     console.log(data);
//     setipAddress(data.ip);
//     setLocation(`${data.location.city}, ${data.location.country},${data.location.postalCode}`);
//     settimezone(`UTC ${data.location.timezone}`);
//     setIsp(`${data.isp}`);

//     setcoordinates({lat: data.location.lat, lng:data.location.lng});

//   });
//  }
   const {IPAddress,Location,Timezone,Isp,coordinates,fetchLocation,setipAddress} = useIpContext();

  
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
