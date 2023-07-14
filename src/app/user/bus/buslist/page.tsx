"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button, Card } from "@material-tailwind/react";
import FilterPage from "../buslist/FilterPage";
import { CustomModal } from "@/app/modal/CustomModal";
import { BusDetails } from "@/app/user/bus/buslist/BusDetails";
import { useSelector } from "react-redux";
import { getBusesById } from "@/redux/action/busaction";
import { useAppDispatch } from "@/redux/store";
import BBTypography from "@/app/components/BBTypography";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

import SearchComponent from "@/components/SearchComponent";
import { getBookedSeats } from "@/redux/action/seatBook";
import UBannerFooter from "@/components/userComponents/UBannerFooter";
import UFooter from "@/components/userComponents/UFooter";
import UHeader from "@/components/userComponents/UHeader";
import { TABLE_HEAD } from "@/utils/BusData";

export default function page() {
  const busData: any = useSelector((state: any) => state.bus.userBusDetails);
  // console.log("bus data is ..==>>>>", busData);

  const [showModal, setShowModal] = useState<boolean>(false);
  let from = busData?.data[0]?.from;
  let to = busData?.data[0]?.to;
  // console.log("from ..==>>>>", from);
  // console.log("to ..==>>>>", to);
  const dispatch = useAppDispatch();

  const handleClosemodal = () => {
    setShowModal(false);
  };

  const onHandleChange = (id: any) => {
    dispatch(getBusesById(id)).then(() => {
      setShowModal(true);
      console.log("Inside Catch:::::::::::::::::==");
    });

    console.log("id is+++++++++++++++", id);
  };

  const [active, setActive] = React.useState(1);

  const getItemProps = (index: any) =>
    ({
      variant: active === index ? "filled" : "text",
      color: active === index ? "blue" : "blue-gray",
      onClick: () => setActive(index),
    } as any);

  const next = () => {
    if (active === 3) return;

    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;

    setActive(active - 1);
  };

  const getIsLast = (Element: Array<any>, index: number) => {
    if (index === Element.length - 1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <UHeader
        header="Bus - List Page"
        subHeader="Home > Bus > Bus List Page"
      />
      <div>
        <div className="max-w-screen-xl mx-auto">
          <div className="my-5">
            <SearchComponent travelType="bus" />
          </div>

          <div className="flex flex-row gap-5 ">
            <div className="p-5 w-[300px] bg-[#FFFFFF]">
              <FilterPage />
            </div>

            <div className="bg-[#FFFFFF] w-full">
              <h1 className="text-2xl font-sans serif fontSize-25px mb-4 pl-10 pt-3 text-center ">
                {from} To {to}
              </h1>

              <div
                className=" flex-grow overflow-y-scroll"
                style={{ height: "50vh" }}
              >
                <table className="mx-auto border border-gray-300 w-[100%] text-left">
                  <thead className="w-">
                    <tr>
                      {TABLE_HEAD.map((head: any, ind: number) => (
                        <th
                          style={{ position: "sticky", top: "0" }}
                          key={head}
                          className={`border-b border-blue-gray-100 bg-blue-gray-50 p-4  ${
                            getIsLast(TABLE_HEAD, ind) === true
                              ? "px-[3.5rem]"
                              : ""
                          }`}
                        >
                          <BBTypography
                            variant="small"
                            color="blue-gray"
                            className={`font-bold leading-none opacity-70 w-fit`}
                          >
                            {head}
                          </BBTypography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {busData?.data?.map((element: any, index: any) => {
                      return (
                        <tr key={index}>
                          <td className="p-4 border-b border-blue-gray-50">
                            <BBTypography
                              variant="small"
                              color="blue-gray"
                              className="font-medium  text-black "
                            >
                              <div className="font-extralight text-base ">
                                {element.operator}
                              </div>

                              <div className="font-extralight  text-gray-700">
                                {element.busType}
                              </div>
                            </BBTypography>
                          </td>

                          <td className="p-4 border-b border-blue-gray-50">
                            <BBTypography
                              variant="small"
                              color="blue-gray"
                              className="font-medium  text-black"
                            >
                              <div className="font-extralight text-base">
                                {element.departureTime}
                              </div>

                              <div className="font-extralight  text-gray-700">
                                {element.from}
                              </div>
                            </BBTypography>
                          </td>
                          <td className="p-4 border-b border-blue-gray-50">
                            <BBTypography
                              variant="small"
                              color="blue-gray"
                              className="font-medium  text-black"
                            >
                              <div className="font-extralight text-base">
                                {element.duration}
                              </div>

                              <div className="font-extralight  text-gray-700">
                                {element.noofstop}
                              </div>
                            </BBTypography>
                          </td>
                          <td className="p-4 border-b border-blue-gray-50">
                            <BBTypography
                              variant="small"
                              color="blue-gray"
                              className="font-medium  text-black"
                            >
                              <div className="font-extralight text-base">
                                {element.arrivalTime}
                              </div>

                              <div className="font-extralight  text-gray-700">
                                {element.to}
                              </div>
                            </BBTypography>
                          </td>
                          <div className="w-fit">
                            <td
                              className={`${"p-4 border-b border-blue-gray-50"} w-fit`}
                            >
                              <BBTypography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold text-center text-xl"
                              >
                                {element.ticketprice}
                              </BBTypography>

                              <Button
                                onClick={() => {
                                  onHandleChange(element._id);
                                  setShowModal(true);
                                }}
                                variant="outlined"
                                size="sm"
                              >
                                Select Seats
                              </Button>
                            </td>
                          </div>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="flex justify-center items-center gap-4 mt-5">
                <Button
                  variant="text"
                  color="blue-gray"
                  className="flex items-center gap-2"
                  onClick={prev}
                  disabled={active === 1}
                >
                  <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                </Button>
                <div className="flex items-center gap-2">
                  <IconButton {...getItemProps(1)}>1</IconButton>
                  <IconButton {...getItemProps(2)}>2</IconButton>
                  <IconButton {...getItemProps(3)}>3</IconButton>
                </div>
                <Button
                  variant="text"
                  color="blue-gray"
                  className="flex items-center gap-2"
                  onClick={next}
                  disabled={active === 3}
                >
                  Next
                  <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          {showModal ? (
            <CustomModal
              children={
                <BusDetails
                // onSubmit={setShowModal(false)}
                />
              }
              showModalHeader={true}
              modalHeader={"Bus Booking Details"}
              isFlexible={true}
              topRightCloseButtonID={"x-  "}
              showModal={true}
              showBackButton={true}
              showBBPSLogo={true}
              handleBackClick={handleClosemodal}
            ></CustomModal>
          ) : null}
        </div>
        <div className="bg-white flex flex-col justify-center mt-12">
          <UBannerFooter />
        </div>
        <div className=" ">
          <UFooter />
        </div>
      </div>
    </>
  );
}
