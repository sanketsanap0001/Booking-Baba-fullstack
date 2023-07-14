'use client'

import BBInput from '@/app/components/BBInput'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { FaHome } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import { BsFillPersonFill } from 'react-icons/bs'
import { BiRupee } from 'react-icons/bi'
import HomeSearch from '@/components/HomeSearch'

import { DatePicker } from 'antd'
import UDatePicker from '@/components/userComponents/UDatePicker'
import Accordion from '@/components/userComponents/UCounter'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { bookHotelRoom } from '@/redux/action/hotelaction'
import { useAppDispatch } from '@/redux/store'
import UBannerFooter from '@/components/userComponents/UBannerFooter'
import UFooter from '@/components/userComponents/UFooter'
import UHeader from '@/components/userComponents/UHeader'


console.log("gefhgrhrhhrhrhryn r hrhethn", window.location.pathname);

export default function page() {

    const { roomData, booked_hotel_res }: any = useSelector((state: any) => state.hotel)
    const { loginDetails }: any = useSelector((state: any) => state.login);
    console.log("userData data in hotel page ..", loginDetails);

    const [customername, setCustomerName] = useState(loginDetails?.firstName + " " + loginDetails?.lastName)
    const [customermobile, setCustomerMobile] = useState(loginDetails?.mobileNumber)
    const [customeraddress, setCustomerAddress] = useState("")
    const [customeremail, setCustomerEmail] = useState(loginDetails?.email)


    const router = useRouter()
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (booked_hotel_res?.data) {
            alert(booked_hotel_res.message)
        }

    }, [booked_hotel_res])


    const proceedToPayment = () => {
 const { checkoutDate, departDate: checkin_date, hotelInfo, selectRoomdata, selectedRoomType, totalDays, totalPrice, totalRoom } = roomData
 const { _id, hotelname, adress, city, country, pin } = hotelInfo
        let full_address = `${adress} ${city} ${country} - ${pin}`
        // let full_address1=adress+" "+city+" "+country+" - "+pin
        //    // "Makhmalabad Road  nashik India - 4677454"
        // if (!loginDetails?._id) {
        //     alert("Please Login")
        //     return
        // }
 let data = {
            user_id: loginDetails._id,
            customer_name: customername,
            customer_mobile: customermobile,
            customer_address: customeraddress,
            customer_email: customeremail,
            payment_method: 'COD',
            hotel_id: _id,
            hotel_name: hotelname,
            hotel_address: full_address,
            total_days: totalDays,
            total_price: totalPrice,
            total_room: totalRoom,
            checkout_date: moment(checkoutDate).format('L'),
            checkin_date: moment(checkin_date).format('L'),
            room_type: selectedRoomType,
            room_id: selectRoomdata.id
        }

        dispatch(bookHotelRoom(data))
        router.push('/user/hotels/bookHotel/invoice')
    }

    const price = roomData?.totalPrice + 500;
    return (
      <div className='mt-10'>
      <>
      <UHeader
        header= "Hotels - Confirm Details"
     subHeader="Home > Hotels > Hotel Details > Confirm Details"
      />
  <div className='mt-4'>
        <div className=' mx-24 '>
            <div className='flex flex-row font-Signika' >
                <div className='bg-white w-[900px] mx-3 my-3 p-5 rounded-lg h-full'>
                    <div className='text-2xl text-[#0c2f54] border-b border-gray-300 pb-3 font-[24px]  mt-3'>
                        Confirm Hotels Details </div>
                    <div className=' flex flex-row w-[100%] border-b border-gray-300 '>

                        <div>
                            <img
                                className="h-[140px] W-[170PX] mx-3 my-3 p-2  rounded-xl hover:opacity-80"
                                src="/image/hotelde.jpg"
                                alt="img-blur-shadow" />
                        </div>
                        <div className='p-3'>
                            <p className='text-2xl text-[#0c2f54] font-medium  mt-3'> {roomData?.hotelInfo?.hotelname}</p>
                            <p className='flex mt-2'> <IoLocationSharp className='mt-1 mr-1' />
                                {roomData?.hotelInfo?.adress}, {roomData?.hotelInfo?.city},{roomData?.hotelInfo?.pin} </p>
                            <div className='flex flex-row mt-1'>
                                <p className='flex flex-row'> <FaHome className='mt-1 mr-1' /> {roomData?.selectedRoomType}</p>
                                <p className='flex flex-row ml-3'> <BsFillPersonFill className='mt-1 mr-1' /> 3 Guests</p>
                            </div>

                        </div>

                    </div>

                    <div className=' grid grid-cols-3 w-[100%] border-b border-gray-300 mt-5 ' >
                        <div>
                            <p>Check In</p>
                            <div className='mt-2 mb-8 mr-5  text-blue-gray-300'>
                                {moment(roomData?.departDate).format('ll')}
                            </div> </div>
                        <div>
                            <p>Check Out</p>
                            <div className='mt-2 mb-8 mr-5  text-blue-gray-300'>
                                {moment(roomData?.checkoutDate).format('LL')}
                            </div>
                        </div>
                        <div>
                            <p>Rooms & Guests</p>
                            <div className='mt-2 mb-8 mr-5 text-blue-gray-300'>
                                {roomData?.totalRoom}
                            </div>
                        </div>
                    </div>
                    <div className='my-5 border-b border-gray-300 '>
                        <div className='text-xl text-[#0c2f54]  pb-3 font-[24px] '>
                            Add Your Details</div>
                        <div className=' grid grid-cols-2 gap-5 w-[100%] '>
                            <BBInput type='text' label='Name' value={customername} onChange={(e) => setCustomerName(e.target.value)} />
                            <BBInput type='number' label='Mobile' value={customermobile} onChange={(e) => setCustomerMobile(e.target.value)} />
                            <BBInput type='email' label='Email' value={customeremail} onChange={(e) => setCustomerEmail(e.target.value)}
                                containerProps={{ className: "mb-5" }} />
                            <BBInput type='text' label='Address' value={customeraddress} onChange={(e) => setCustomerAddress(e.target.value)}
                                containerProps={{ className: "mb-5" }} />
                        </div>
                    </div>
                </div>
                <div className='bg-white w-[350px] mx-3 my-3 p-5 rounded-lg'>
                    <div className='text-2xl text-[#0c2f54] border-b border-gray-300 pb-3  font-medium  mt-3'>
                        Invoice Details </div>
                    <div className=' mt-3'>
                        <div className='flex flex-row justify-between'>
                            <div className='flex flex-col'>
                                <p className='text-gray-700'>Base price</p>
                                <p className='text-gray-400'>For 1 Night, 1 Room, 3 Guests</p>
                            </div>
                            <div className='flex text-xl'><BiRupee className='mt-1' /> <p>{roomData?.totalPrice}</p></div>
                        </div>

                        <div className='flex flex-row justify-between mt-3'>
                            <div className='flex flex-col'>
                                <p className='text-gray-700'>Extra Guests Cost</p>
                                <p className='text-gray-400'>For 1 Night, 1 Guests</p>
                            </div>
                            <div className='flex text-xl' > <BiRupee className='mt-1' /><p className='text-xl'>300</p></div>
                        </div>
                        <div className='flex flex-row justify-between mt-3'>
                            <p className='text-gray-700'>Taxes & Fees</p>
                            <div className='flex text-xl'> <BiRupee className='mt-1' /> <p className='text-xl'>200</p></div>
                        </div>
                        <div className='flex flex-row justify-between  border border-gray-300 bg-gray-300 p-2 mt-5'>
                            <p className=' text-xl '>Total Amount</p>
                            <div className='flex text-xl'> <BiRupee className='mt-1' /> <p className='text-xl'>{price}</p></div>
                        </div>

                      

                        <h3 className="text-4 mb-3 mt-4">Promo Code</h3>
                        <div className="flex items-center mb-4">
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Promo Code"
                    aria-label="Promo Code"
                    type="text"
                  />
                  <button
                    className="bg-blue-500 text-white shadow-none ml-3 px-3 py-2 rounded-md"
                    type="submit"
                  >
                    APPLY
                  </button>
                </div>
                <ul className="list-disc pl-5 mb-5">
                  <li>
                    <div className="text-3 font-semibold">FLTOFFER</div>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <div className="text-3 font-semibold">HOTOFFER</div>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  {/* <li>
                    <span className="text-3 font-semibold">SUMMEROFFER</span>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <span className="text-3 font-semibold">BIGOFFER</span>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <span className="text-3 font-semibold">FLTOFFER</span>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <span className="text-3 font-semibold">FLTOFFER</span>
                    Up to $500 Off on your booking. Hurry! Limited period offer.{" "}
                    <a className="text-sm text-blue-500" href="">
                      Terms &amp; Conditions
                    </a>
                  </li> */}
                </ul>
                <div className='flex mt-3 justify-center p-2'>
                            <Button type='submit' className=' border rounded-md
                     bg-[#0071cc] text-white w-[300px] h-12 ml-2 '
                                onClick={proceedToPayment}> Proceed To Payment</Button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div className="bg-white flex flex-col justify-center my-5">
        <UBannerFooter />
      </div>
      <div className="mb-10">
        <UFooter />
      </div>
        </div>
        </>
        </div>
    )
}
