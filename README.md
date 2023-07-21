# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - IP address tracker solution](#frontend-mentor---ip-address-tracker-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
      - [Desktop](#desktop)
      - [Mobile](#mobile)
    - [Links](#links)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

#### Desktop
![](./Ip-address-tracker-desktop-view.png)
#### Mobile

![](./Ip-address-tracker-mobile-view.png)


### Links

- Solution URL: [IP Address tracker typscript](https://github.com/daydy225/ip-tracker-typeScript)
- Live Site URL: [IP-address-tracker-225.netlify.app](https://ip-address-tracker-225.netlify.app/)


### Built with

- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [TypeScript](https://www.typescriptlang.org/) - For types
- [React-leaflet](https://react-leaflet.js.org/) - For map
- [Leaflet](https://leafletjs.com/) - For map
- [IP Geolocation API by IPify](https://geo.ipify.org/) - For IP address and location data
- [Google Dns](https://dns.google/resolve?name=${domainName}) _ For domain name into IP address
- [fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) - For fetching data
- [React-Icons](https://react-icons.github.io/react-icons/) - For icons
- [React context API](https://reactjs.org/docs/context.html) - For state management
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

In this challenge I learned a lot about  react, how to fetch data using fetch api, style component for styling, the use of custom hooks to write react hooks in the same function to avoid boilerplate code.
I learned how to use react-leaflet and leaflet to display map and marker on the map.
Use react context api in typescript to manage state, use google dns to convert domain name into IP address, also IP Geolocation API by IPify to get IP and get location data from IP.
On top of that I feel more comfortable with typescript and I'm able to use it in my future projects.



To see how some code snippets you could keep, see below:



```ts
// the custom hook to get IP address and location data

import { useCallback, useEffect, useState } from "react";
import { LocationData } from "../types";
 
//  location data type
export interface LocationData {
  status: string;
  country?: string;
  countryCode?: string;
  region?: string;
  regionName?: string;
  city?: string;
  zip?: string;
  lat?: number;
  lon?: number;
  timezone?: string;
  isp?: string;
  query?: string;
}


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
           const res = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${finalIp}`);
        const data = await res.json();
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


```




### Continued development

I want to continue to work on the styling of the page in  react using sytled component.
I want to learn react hook like useReducer and useContext to manage the state of the app, useCallback, useMemo to memoized data in the application.

### Useful resources

- [React Dev](https://react.dev/) - This helped me to learn more about react hooks and I totally  recommand to use it to learn react instead of watching tutorials.

## Author

- Website - [Dabely Dadi](https://github.com/daydy225)
- Frontend Mentor - [@daydy225](https://www.frontendmentor.io/profile/daydy225)


