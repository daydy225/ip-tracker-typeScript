import { useCallback, useEffect, useState } from "react";
import { LocationData } from "../types";
 
 
  


export const useGeolocation = (ip?:string) => {
    const [ipAddress, setIpAddress] = useState('');
    const [locationData, setLocationData] = useState<LocationData | null>(null);



   
  //  get ip address if not provided
    const getIpAddress = useCallback(async () => {
      try {
        
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        setIpAddress(data.ip);
      } catch (error) {
        throw new Error('Failed to get IP address');
      }
    }, [ip]);

  //  convert  domain name to ip address
  const convertToIpAddress = useCallback(async (domainName: string) => {
    try {
      const res = await fetch(`https://dns.google/resolve?name=${domainName}`);
      const data = await res.json();

      if (data.Status === 0 && data.Answer && data.Answer.length > 0) {
        return data.Answer[0].data;
      }

      throw new Error('Failed to convert domain name to IP address');
    } catch (error) {
      throw new Error('Failed to convert domain name to IP address');
    }
  }, []);

  
    //  get location data from ip address
    const getIpLocationData = useCallback(async () => {
      try {
        const targetIp = ip || ipAddress;
        const finalIp = targetIp && targetIp.split('.').length !== 4 ? await convertToIpAddress(targetIp) : targetIp;

        if (finalIp) {
          const res = await fetch(`http://ip-api.com/json/${targetIp}?fields=58367`);
        const data = await res.json();
        console.log(data);
        setLocationData(data);
        }
      } catch (error) {
        console.log('error', error);
        throw new Error('Failed to get IP location data');
      }
    }, [ip, ipAddress, convertToIpAddress]);
  
    useEffect(() => {
      getIpAddress();
    }, [getIpAddress]);
  
    useEffect(() => {
      getIpLocationData();
    }, [getIpLocationData]);
  
    return { ipAddress, locationData };
  };
