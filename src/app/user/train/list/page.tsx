"use client";

import { Avatar, Card, Typography } from "@material-tailwind/react";
import React from "react";

import { useSelector } from "react-redux";
import BBButton from "@/app/components/BBButton";
import { useRouter } from "next/navigation";

export default function Page() {
  const trainData: any = useSelector(
    (state: any) => state.train.userTrainDetails
  );
  const router = useRouter();
  console.log("Train data is in update page ..", trainData);

  return (
    <div className="tracking-wide pt-10">
      <div className="w-full mt-[0.5%]">
        <div className="">
          <Typography className="px-4 font-castoro" variant="h4" color="black">
            Available Trains
          </Typography>
        </div>
      </div>

      <div className="mx-3 h-[300px] w-full bg-white relative overflow-scroll px-1">
        <table className="relative font-roboto w-full min-w-max table-auto text-left text-sm text-black">
          <thead className="z-10 bg- font-bold flex-col">
            <tr className="z-10 sticky top-0 bg-GreenBlue text-white w-full">
              <th className="w-[5px] p-2">Train photo</th>
              <th className="w-[5px] p-2">Train Number</th>
              <th className="w-[5px] p-2">Train Name</th>
              <th className="w-[5px] p-2">From Station</th>
              <th className="w-[5px] p-2">To Station</th>
              <th className="w-[5px] p-2">Arrival Time</th>
              <th className="w-[5px] p-2">Departure Time</th>
              <th className="w-[5px] p-2">Fare </th>
              <th className="w-[5px] p-2">Seats</th>
              <th className="w-[5px] p-2">Coach</th>
              <th className="w-[5px] p-2">Availalbility</th>
              <th className="w-[5px] p-2">Action</th>
              <th className="w-[5px] p-2">Duration</th>
            </tr>
          </thead>
          <tbody className="-z-10">
            {trainData
              ? trainData?.data?.map((element: any) => (
                  <tr key={element._id}>
                    <td className="w-[5px] p-2">
                      <img
                        className="h-20 w-20 rounded-full"
                        src={"/uploads/" + element.imageUrl}
                        alt="nature image"
                      />
                    </td>
                    <td className="w-[5px]  p-2">{element.trainNo}</td>
                    <td className="w-[5px]  p-2">{element.trainName}</td>
                    <td className="w-[5px]  p-2">{element.from_Stn}</td>
                    <td className="w-[5px]  p-2">{element.to_Stn}</td>
                    <td className="w-[5px]  p-2">{element.arrivalTime}</td>
                    <td className="w-[5px]  p-2">{element.depTime}</td>
                    <td className="w-[5px]  p-2">{element.fare}</td>
                    <td className="w-[5px]  p-2">{element.seats}</td>
                    <td className="w-[5px]  p-2">{element.coach}</td>
                    <td className="w-[5px]  p-2">{element.operationDays}</td>
                    <td className="w-[5px]  p-2">{element.duration}</td>

                    <td className="w-[5px]  p-2">
                      <BBButton
                        label="Book Ticket"
                        onClick={() => router.push("train/bookticket")}
                        size="sm"
                        className=""
                        color=""
                      />
                    </td>
                  </tr>
                ))
              : "Data Not Found.."}
          </tbody>
        </table>
      </div>
    </div>
  );
}
