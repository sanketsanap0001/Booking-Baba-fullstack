"use client";

import Image from "next/image";
import bus1 from "../../../../../public/image/bus1.jpg";
import { useSelector } from "react-redux";
import { getInvoiceDataInDB } from "@/redux/action/seatBook";
import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/store";

const Invoice = () => {
  const userData: any = useSelector((state: any) => state.login.loginDetails);
  console.log("userData in Details page", userData);
  let { firstName } = userData?.data?.data;
  let { lastName } = userData?.data?.data;

  const dispatch = useAppDispatch();

  const seatsBookData = useSelector((state: any) => state.seats.seats);
  console.log("seatsBookData in Email Page..", seatsBookData);
  let _id = seatsBookData?.data?.data?.insertedId;
  // console.log("seat book data id available",seatsBookData?.data?.data?.insertedId);
  // const id = localStorage.getItem("id");
  // console.log("local storage id is ", id);

  console.log("id in invoice page", _id);
  useEffect(() => {
    if (seatsBookData && _id) {
      console.log("seat book data id available", _id);
      dispatch(getInvoiceDataInDB(_id));
    }
  }, [_id]);

  const invoiceLatestData = useSelector(
    (state: any) => state.seats.invoiceData
  );
  console.log(
    "InvoiceData in Email id from db------------------------- .. ",
    invoiceLatestData
  );

  return (
    <div className="px-52 -mt-16">
      <div className="contenttable border border-gray-400 bg-white p-8 my-20 mx-auto w-3/4">
        <div className="mb-8 text-center text-2xl ">Booking Baba</div>
        <div className="border-4 border-gray-300 rounded p-6 mb-8">
          <div className="flex items-center">
            <Image src={bus1} alt="" className="w-14 h-14 mr-4" />
            <div>
              <p className="font-light text-base text-gray-700">
                Hi {userData ? firstName + " " + lastName : "Bhushan Jadhav"} ,
              </p>
              <p className="text-md text-base font-bold text-gray-700">
                Congratulations ! Your bus reservation is{" "}
                <p className="text-lg">
                  <a className="text-[#28a745]">booked </a>
                </p>
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className=" mb-3 sm:mb-0">
            <p className="text-gray-700 text-lowercase">From:</p>

            <p className="font-light">Mumbai</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">To:</p>

            <p className="font-light">Surat</p>
          </div>
          <div>
            <p className=" text-gray-700 text-uppercase">Date of Journey</p>

            <p className="font-light">07/11/2019</p>
          </div>
        </div>
        <hr className="my-4 " />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className=" mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">Reporting Time:</p>

            <p className="font-light">8:50 PM</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">Departure Time:</p>

            <p className="font-light">8:50 PM</p>
          </div>
          <div>
            <p className=" text-gray-700 text-uppercase">Ticket ID</p>

            <p className="font-light">8:50 PM</p>
          </div>
        </div>
        <hr className="my-4 " />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className=" mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">Passenger Name</p>

            <p className="font-light">Mr. Neil Patel</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">Seat</p>

            <p className="font-light">16</p>
          </div>
          <div>
            <p className=" text-gray-700 text-uppercase">Ticket PNR</p>

            <p className="font-light">5977747-4444152</p>
          </div>
        </div>
        <hr className="my-4 " />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className=" mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">Travels</p>

            <p className="font-light">AK Tour & Travels</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-gray-700 text-uppercase">Bus Type</p>

            <p className="font-light">Multiaxel Volvo AC Sleeper</p>
          </div>
          <div>
            <p className=" text-gray-700 text-uppercase">
              Boarding Point Address
            </p>

            <p className="font-light">
              {" "}
              Opp, National Bank, Near bus Stand. Mumbai.
            </p>
          </div>
        </div>
        <div className="p-4">
          <div className="bg-gray-200 rounded px-5 py-6">
            <div className="flex justify-between">
              <p className="font-bold text-base text-gray-700">Total Fare:</p>
              <p className="font-bold text-base text-gray-700">$350.00</p>
            </div>
          </div>
        </div>
        <p className="text-sm text-gray-600 text-center pt-10 ">
          **Always carry ticket print out and your ID proof while traveling.
          <hr className="my-4 " />
        </p>
        <div className="text-center mt-5">
          <p className="text-base text-gray-700">
            Any Questions? Get in touch with our 24x7 Customer Care team.
          </p>
          <a
            href="#"
            className="bg-blue-500 text-white px-6 py-3 rounded-md text-base uppercase mt-4 inline-block"
          >
            Contact Customer Care
          </a>
        </div>
      </div>
      <hr className=" mt-10" />
      <div className=" -mt-10 border-collapse">
        <table className="w-full text-sm text-[#777777] font-normal">
          <tbody>
            <tr>
              <td align="center" className="tablepadding leading-20">
                Booking-Baba Template, 2705 N. Enterprise St Orange, CA 92865.
              </td>
            </tr>
          </tbody>
        </table>
        <table className="flex justify-center">
          <tbody>
            <tr>
              <td className="pr-5 pt-4">
                <a href="#" target="_blank">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8kOSk0s87b81gtTc5kSmS8PaK_rN1qf5o-XsFJc&s"
                    width="32"
                    height="32"
                    alt="Loading FB Image"
                  />
                </a>
              </td>
              <td className="pr-5 pt-4">
                <a href="#" target="_blank">
                  <img
                    src="https://store-images.s-microsoft.com/image/apps.45406.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.2a88a418-b96d-44a6-ad4f-5e0ee6289b2c"
                    width="32"
                    height="32"
                    alt=""
                  />
                </a>
              </td>
              <td className="pr-5 pt-4">
                <a href="#" target="_blank">
                  <img
                    src="data:image/jpeg;base64,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"
                    width="32"
                    height="32"
                    alt=""
                  />
                </a>
              </td>
              <td className="pr-10 pt-4">
                <a href="#" target="_blank">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrphKLPPaxvj4H3JQmu6twIizqAo5qkKti9xerYaUfvg&s"
                    width="32"
                    height="32"
                    alt=""
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="w-full text-sm text-gray-700 font-normal">
          <tbody>
            <tr>
              <td className="tablepadding text-center leading-20 pt-10 pb-20">
                Copyright © 2023 Booking-Baba All Rights Reserved.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Invoice;
