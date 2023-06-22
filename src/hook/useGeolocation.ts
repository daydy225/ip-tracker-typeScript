import { useCallback, useEffect, useState } from "react";
 

  
  export const useGeolocation = () => {
    const [ipAddress, setIpAddress] = useState('');
    const [locationData, setLocationData] = useState(null);
  
    const getIpAddress = useCallback(async () => {
      try {
        const res = await fetch('https://api.ipify.org?format=json');
        const data = await res.json();
        console.log('data ip address', data.ip);
        setIpAddress(data.ip);
      } catch (error) {
        console.log('error', error);
      }
    }, []);
  
    const getIpLocationData = useCallback(async () => {
      try {
        const res = await fetch(`http://api.ipstack.com/${ipAddress}?access_key=1201fab25755e3e16ccabeeb6272fa2d`);
        const data = await res.json();
        console.log('data', data);
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
