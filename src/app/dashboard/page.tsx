"use client";
import Link from "next/link";
import React from "react";
import "../styles/dashboard.css";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter()

  return (
    <>
      {/* <div className='back flex justify-center text-center font-semibold flex-1 bg-black text-black  h-20'>
                <h1 className='text-4xl'> BOOKING-BABA</h1>
            </div> */}
      <div className="m-10 mt-10 mb-3 rounded-lg">
        <div className="flex flex-row flex-1 h-70 mt-5 rounded-lg ">
          <div className="flex-1 bg-black text-white mr-5 relative rounded-lg"
            onClick={() => router.push("/hotels")}>
            <img
              className="h-60 w-full rounded-lg "
              src="/image/hotel.jpg"
              alt="nature image"
            />
/user/hotels/hotelsDetail/7
            <div
              className="flex-1 bg-black text-white flex justify-center rounded-lg"
              style={{
                position: "absolute",
                zIndex: 100,
                backgroundColor: "rgba(0,0,0,0.6)",
                height: 60,
                bottom: 0,
                width: "100%",
                paddingTop: 18,
              }}
            >

              <h1>Hotels Booking</h1>

            </div>
          </div>

          <div className="flex-1 bg-black text-white relative rounded-lg "
            onClick={() => router.push("/bus")}>
            <img
              className="h-60 w-full rounded-lg"
              src="/image/bus.jpg"
              alt="nature image"
            />
            <div
              className="flex-1 bg-black text-white flex justify-center"
              style={{
                position: "absolute",
                zIndex: 100,
                backgroundColor: "rgba(0,0,0,0.6)",
                height: 60,
                bottom: 0,
                width: "100%",
                paddingTop: 18,
              }}
            >
           <h1> Travles Booking</h1>
           </div>
          </div>
       
        </div>
        <div className="flex flex-row flex-1 h-70 mt-5 rounded-lg"
          onClick={() => router.push("/train")}>
          <div className="flex-1 bg-black text-white mr-5 relative rounded-lg">
            <img
              className="h-60 w-full rounded-lg "
              src="/image/trr.jpg"
              alt="nature image" />

            <div
              className="flex-1 bg-black text-white  flex justify-center"
              style={{
                position: "absolute",
                zIndex: 100,
                backgroundColor: "rgba(0,0,0,0.6)",
                height: 60,
                bottom: 0,
                width: "100%",
                paddingTop: 18,
              }}  >

              <h1>Train Booking</h1>

            </div>
          </div>
          
          <div className="flex-1 bg-black text-white  relative rounded-lg "
            onClick={() => router.push('/usermanagement')}>
            <img
              className="h-60 w-full rounded-lg"
              src="/image/userm.jpg"
              alt="nature image"
            />
            <div
              className="flex-1 bg-black text-white  flex justify-center"
              style={{
                position: "absolute",
                zIndex: 100,
                backgroundColor: "rgba(0,0,0,0.6)",
                height: 60,
                bottom: 0,
                width: "100%",
                paddingTop: 18,
              }} >
              <h1> User mangement</h1>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}