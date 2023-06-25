import { abbreviationTimeObj } from "./abbreviation_time_obj";

// get timezone UTC +OO from string like Australia/Sydney
export const getOffset = (timezone: string) => {
    const now = new Date();
    const offset = now.toLocaleTimeString('en', { timeZone: timezone, timeZoneName: 'short' }).split(' ')[2];
    const utcOffset = abbreviationTimeObj[offset];

  if (utcOffset) {
    return `UTC ${utcOffset}`;
  } else {
    console.log(offset);
    return `UTC ${offset}`;
  }
  };