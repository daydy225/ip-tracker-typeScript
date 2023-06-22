import { useState, useEffect, useCallback } from "react";
import { LocationData } from "../types";
import dns from 'dns';
import { promisify } from 'util'
// custom hook to get the user Location IP Address entered in the search bar

export const useLocationIpAddress = (ip: string, domain: string) => {
    const [ipLocationData, setIpLocationData] = useState<LocationData | null>(null);
    const [ipAddress, setIpAddress] = useState('');
    if (ip !== undefined && ip !== '') {
        setIpAddress(ip);
    } else if (domain !== undefined && domain !== '') {
      (async () => {
        try {
          const ipAddress = await getIpAddress(domain);
          console.log(`IP address for ${domain}: ${ipAddress}`);
          setIpAddress(ipAddress);
        } catch (err) {
          console.error(err);
        }
      })();
    }
   const searchLocation = useCallback(async () => {
        try {
             const res = await fetch(`http://ip-api.com/json/${ipAddress}?fields=33612540`);
             const data = await res.json();
             console.log('search ip data', data);
             setIpLocationData(data)
            
        } catch (error) {
             console.log('error', error);
        }

   }, [setIpAddress]);

    useEffect(() => {
        searchLocation();
    }, [searchLocation]);

    return { ipLocationData };
}

// function to get the ip address from the domain name

const resolve4Async = promisify(dns.resolve4);

const getIpAddress = async (domain: string): Promise<string> => {
  try {
    const addresses = await resolve4Async(domain);
    return addresses[0];
  } catch (err) {
    throw new Error(`Error converting domain to IP address: ${err}`);
  }
};
  
  // Example usage
  const domain = 'example.com';
  (async () => {
    try {
      const ipAddress = await getIpAddress(domain);
      console.log(`IP address for ${domain}: ${ipAddress}`);
    } catch (err) {
      console.error(err);
    }
  })();
