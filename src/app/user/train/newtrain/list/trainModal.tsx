"use client";
import BBButton from "@/app/components/BBButton";
import BBTypography from "@/app/components/BBTypography";
import { dateData } from "@/utils/TrainData";
import { Typography } from "@material-tailwind/react";
import moment from "moment";
import { Poppins } from "next/font/google";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function TrainData() {
  const trainData: any = useSelector((state: any) => state.train.getTrainById);
  console.log("Train data is in update page ..", trainData);
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

  let latestData = trainData?.data?.date;
  let data = latestData ? JSON.parse(latestData) : null;
  console.log("new data is ", data);
  let newDates = data?.map((element: any) => element?.date);
  console.log("newDates", newDates);
  return (
    <div className="pt-7">
      <table className="mx-auto  w-[60%]  table-auto text-left">
        <tbody>
          <tr>
            <td className="p-4 border-b border-blue-gray-50">
              <BBTypography variant="small">
                <span
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "16px",
                  }}
                >
                  {trainData?.data?.trainName}
                </span>
                <br />
                <span style={{ color: "#8e9a9d !important" }}>
                  {" "}
                  {trainData?.data?.trainNo}
                </span>
              </BBTypography>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <BBTypography variant="small">
                <span
                  style={{
                    fontSize: "18px",
                  }}
                >
                  {trainData?.data?.depTime}
                </span>
                <br />
                <span style={{ fontSize: "12px" }}>
                  {trainData?.data?.from_Stn} <br />
                  {trainData?.data?.departDate}
                </span>
              </BBTypography>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <BBTypography variant="small">
                <span style={{ fontSize: "13px", color: "#535B61 " }}>
                  {trainData?.data?.duration}
                </span>
                <br />
                <span style={{ fontSize: "12px", color: "#535B61" }}>
                  {trainData?.data?.stops} Stops
                </span>
              </BBTypography>
            </td>
            <td className="p-4 border-b border-blue-gray-50">
              <BBTypography variant="small">
                <span style={{ fontSize: "18px" }}>
                  {" "}
                  {trainData?.data?.arrivalTime}
                </span>
                <br />
                <span style={{ fontSize: "12px", color: "#535B61" }}>
                  {trainData?.data?.to_Stn}
                  <br />
                  {trainData?.data?.arrDate}
                </span>
              </BBTypography>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="flex pt-5 pb-10 place-content-center">
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
            checked={selectedOption === "First Class Sleeper"}
            onChange={handleOptionChange}
          />
          <span className="ml-2">First Class Sleeper</span>
        </label>
      </div>

      <div>
        <table className="mx-auto  w-[60%]  table-auto text-left pt-20">
          <tbody>
            <tr>
              <div className="flex my-5 flex-row  justify-center gap-x-0">
                <td className="flex flex-row  ">
                  {dateData?.map((element: any) =>
                    newDates?.includes(element.date) ? null : (
                      <div className="flex md:flex-row gap-1">
                        <div className="flex flex-col p-6 border-collapse border border-gray-400 w-40">
                          <div className=" w-fit ">{element.date}</div>

                          <div className="flex w-full items-center  mt-2">
                            <input
                              type="radio"
                              className="w-fit h-fit text-indigo-600"
                              name="dates"
                              value="date1"
                              // checked={selectedRadioB === "date1"}
                              onChange={handleRadioButton}
                            />
                            <span className="ml-2 text-green">Available</span>
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
                              checked={selectedRadioB === "date2"}
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
        className="flex items-center pl-72 pt-10 justify-between pr-72"
        style={{ color: "#535B61" }}
      >
        <div className="flex flex-col ">
          <span>Total Fare : </span>
          <b>{trainData?.data?.fare}</b>
        </div>
        <div className=" ">
          <BBButton
            className=""
            color="#0071"
            label="Book Now"
            onClick={() => router.push("user/train/newtrain/confirm")}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
}
