import React, { createContext, useReducer, useContext, useState } from 'react';


const MyContext = createContext();


export const useIpContext = () => {
    return useContext(MyContext);
};

export const IpProvider=({children})=>{

    const [IPAddress,setipAddress] = useState('123.123.123.123');
    const [Location,setLocation] = useState('');
    const [Timezone,settimezone] = useState('');
    const [Isp,setIsp] = useState('');
    const [coordinates,setcoordinates]= useState({lat: "39.90395",

        lng: "116.66183"});
  
   const fetchLocation = (IPAddress = "123.123.123.123")=>{
    fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=at_WdQL6kdk4HA4KnZsKsRvSTPIYIwa0&ipAddress=${IPAddress}`)
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data);
      setipAddress(data.ip);
      setLocation(`${data.location.city}, ${data.location.country},${data.location.postalCode}`);
      settimezone(`UTC ${data.location.timezone}`);
      setIsp(`${data.isp}`);
  
      setcoordinates({lat: data.location.lat, lng:data.location.lng});
  
    });
   }
  
    return (
        <MyContext.Provider value={{IPAddress,Location,Timezone,Isp,coordinates,fetchLocation,setipAddress}}>
                 {children}
        </MyContext.Provider>
    )

}

