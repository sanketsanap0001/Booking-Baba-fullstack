'use client'

import { getHotelBookingDetailsById } from '@/redux/action/hotelaction';
import { useAppDispatch } from '@/redux/store';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaDownload } from 'react-icons/Fa';
import { AiFillPrinter } from "react-icons/ai";
import { useSelector } from 'react-redux';

export default function page() {
  const {booked_hotel_res,invoice_data }: any = useSelector((state: any) => state.hotel)
console.log("booking dada mkj:::::::::::::>",booked_hotel_res?.data)
const dispatch = useAppDispatch(); 

const [print, setPrint] = useState<boolean>(false);
const router = useRouter();
function funPrint() {
  setPrint(true);
  router.push("javascript:window.print()");
}

useEffect(() => {
  if(booked_hotel_res?.data){
 let param= {
    "hotel_booked_id":booked_hotel_res?.data?.insertedId
    }
  dispatch(getHotelBookingDetailsById(param))
  }
}, [booked_hotel_res])

const bookedData=booked_hotel_res?.data
console.log("-----invoice_data-----",invoice_data)
  return (
    invoice_data?
    <div className='mt-5 p-5'>
    <div className='bg-white mx-60 p-5 font-Signika '>
      <div className='flex flex-row justify-between border-b border-gray-300 p-5'>
        <div className='text-3xl font-bold text-[#0c2f54]'>
          BOOKING-BABA
        </div>
        <div className='flex flex-col'>
          <p className='text-2xl font-medium text-[#0c2f54]'>Invoice</p>
          <p>Invoice Number - 16835</p>
        </div>
      </div>

      <div className='flex flex-row justify-between text-[#535B61] border-b border-gray-300 p-5'>
        <div className='flex flex-row'>
          <p className='font-semibold text-sm '>Guest Name : </p>
          <p>{invoice_data.customer_name}</p>
        </div>
        <div className='flex flex-row'>
          <p className='font-semibold text-sm '>Booking Date :</p>
           <p>{invoice_data.created_date}</p>
        </div>
      </div>

      <div className='grid grid-cols-4 gap-10 text-[#535B61] border-b border-gray-300 p-5'>
        <div>
          <p className='font-semibold text-sm d'>Hotel Details :</p>
          <p>{invoice_data.hotel_name} </p>
          <p>{invoice_data.customer_address}</p>
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold text-sm '>Check In :</p>
          <p> {invoice_data.checkin_date}</p>

          <div className='flex flex-col mt-10'>
            <p className='font-semibold text-sm '>Payment Mode :</p>
            <p>Credit Card</p>
          </div>
         </div>
        <div className='flex flex-col'>
          <p className='font-semibold text-sm '>Check Out :</p>
            <p>{invoice_data.checkout_date}</p>
            <div className='flex flex-col mt-10'>
            <p className='font-semibold text-sm '>Booking ID :</p>
            <p> {booked_hotel_res?.data?.insertedId}</p>
          </div>
        </div>
        <div className='flex flex-col'>
          <p className='font-semibold text-sm '>Rooms :</p>
          <p> {invoice_data.total_room}</p>
        </div>
      </div>

      <div className='p-5 text-[#535B61]'>
      <table className="table table-sm mb-0 border border-gray-300 w-full p-5">
          <thead className="card-header border-b border-gray-300 p-3 bg-gray-200">
            <tr className='h-12'>
              <td  className="border-0 w-[40%] font-semibold text-sm d p-3">Description</td>
              <td  className="text-end border-0 w-[40%] font-semibold   p-3">Rate</td>
              <td  className="text-end border-0 w-[20%] font-semibold   p-3">Amount</td>
            </tr>
          </thead>
          <tbody >
            <tr className='border-b border-gray-300 p-3 h-10'>
              <td className='w-[40%]  p-3'>Room Charges</td>
              <td className="text-end w-[40%] ">₹ 500 * {invoice_data.total_days} Night * {invoice_data.total_room} Rooms</td>
              <td className="text-end w-[20%] p-3">$500.00</td>
            </tr>
            <tr className='border-b border-gray-300 p-3 h-10'>
              <td className='p-3'>Other Charges</td>
              <td className="text-end p-3">0</td>
              <td className="text-end p-3">0</td>
            </tr>
            <tr className='border-b border-gray-300  h-10'>
              <td className='p-3'>Promotional Code</td>
              <td className="text-end">SUMMERFUN - <span className="text-1">20.00% One Time Discount</span></td>
              <td className="text-end p-3">-$100.00</td>
            </tr>
            <tr className='border-b border-gray-300 p-3 h-10'>
              <td  className="bg-light-2 text-end col-span-3 font-semibold ">Sub Total:</td>
              <td  className="bg-light-2 text-end col-span-3">$400.00</td>
            </tr>
            <tr className='border-b border-gray-300 p-3 h-10'>
              <td className="bg-light-2 text-end  col-span-2 font-semibold">Tax:</td>
              <td  className="bg-light-2 text-end  col-span-2 ">$40.00</td>
            </tr>
            <tr className='border-b border-gray-300 p-3 h-10'>
              <td className="bg-light-2 text-end  col-span-2 font-semibold">Total:</td>
              <td className="bg-light-2 text-end  col-span-2"> ₹ {invoice_data.total_price}</td>
            </tr>
          </tbody>
        </table>
 </div>

<div className='flex flex-row justify-between border-b border-gray-300 p-5 text-xs text-[#535B61]'>
  <p className='font-semibold'>Please Note :</p> 
  <p>Amount payable is inclusive of central & state goods & services Tax
     act applicable slab rates. Please ask Hotel for invoice at the time of check-out.</p>
</div>

<div className='flex flex-row justify-center border-b border-gray-300 p-5 text-[#535B61]'>
  <div className='flex flex-row border border-gray-300 p-1'>
  <p>Print</p>
  <p className='mt-1 h-6 w-6 ml-2'><AiFillPrinter onClick={funPrint}/></p>
  </div>

  <div className='flex flex-row ml-5 border border-gray-300 p-1'>
  <p>Download</p>
  <p className='mt-1 h-6 w-6 ml-2'><FaDownload /></p>
  </div>
</div>

    </div>
    </div>
    :
    <p>Data Not Found</p>



  )
}
