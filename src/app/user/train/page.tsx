"use client";
import BBButton from "@/app/components/BBButton";
import { getTrainBySearch } from "@/redux/action/trainAction";
import { useAppDispatch } from "@/redux/store";
import { Card, CardHeader } from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import train from "../../../../public/image/train1.jpg";
import train1 from "../../../images/Trains/1.jpg";
import t1 from "../../../images/Trains/t1.jpg";
import t2 from "../../../images/Trains/t2.jpg";
import agent from "../../../images/Trains/agent.png";
import payment from "../../../images/payment.jpg";
import { useState } from "react";
import Select from "react-select";
import { SiRailway } from "react-icons/si";
import Page from "./list/page";

export default function BookTrain() {
  const [fromStation, setFromStation] = useState<any>("");
  const [toStation, setToStation] = useState<any>("");
  const [date, setDate] = useState(getDefaultDate());
  const [showBox, setShowBox] = useState<Boolean>(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  function getDefaultDate() {
    const today = new Date();
    const year = today.getFullYear();
    let month: any = today.getMonth() + 1;
    let day: any = today.getDate();

    if (month < 10) {
      month = `0${month}`;
    }

    if (day < 10) {
      day = `0${day}`;
    }

    return `${year}-${month}-${day}`;
  }

  const optionList = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Pune", label: "Pune" },
    { value: "Nashik", label: "Nashik" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Hydrabad", label: "Hydrabad" },
  ];

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (fromStation || toStation) {
      let data = { from_Stn: fromStation.value, to_Stn: toStation.value };
      console.log("Searching for trains:", data);
      dispatch(getTrainBySearch(data)).then((res: any) => {
        console.log("response ???????????????????????", res);
        setShowBox(true);
        router.push("/user/train#pagee");
      });
    }
  };

  return (
    <div>
      <div className=" -z-10 h-[280px] pt-5 bg-GreenBlue max-w-full">
        <div className="flex flex-row">
          <Image src={train} alt="sdc" className="h-[150px]" />
          <Image src={train1} alt="fgvhbj" className="h-[150px] w-[400px]" />
          <Image src={payment} alt="fgvhbj" className="h-[150px] w-[400px]" />
          <Image src={agent} alt="fgvhbj" className="h-[150px] w-[400px]" />
        </div>
      </div>
      <div
        className="z-10 -mt-[80px] w-[90%]  h-[350px] bg-white m-auto rounded-2xl"
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        }}
      >
        <h1 className="text-2xl font-Signika py-4 ml-10 flex gap-5">
          <SiRailway
            size={50}
            color=""
            className="bg-white  text-GreenBlue  rounded-full"
          />{" "}
          <span className="flex items-center">Train Ticket Booking</span>
        </h1>

        <div className="  flex flex-row gap-5 mx-10">
          <div className="dropdown-container w-[80%]">
            <Select
              options={optionList}
              placeholder="From Station"
              value={fromStation}
              onChange={(value) => setFromStation(value)}
              isSearchable={true}
              // isMulti
            />
          </div>

          <div className=" w-[80%]">
            <Select
              options={optionList}
              placeholder="To Station"
              value={toStation}
              onChange={(value) => setToStation(value)}
              isSearchable={true}
              // isMulti
            />
          </div>
          {/* <div className=" w-[80%]">
            <BBInput
              containerProps={{ className: "mb-3" }}
              type="Date"
              label="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div> */}
          {/* <div className=" bg-white w-[80%]"> */}

          <a href="#pagee">
            <ul>
              <BBButton
                color=""
                label="Search trains"
                size="lg"
                onClick={(e) => {
                  handleSubmit(e);
                }}
                className=" shadow h-10 w-[80%] bg-blackblue flex items-center justify-center hover:bg-GreenBlue "
              />
            </ul>
          </a>
        </div>
        <div className="flex flex-row justify-center pt-3 ">
          <Image src={t1} alt="sdc" className="h-[150px] w-[35%]" />
          <Image src={t2} alt="fgvhbj" className="h-[150px] w-[35%]" />
          {/* <Image src={payment} alt="fgvhbj" className="h-[180px] w-[400px]" />
          <Image src={agent} alt="fgvhbj" className="h-[180px] w-[400px]" /> */}
        </div>
        <section className="pt-10" id="pagee">
          {showBox == false ? "" : <Page />}
        </section>
      </div>
    </div>
  );
}
