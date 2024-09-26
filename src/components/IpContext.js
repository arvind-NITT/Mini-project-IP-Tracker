import React, { createContext, useContext, useState } from 'react';
import { fetchLocationData } from './APICalls'

const MyContext = createContext();


export const useIpContext = () => {
    return useContext(MyContext);
};


export const IpProvider = ({ children }) => {

    const [IPAddress, setipAddress] = useState('123.123.123.123');
    const [Location, setLocation] = useState('');
    const [Timezone, settimezone] = useState('');
    const [Isp, setIsp] = useState('');
    const [coordinates, setcoordinates] = useState({ lat: "39.90395", lng: "116.66183" });

    const fetchLocation = async (IPAddress = "123.123.123.123") => {
        
        const data = await fetchLocationData(IPAddress);

        console.log(data);
        setipAddress(data.ip);
        setLocation(`${data.location.city}, ${data.location.country},${data.location.postalCode}`);
        settimezone(`UTC ${data.location.timezone}`);
        setIsp(`${data.isp}`);

        setcoordinates({ lat: data.location.lat, lng: data.location.lng });

        ;
    }

    return (
        <MyContext.Provider value={{ IPAddress, Location, Timezone, Isp, coordinates, fetchLocation, setipAddress }}>
            {children}
        </MyContext.Provider>
    )

}

