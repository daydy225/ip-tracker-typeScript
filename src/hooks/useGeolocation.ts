import { useCallback, useEffect, useState } from "react";
import { LocationData } from "../types";
 
 
  


export const useGeolocation = (ip?: string) => {
    const [ipAddress, setIpAddress] = useState('');
    const [locationData, setLocationData] = useState<LocationData | null>(null);
    
    if (ip  !== '' && ip !== undefined) {
        setIpAddress(ip);
    }

    const getIpAddress = useCallback(async () => {
      try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.log('error', error);
      }
    }, []);
  
    const getIpLocationData = useCallback(async () => {
      try {
        const res = await fetch(`http://ip-api.com/json/${ipAddress}?fields=33612540`);
        const data = await res.json();
        setLocationData(data);
      } catch (error) {
        console.log('error', error);
      }
    }, [ipAddress]);
  
    useEffect(() => {
      getIpAddress();
    }, [getIpAddress]);
  
    useEffect(() => {
      getIpLocationData();
    }, [getIpLocationData]);
  
    return { ipAddress, locationData };
  };
