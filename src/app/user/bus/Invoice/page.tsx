"use client";

import BBButton from "@/app/components/BBButton";
import { getInvoiceDataInDB } from "@/redux/action/seatBook";
import { useAppDispatch } from "@/redux/store";
import { randomInt } from "crypto";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Invoice = () => {
  const [print, setPrint] = useState<boolean>(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const seatsBookData = useSelector((state: any) => state.seats.seats);
  console.log("seatsBookData in Invoice page..", seatsBookData);
  let _id = seatsBookData?.data?.data?.insertedId;
  // console.log("seat book data id available",seatsBookData?.data?.data?.insertedId);
  console.log("id in invoice page", _id);
  useEffect(() => {
    if (seatsBookData && _id) {
      console.log("seat book data id available", _id);

      dispatch(getInvoiceDataInDB(_id));
    }
  }, [_id]);
  // localStorage.setItem("id", _id);

  const invoiceLatestData = useSelector(
    (state: any) => state.seats.invoiceData
  );
  console.log(
    "invoiceData in Invoice page from db------------------------- .. ",
    invoiceLatestData
  );

  function funPrint() {
    setPrint(true);
    router.push("javascript:window.print()");
  }

  let from = invoiceLatestData?.data?.data?.from;
  let to = invoiceLatestData?.data?.data?.to;
  let bookingDate = invoiceLatestData?.data?.data?.bookingDate;
  let arrivalDate = invoiceLatestData?.data?.data?.arrivalDate;
  let busNumber = invoiceLatestData?.data?.data?.busNumber;
  let busType = invoiceLatestData?.data?.data?.busType;
  let seats = invoiceLatestData?.data?.data?.seats;
  let travelAgencyName = invoiceLatestData?.data?.data?.travelAgencyName;
  let seatsPrice = invoiceLatestData?.data?.data?.seatsPrice;
  let email = invoiceLatestData?.data?.data?.email;
  let mobileNumber = invoiceLatestData?.data?.data?.mobileNumber;
  let firstName = invoiceLatestData?.data?.data?.firstName;
  let lastName = invoiceLatestData?.data?.data?.lastName;

  let person = invoiceLatestData?.data?.data?.person; //JSON Data
  let personNames = [];
  personNames = person ? JSON.parse(person) : null;
  console.log("Person data in inoice page...", personNames);

  let seatArr = [];
  seatArr = seats ? JSON.parse(seats) : null;
  console.log("seats Array is ", seatArr);

  return (
    <div className="font-Poppins">
      <div className="card mx-auto px-10 py-5 border border-gray-400 rounded-[4px] bg-white bg-opacity-60 ">
        <div className="grid grid-cols-3 ">
          <div className="col-span-2  ">
            <h4 className=" text-2xl ">Booking Baba</h4>
            <p></p>
          </div>
          <div className="flex-1 text-left sm:text-sm-end ">
            <h4 className="mb-0 text-xl">Invoice</h4>
            <p className="mb-0">Invoice Number - 16835</p>
          </div>
        </div>
        <hr className="my-1 " />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="w-1/3 mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080]">From:</p>
            <p className="font-bolt ">{from ? from : "No Route Found"}</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">To:</p>
            <p className="font-bolt">{to ? to : "No Route Found"}</p>
          </div>
          <div>
            <p className="text-sm text-[#00000080] text-uppercase">
              Date of Journey
            </p>
            <p className="font-bolt">07/11/2019</p>
          </div>
        </div>
        <hr className="bg-black my-1" />
        <div className="grid  grid-cols-4 ">
          <div className="  mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">
              Reporting Time:
            </p>

            <p className="font-bolt">8:50 PM</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">
              Departure Time:
            </p>

            <p className="font-bolt">9:05 PM</p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">Status:</p>

            <p className="font-bolt">Booked</p>
          </div>
          <div>
            <p className="  text-sm text-[#00000080] text-uppercase">
              Ticket ID:
            </p>

            <p className="font-bolt">QNOP3912</p>
          </div>
        </div>
        <hr className="my-1" />
        <div className="grid  sm:grid-cols-3 gap-4">
          <div className="  mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">
              Passenger Name:
            </p>

            <p className="font-bolt">
              {personNames
                ? personNames?.map((element: any, index: any) => (
                    <div className="">
                      {element.fName + " " + element.lName}
                    </div>
                  ))
                : "No Passeneger Name Available"}
            </p>
          </div>
          <div className="  mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">Seat:</p>

            <p className="font-bolt">{seatArr ? seatArr.length : "0"}</p>
          </div>
          <div>
            <p className="  text-sm text-[#00000080] text-uppercase">
              Ticket PNR:
            </p>

            <p className="font-bolt">5977747 - 4444152</p>
          </div>
        </div>
        <hr className="my-1" />
        <div className="grid  sm:grid-cols-3 gap-3">
          <div className=" mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">Travels:</p>

            <p className="font-bolt">AK Tour &amp; Travels</p>
          </div>
          <div className=" mb-3 sm:mb-0">
            <p className="text-sm text-[#00000080] text-uppercase">Bus Type:</p>

            <p className="font-bolt">
              {busType ? busType : "Multiaxel Volvo AC Sleeper"}
            </p>
          </div>
          <div>
            <p className=" text-sm text-[#00000080] text-uppercase">
              Boarding Point Address:
            </p>

            <p className="font-bolt">
              Opp, National Bank, Near bus Stand. Mumbai.
            </p>
          </div>
        </div>
        <p className="bg-gray-200 rounded text-gray-800 text-lg items-center font-bolt p-1 pr-52 mt-1 text-right">
          <p>
            Total Fare:{" "}
            <p className="pl-2"> {seatsPrice ? "$" + seatsPrice : null}</p>
          </p>
        </p>
        <hr className="my-[1px]" />
        <p className="text-center">
          <div>
            <strong>Booking Baba Inc.</strong>
          </div>
          4th Floor, Plot No.22, Above Public Park, 145 Murphy Canyon Rd, Suite
          100-18, San Diego CA 2028.
        </p>
        <hr />
        <p className="text-center text-sm pt-1">
          <strong>NOTE:</strong> This is a computer-generated receipt and does
          not require a physical signature.
        </p>
        <p className="text-center text-gray-800 ">
          **Always Carry ticket print out and your ID proof while traveling.
        </p>

        <div className="text-center  mt-5">
          <div className="btn-group ">
            {!print ? (
              <>
                <BBButton
                  // href="javascript:window.print()"
                  onClick={funPrint}
                  className="btn bg-gray-200 w-fit text-gray-800 border border-gray-400 px-4 py-2 shadow-sm "
                >
                  <i className="fa fa-print "></i> Print
                </BBButton>
                <BBButton
                  // href=""
                  className="btn bg-gray-200 w-fit text-gray-800 border border-gray-400 px-4 py-2 shadow-sm"
                >
                  <i className="fa fa-download"></i> Download
                </BBButton>
              </>
            ) : (
              ""
            )}

            {/* <a
              href="javascript:window.print()"
              className="btn bg-gray-200 w- text-gray-800 border border-gray-400 px-4 py-2 shadow-sm "
            >
              <i className="fa fa-print "></i> Print
            </a>
            <a
              href=""
              className="btn bg-gray-200 text-gray-800 border border-gray-400 px-4 py-2 shadow-sm"
            >
              <i className="fa fa-download"></i> Download
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
