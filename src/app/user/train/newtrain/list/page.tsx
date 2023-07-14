"use client";
import React from "react";
import { useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import FilterPage from "../page";
import HomeSearch from "@/components/HomeSearch";
import UHeader from "@/components/userComponents/UHeader";
import { CustomModal } from "@/components/CustomModal";
import TrainData from "./trainModal";
import BBTypography from "@/app/components/BBTypography";
import { TABLE_HEAD, TABLE_ROWS, dateData } from "@/utils/TrainData";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/redux/store";
import { getTrainById } from "@/redux/action/trainAction";
import SearchComponent from "@/components/SearchComponent";
import UBannerFooter from "@/components/userComponents/UBannerFooter";
import UFooter from "@/components/userComponents/UFooter";
import { CustomModalTrain } from "@/components/CustomModalTrain";
import BBButton from "@/app/components/BBButton";
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

interface Props {
  type?: any;
}

export default function Page() {
  const [type, setType] = useState("train");
  const [showModal, setShowModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const trainData: any = useSelector(
    (state: any) => state.train.userTrainDetails
  );
  console.log("Train data is in list page..", trainData);

  let from = trainData?.data[0]?.from_Stn;
  const to = trainData?.data[0]?.to_Stn;

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (id: any) => {
    setShowModal(true);
    dispatch(getTrainById(id));
  };

  const trainDataById: any = useSelector(
    (state: any) => state.train.getTrainById
  );
  console.log("Train data is in list page ..", trainDataById);
  const [selectedRadioB, setSelectedRadioB] = useState<any>("");
  const router = useRouter();

  const [selectedOption, setSelectedOption] = useState<any>(
    trainData?.data?.classType
  );

  const handleRadioButton = (event: any) => {
    setSelectedRadioB(event.target.value);
  };

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  let latestData = trainDataById?.data?.date;
  let data = latestData ? JSON.parse(latestData) : null;
  console.log("new data is ", data);
  let newDates = data?.map((element: any) => element?.date);
  console.log("newDates", newDates);

  return (
    <>
      <UHeader
        header="Trains - List Page"
        subHeader="Home > Trains > Trains List Page"
      />
      <div className="max-w-screen-xl mx-auto font-Poppins">
        <div className="my-5">
          <SearchComponent travelType={type} />
        </div>
        <div className="flex flex-row gap-5 ">
          <div className="bg-white pr-4">
            <FilterPage />
          </div>

          <div className="w-full bg-white ">
            <div className="font-Poppins mb-4 pl-10 pt-3 text-center  text-[#0c2f54] text-2xl">
              {from} To {to}
            </div>
            <div
              className="flex-grow overflow-y-scroll"
              style={{ height: "72vh" }}
            >
              <table className=" mx-auto border border-gray-300 w-[100%]  text-left h-[70px]">
                <thead>
                  <tr>
                    {/* <div className=""> */}
                    {TABLE_HEAD.map((head) => (
                      <th
                        style={{ position: "sticky", top: "0" }}
                        key={head}
                        className="border-b border-blue-gray-100 bg-blue-gray-50 py-3 pl-10"
                      >
                        <BBTypography
                          variant="small"
                          color="blue-gray"
                          className="font-normal leading-none opacity-70"
                        >
                          {head}
                        </BBTypography>
                      </th>
                    ))}
                    {/* </div> */}
                  </tr>
                </thead>
                <tbody>
                  {trainData?.data.map((element: any, index: any) => {
                    const isLast = index === TABLE_ROWS.length - 1;

                    return (
                      <tr key={index}>
                        <td className="text-center p-4 border-b border-blue-gray-50 ">
                          <BBTypography variant="small">
                            <span className="font-Poppins text-lg  text-[#212529]">
                              {element.trainName}
                            </span>
                            <br />
                            <span className="text-blue-gray">
                              {element.trainNo}
                            </span>
                          </BBTypography>
                        </td>
                        <td className="text-center p-4 border-b border-blue-gray-50">
                          <BBTypography variant="small">
                            <span className="text-lg">{element.depTime}</span>
                            <br />
                            <span className="text-[12.25px]">
                              {element.from_Stn}
                              <br />
                              {element.depDate}
                            </span>
                          </BBTypography>
                        </td>
                        <td className="text-center p-4 border-b border-blue-gray-50">
                          <BBTypography variant="small">
                            <span className="text-[16px] text-blue-gray">
                              {element.duration}
                            </span>
                            <br />
                            <span className="text-[12.25px] text-blue-gray">
                              {element.stops} Stops
                            </span>
                          </BBTypography>
                        </td>
                        <td className="text-center p-4 border-b border-blue-gray-50">
                          <BBTypography variant="small">
                            <span className="text-lg">
                              {element.arrivalTime}
                            </span>
                            <br />
                            <span className="text-[12.25px] text-blue-gray">
                              {element.to_Stn}
                              <br />
                              {element.arrDate}
                            </span>
                          </BBTypography>
                        </td>
                        <td className="text-center p-4 border-b border-blue-gray-50">
                          <Button
                            variant="outlined"
                            style={{ color: "#0071cc;", fontSize: "14px" }}
                            // color="lightBlue"
                            // size="regular"
                            onClick={() => handleChange(element._id)}
                          >
                            <span className="font-sans text-sm font-light">
                              Check Availability
                            </span>
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* Fare Rules Modal */}
        {showModal && (
          <div className="inset-0 fixed bg-gray-500 bg-opacity-50">
            <div className="  flex h-fit justify-center ">
              <div className="bg-white p-3 rounded shadow-lg w-2/3 mt-20">
                <div className="modal-body">
                  <div className="h-fit ">
                    <div className="">
                      <div className="flex flex-row justify-between ">
                        <h2 className="text-2xl  mb-2">Train Details</h2>
                        <div className="text-right ">
                          <button
                            className="bg-gray-300 text-gray-700 py-2 px-4 rounded"
                            onClick={handleCloseModal}
                          >
                            <IoClose />
                          </button>
                        </div>
                      </div>
                      <hr />
                      <>
                        <div className="my-1" id="myTabContent">
                          <div className="">
                            <table className="mx-auto  w-[80%]  table-auto text-left">
                              <tbody>
                                <tr>
                                  <td className="p-2 border-b border-blue-gray-50">
                                    <BBTypography variant="small">
                                      <span className="text-[18px] text-blackbig">
                                        {trainDataById?.data?.trainName}
                                      </span>
                                      <p className="text-[#8e9a9d]">
                                        {trainDataById?.data?.trainNo}
                                      </p>
                                    </BBTypography>
                                  </td>
                                  <td className="p-4 border-b border-blue-gray-50">
                                    <BBTypography variant="small">
                                      <span className="text-blackbig ">
                                        {trainDataById?.data?.depTime}
                                      </span>

                                      <p style={{ fontSize: "12px" }}>
                                        {trainDataById?.data?.from_Stn}
                                      </p>
                                      <p style={{ fontSize: "12px" }}>
                                        {trainDataById?.data?.departDate}
                                      </p>
                                    </BBTypography>
                                  </td>
                                  <td className="p-4 border-b border-blue-gray-50">
                                    <BBTypography variant="small">
                                      <span className="text-lightgrey">
                                        {trainDataById?.data?.duration}
                                      </span>

                                      <p
                                        style={{
                                          fontSize: "12px",
                                          color: "#535B61",
                                        }}
                                      >
                                        {trainDataById?.data?.stops} Stops
                                      </p>
                                    </BBTypography>
                                  </td>
                                  <td className="p-4 border-b border-blue-gray-50">
                                    <BBTypography variant="small">
                                      <span style={{ fontSize: "18px" }}>
                                        {" "}
                                        {trainDataById?.data?.arrivalTime}
                                      </span>

                                      <p
                                        style={{
                                          fontSize: "12px",
                                          color: "#535B61",
                                        }}
                                      >
                                        {trainDataById?.data?.to_Stn}
                                      </p>
                                      <p
                                        style={{
                                          fontSize: "12px",
                                          color: "#535B61",
                                        }}
                                      >
                                        {trainDataById?.data?.arrDate}
                                      </p>
                                    </BBTypography>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <div className="flex pt-2 pb-2 place-content-center">
                              <label className="inline-flex items-center mr-6">
                                <input
                                  type="radio"
                                  className="form-radio text-indigo-600"
                                  name="classType"
                                  value="First Class"
                                  checked={selectedOption === "First Class"}
                                  onChange={handleOptionChange}
                                />
                                <span className="ml-2">First Class</span>
                              </label>

                              <label className="inline-flex items-center mr-6">
                                <input
                                  type="radio"
                                  className="form-radio text-indigo-600"
                                  name="classType"
                                  value="Second Class"
                                  checked={selectedOption === "Second Class"}
                                  onChange={handleOptionChange}
                                />
                                <span className="ml-2">Second Class</span>
                              </label>

                              <label className="inline-flex items-center">
                                <input
                                  type="radio"
                                  className="form-radio text-indigo-600"
                                  name="classType"
                                  value="First Class Sleeper"
                                  checked={
                                    selectedOption === "First Class Sleeper"
                                  }
                                  onChange={handleOptionChange}
                                />
                                <span className="ml-2">
                                  First Class Sleeper
                                </span>
                              </label>
                            </div>

                            <div className="flex flex-row">
                              <table className="mx-auto w-full table-auto overflow-x-auto block">
                                <tbody>
                                  <tr>
                                    <div className="flex my-3 flex-row  justify-center gap-x-0">
                                      <td className="flex flex-row  ">
                                        {dateData?.map((element: any) =>
                                          newDates?.includes(
                                            element.date
                                          ) ? null : (
                                            <div className="flex md:flex-row gap-1">
                                              <div className="flex flex-col p-6 border-collapse border border-gray-400 w-40">
                                                <div className=" w-fit ">
                                                  {element.date}
                                                </div>

                                                <div className="flex w-full items-center  mt-2">
                                                  <input
                                                    type="radio"
                                                    className="w-fit h-fit text-indigo-600"
                                                    name="dates"
                                                    value="date1"
                                                    // checked={selectedRadioB === "date1"}
                                                    onChange={handleRadioButton}
                                                  />
                                                  <span className="ml-2 text-green">
                                                    Available
                                                  </span>
                                                </div>
                                              </div>
                                            </div>
                                          )
                                        )}
                                      </td>
                                      <td className="flex flex-row  ">
                                        {dateData?.map((element: any) =>
                                          newDates?.includes(element.date) ? (
                                            <div className="flex md:flex-row gap-2">
                                              <div className="flex flex-col  p-6 border-collapse border border-gray-400  ">
                                                {element.date}
                                                <div className="flex w-full items-center">
                                                  <input
                                                    disabled
                                                    type="radio"
                                                    className="w-fit h-fit text-indigo-600"
                                                    name="dates"
                                                    value="date2"
                                                    checked={
                                                      selectedRadioB === "date2"
                                                    }
                                                    onChange={handleRadioButton}
                                                  />
                                                  <span className="ml-2 text-red-600">
                                                    Unavailable
                                                  </span>
                                                </div>
                                                {/* <hr className="h-[2px]  bg-black" /> */}
                                              </div>
                                            </div>
                                          ) : null
                                        )}
                                      </td>
                                    </div>
                                  </tr>
                                </tbody>
                              </table>
                            </div>

                            <div
                              className="flex items-center  p-5 justify-between  bg-[#eff0f2]"
                              style={{ color: "#535B61" }}
                            >
                              <div className="flex flex-col ">
                                <span>Total Fare : </span>
                                <b>${trainDataById?.data?.fare}</b>
                              </div>
                              <div className=" ">
                                <BBButton
                                  className=""
                                  color="#0071"
                                  label="Book Now"
                                  onClick={() =>
                                    router.push("user/train/newtrain/confirm")
                                  }
                                  size="sm"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="bg-white flex flex-col justify-center my-5">
        <UBannerFooter />
      </div>
      <div className="mb-10">
        <UFooter />
      </div>
    </>
  );
}
