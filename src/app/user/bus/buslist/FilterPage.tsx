"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

export default function FilterPage() {
  const [deptminValue, set_deptminValue] = useState(0);
  const [deptmaxValue, set_deptmaxValue] = useState(1439);

  const [minValue, set_minValue] = useState(25);
  const [maxValue, set_maxValue] = useState(75);
  const [sleeper, setSleeper] = useState(false);
  const [seater, setSeater] = useState(false);
  const [semiseater, setSemiSeater] = useState(false);
  const [akTourTravels, setAkTourTravels] = useState(false);
  const [shivneriTravels, setShivneriTravels] = useState(false);
  const [chhatraptiTravels, setChhatraptiTravels] = useState(false);
  const [akashTravels, setAkashTravels] = useState(false);
  const [ajitTravels, setAjitTravels] = useState(false);

  function Icon({ id, open }: any) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={`${
          id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    );
  }

  const [open, setOpen] = useState(0);
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };
  const [open2, setOpen2] = useState(0);
  const handleOpen2 = (value: any) => {
    setOpen2(open2 === value ? 0 : value);
  };
  const [open3, setOpen3] = useState(0);
  const handleOpen3 = (value: any) => {
    setOpen3(open3 === value ? 0 : value);
  };
  const [open4, setOpen4] = useState(0);
  const handleOpen4 = (value: any) => {
    setOpen4(open4 === value ? 0 : value);
  };
  const formateTime = (minutes: any) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}`;
  };

  const handlePrice = (e: any) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  const handleDepartureTime = (e: any) => {
    console.log("handle departute time in filter page ::: ", e);
    set_deptminValue(e.minValue);
    set_deptmaxValue(e.maxValue);
  };

  const handleSleeperChange = () => {
    setSleeper(!sleeper);
  };
  const handleSeaterChange = () => {
    setSeater(!seater);
  };
  const handleSemiSeaterChange = () => {
    setSemiSeater(!semiseater);
  };
  const handleAkTourTravelsChange = () => {
    setAkTourTravels(!akTourTravels);
  };

  const handleShivneriTravelsAgencyChange = () => {
    setShivneriTravels(!shivneriTravels);
  };
  const handleChhatraptiTravelsAgencyChange = () => {
    setChhatraptiTravels(!chhatraptiTravels);
  };
  const handleAjitTravelsChange = () => {
    setAjitTravels(!ajitTravels);
  };
  const handleAkashTravelsChange = () => {
    setAkashTravels(!akashTravels);
  };

  return (
    <div className="text-2xl font-Poppins fontSize-25px mb-4 -mt-2 ">
      <div>
        <h3
          style={{
            fontFamily: "Poppins,sans-serif ml-5",
            color: " #0c2f54",
            fontSize: "25px",
          }}
        >
          {" "}
          Filter
        </h3>
        <div className=" ">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              // className={`Accordion__Header--${open === 1 ? "opened" : "closed"}`}
              onClick={() => handleOpen(1)}
            >
              <h2
                className="text-[#4c4d4d] font-normal text-[18px] font-Poppins"
                style={{
                  fontFamily: "Poppins,sans-serif ",
                  // fontSize: "16px",
                }}
              >
                Departure Time
              </h2>
            </AccordionHeader>
            <AccordionBody className="-my-3">
              <div className=" ">
                <MultiRangeSlider
                  min={0}
                  max={1439}
                  // step={0}
                  minValue={0}
                  maxValue={1439}
                  onInput={(e) => {
                    handleDepartureTime(e);
                  }}
                />
              </div>
              <div>
                <span>{formateTime(deptminValue)} - </span>
                <span>{formateTime(deptmaxValue)}</span>
              </div>
            </AccordionBody>
          </Accordion>
        </div>

        <div className=" ">
          <Accordion open={open2 === 2} icon={<Icon id={2} open={open2} />}>
            <AccordionHeader onClick={() => handleOpen2(2)}>
              <h2
                className="text-[#4c4d4d] font-normal text-[18px] font-Poppins"
                style={{
                  fontFamily: "Poppins,sans-serif",
                  // fontSize: "16px",
                }}
              >
                Price
              </h2>
            </AccordionHeader>
            <AccordionBody className="-my-3">
              <div className=" ">
                <MultiRangeSlider
                  min={0}
                  max={700}
                  // step={5}
                  minValue={0}
                  maxValue={700}
                  onInput={(e) => {
                    handlePrice(e);
                  }}
                />
              </div>
              <div>
                <span>{minValue} - </span>
                <span>{maxValue}</span>
              </div>
            </AccordionBody>
          </Accordion>
        </div>

        <div>
          <Accordion open={open3 === 3} icon={<Icon id={3} open={open3} />}>
            <AccordionHeader onClick={() => handleOpen3(3)}>
              <h2
                className="text-[#4c4d4d] font-normal text-[18px] font-Poppins"
                style={{
                  fontFamily: "Poppins,sans-serif",
                  // fontSize: "16px",
                }}
              >
                Bus Type{" "}
              </h2>
            </AccordionHeader>
            <AccordionBody className="-my-3">
              <label className="flex items-center space-x-2 font-bold">
                <input
                  type="checkbox"
                  checked={sleeper}
                  onChange={handleSleeperChange}
                />

                <span
                  className="text-[#4c4d4d] font-normal text-[18px] font-Poppins"
                  style={{
                    fontFamily: "Poppins,sans-serif",
                    fontSize: "16px",
                    lineHeight: "32px",
                  }}
                >
                  Ac Sleeper
                </span>
              </label>

              <label className="flex items-center space-x-2 font-bold ">
                <input
                  type="checkbox"
                  checked={seater}
                  onChange={handleSeaterChange}
                />

                <span
                  className="text-[#4c4d4d] font-normal text-[18px] font-Poppins"
                  style={{
                    fontFamily: "Poppins,sans-serif",
                    fontSize: "16px",
                    lineHeight: "32px",
                  }}
                >
                  Seater
                </span>
              </label>

              <label className="flex items-center space-x-2 font-bold ">
                <input
                  type="checkbox"
                  checked={semiseater}
                  onChange={handleSemiSeaterChange}
                />

                <span
                  className="text-[#4c4d4d] font-normal text-[18px] font-Poppins"
                  style={{
                    fontFamily: "Poppins,sans-serif",
                    fontSize: "16px",
                    lineHeight: "32px",
                  }}
                >
                  Semi-Seater
                </span>
              </label>
            </AccordionBody>
          </Accordion>
        </div>
        <div>
          <Accordion open={open4 === 4} icon={<Icon id={4} open={open4} />}>
            <AccordionHeader onClick={() => handleOpen4(4)}>
              <h2
                className="text-[#4c4d4d] font-normal text-[18px] font-Poppins"
                style={{
                  fontFamily: "Poppins,sans-serif",
                  // fontSize: "16px",
                  // lineHeight: "32px",
                }}
              >
                Bus Operator{" "}
              </h2>
            </AccordionHeader>
            <AccordionBody className="-my-3">
              <label className="flex items-center space-x-2 font-bold ">
                <input
                  type="checkbox"
                  checked={akTourTravels}
                  onChange={handleAkTourTravelsChange}
                />

                <span
                  className="text-[#4c4d4d] font-normal text-[18px] font-Poppins"
                  style={{
                    fontFamily: "Poppins,sans-serif",
                    fontSize: "16px",
                    lineHeight: "32px",
                  }}
                >
                  AK Tour & Travels
                </span>
              </label>

              <label className="flex items-center space-x-2 font-bold ">
                <input
                  type="checkbox"
                  checked={shivneriTravels}
                  onChange={handleShivneriTravelsAgencyChange}
                />

                <span
                  className="text-[#4c4d4d] font-normal text-[18px] font-Poppins"
                  style={{
                    fontFamily: "Poppins,sans-serif",
                    fontSize: "16px",
                    lineHeight: "32px",
                  }}
                >
                  Shivneri Travels
                </span>
              </label>

              <label className="flex items-center space-x-2 font-bold ">
                <input
                  type="checkbox"
                  checked={chhatraptiTravels}
                  onChange={handleChhatraptiTravelsAgencyChange}
                />

                <span
                  className="text-[#4c4d4d] font-normal text-[18px] font-Poppins"
                  style={{
                    fontFamily: "Poppins,sans-serif",
                    fontSize: "16px",
                    lineHeight: "32px",
                  }}
                >
                  Chhatrapti Travels Agency
                </span>
              </label>

              <label className="flex items-center space-x-2 font-bold ">
                <input
                  type="checkbox"
                  checked={ajitTravels}
                  onChange={handleAjitTravelsChange}
                />

                <span
                  className="text-[#4c4d4d] font-normal text-[18px] font-Poppins"
                  style={{
                    fontFamily: "Poppins,sans-serif",
                    fontSize: "16px",
                    lineHeight: "32px",
                  }}
                >
                  Ajit Travels Agency
                </span>
              </label>

              <label className="flex items-center space-x-2 font-bold ">
                <input
                  type="checkbox"
                  checked={akashTravels}
                  onChange={handleAkashTravelsChange}
                />

                <span
                  className="text-[#4c4d4d] font-normal text-[18px] font-Poppins"
                  style={{
                    fontFamily: "Poppins,sans-serif",
                    fontSize: "16px",
                    lineHeight: "32px",
                  }}
                >
                  Akash Travels Agency
                </span>
              </label>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
