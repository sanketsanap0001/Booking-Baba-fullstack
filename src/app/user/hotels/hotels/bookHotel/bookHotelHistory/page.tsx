"use client";
import { getHotelsBookingDetails } from '@/redux/action/hotelaction';
import { useAppDispatch } from '@/redux/store';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

export default function HotelBooking({ params }: any) {
    const { loginDetails }: any = useSelector((state: any) => state.login);
    console.log("userData data in hotel page ..", loginDetails);

    const { booked_hotel_history }: any = useSelector((state: any) => state.hotel);
    console.log("hotel booking details...",booked_hotel_history);
    const dispatch = useAppDispatch();

    useEffect(() => {
        let param={
            "user_id":loginDetails._id
            }
        dispatch(getHotelsBookingDetails(param))
      }, [])

    return (
        <div className='mx-20'>
            <div className='bg-white  mx-3 my-3 p-5 rounded-lg h-full'>
            <div className='flex flex-row justify-center border-b border-gray-300 p-5'>
        <div className='text-2xl font-bold  text-[#0c2f54] '>
         Hotel Booking History
        </div>
      </div>
      {booked_hotel_history?.data?.map((element:any)=>
        <div>
            <div className='flex flex-row justify-between border-b border-gray-300 p-5'>
        <div className='flex flex-row'>
          <p className='font-semibold'>Guest Name : </p>
          <p>{element.customer_name}</p>
        </div>
        <div className='flex flex-row'>
          <p className='font-semibold'>Booking Date :</p>
           <p>07/11/2019</p>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-10 border-b border-gray-300 p-5'>
        <div>
          <p className='font-semibold'>Hotel Details :</p>
          <p className='font-semibold'> {element.hotel_name}</p>
          <p> {element.hotel_address}</p>
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold'>Check In :</p>
          <p> {element.checkin_date}</p>

          <div className='flex flex-col mt-10'>
            <p className='font-semibold'>Booking ID :</p>
            <p> {element._id}</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold'>Check Out :</p>
            <p>{element.checkout_date}</p>
          <div className='flex flex-col mt-10'>
            <p className='font-semibold'>Payment Mode :</p>
            <p>Credit Card</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold'>Rooms :</p>
          <p>{element.total_room}</p>

          <div className='flex flex-col mt-10'>
            <p className='font-semibold'>Total Days :</p>
            <p> {element.total_days}</p>
          </div>
        </div>
      </div>

<div className=' flex flex-row justify-between border-b border-gray-300 p-5'>
   
        <p className='font-semibold'>Total Payment :</p>
        <p className='mr-12'>₹ {element.total_price}</p>
  
</div>
</div>
)}
       </div>


        </div>
    )
}
