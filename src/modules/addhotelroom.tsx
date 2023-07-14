import BBInput from '@/app/components/BBInput';
import React, { useEffect, useState } from 'react'

export default function addhotelroom() {

  const [location, setLocation] = useState("");
  const [price, setPrice] = useState<String>("");




  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords.latitude + ", " + position.coords.longitude);
    });
  }, []);
  return (

    <div>

      <BBInput
        containerProps={{ className: "mb-4" }} label="Price"
        value={price + ""} onChange={(e) => setPrice(e.target.value)}
      />
      <BBInput
        containerProps={{ className: "mb-4" }} label="Latitude & Longitude"
        value={location} onChange={(e)=>setLocation}/>


    </div>
  )
}
