import { useCallback, useEffect, useState } from "react";
import { LocationData } from "../types";
 
 
  


export const useGeolocation = (ip?:string) => {
    const [ipAddress, setIpAddress] = useState('');
    const [locationData, setLocationData] = useState<LocationData | null>(null);



   

    const getIpAddress = useCallback(async () => {
      try {
        
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.log('error', error);
      }
    }, [ip]);
  
    const getIpLocationData = useCallback(async () => {
      try {
        const targetIp = ip || ipAddress;
        if (targetIp) {
          const res = await fetch(`http://ip-api.com/json/${targetIp}?fields=58367`);
        const data = await res.json();
        console.log(data);
        setLocationData(data);
        }
      } catch (error) {
        console.log('error', error);
      }
    }, [ip, ipAddress]);
  
    useEffect(() => {
      getIpAddress();
    }, [getIpAddress]);
  
    useEffect(() => {
      getIpLocationData();
    }, [getIpLocationData]);
  
    return { ipAddress, locationData };
  };
