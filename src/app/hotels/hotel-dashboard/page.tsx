"use client";

import { getAllBookedHotels, getHotelsBookingDetails } from '@/redux/action/hotelaction';
import { useAppDispatch } from '@/redux/store';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';

export default function HotelDashboard() {

const { loginDetails }: any = useSelector((state: any) => state.login);
  console.log("userData data in hotel page ..", loginDetails);

  const { booked_hotel_history, hotels_list }: any = useSelector((state: any) => state.hotel);
  // console.log("hotel booking details...",booked_hotel_history);
  console.log("hotel list;;;;;;;;;", hotels_list)
  const dispatch = useAppDispatch();

  useEffect(() => {

    dispatch(getAllBookedHotels())
  }, [])

  return (
    <div className='mx-20'>
      <div className='  mx-3 my-3 p-5 rounded-lg h-full'>
        <div className='flex flex-row justify-center border-b border-gray-300 p-5 bg-white rounded-md'>
          <div className='text-2xl font-bold  text-[#0c2f54] '>
            Order Management
          </div>
        </div>
        {hotels_list.map((element: any) =>
          <div className='flex  gap-5 mb-5 bg-white p-3 rounded-md'>
          
              <div>
             
 
                    <div className='flex flex-row justify-between mt-2 p-2'>
                      <p className='text-xl font-semibold'>Hotel Details</p>
                      <div className='flex flex-row'>
                        <p className=''>Booking ID :</p>
                        <p>{element._id} </p>
                      </div>
                    </div>
                  
                  <div>
                    <div>
               <div className='grid grid-cols-4 gap-3 border-b border-gray-300 p-2'>
                      <div>
                        <p className=''>Hotel Name:</p>
                        <p className=''> {element.hotel_name}</p>

                      </div>
                      <div >
                        <p className=''>Check In :</p>
                        <p>{element.checkin_date} </p>
                      </div>
                      <div >
                        <p className=''>Check Out :</p>
                        <p>{element.checkout_date}</p>
                      </div>
                      <div >
                        <p className=''>Rooms :</p>
                        <p>{element.total_room}</p>
                      </div>
                      <div className='flex flex-col '>
                        <p className=''>Hotel Address :</p>
                        <p>{element.hotel_address}</p>
                      </div>
                      <div className='flex flex-col '>
                        <p className=''>Payment Mode :</p>
                        <p>{element.payment_method}</p>
                      </div>
                      <div className='flex flex-col '>
                        <p className=''>Total Days :</p>
                        <p>{element.total_days}</p>
                      </div>
                      <div className='flex flex-col '>
                        <p>Room Type :</p>
                        <p>{element.room_type}</p>
                      </div>
                    </div>
                  </div>
              
                <div>
                  <div className='flex flex-row justify-between mt-2 p-2'>
                    <p className='text-xl font-semibold'>Customer Details :</p>
                    <div className='flex flex-row'>
                      <p>Customer ID :</p>
                      <p>{element.user_id}</p>
                    </div>

                  </div>

                  <div className='grid grid-cols-2 gap-3 border-b border-gray-300 p-2'>
                    <div className='flex flex-row'>
                      <p>Customer Name :</p>
                      <p>{element.customer_name}</p>
                    </div>
                    <div className='flex flex-row'>
                      <p>Customer Mobile :</p>
                      <p>{element.customer_mobile}</p>
                    </div>
                    <div className='flex flex-row'>
                      <p>Customer Email :</p>
                      <p>{element.customer_email}</p>
                    </div>
                    <div className='flex flex-row'>
                      <p>Customer Address : </p>
                      <p>{element.customer_address}</p>
                    </div>
                  </div>
                </div>
                <div className=' flex flex-row justify-between border-b border-gray-300 p-5'>
                  <p className='font-semibold'>Total Payment :</p>
                  <p className='mr-12 font-semibold'>₹ {element.total_price}</p>
                </div>

              </div>
            
              </div>
             
            
          </div>
        )}
      </div>


    </div>
  )
}









