"use client";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import { useState } from "react";
import MultiRangeSlider from "multi-range-slider-react";

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

const FilterPage = () => {
  const [deptminValue, set_deptminValue] = useState(0);
  const [deptmaxValue, set_deptmaxValue] = useState(1439);
  const [arrivalminValue, set_arrivalminValue] = useState(0);
  const [arrivalmaxValue, set_arrivalmaxValue] = useState(1439);
  const [firstClass, setFirstClass] = useState(false);
  const [secondClass, setSecondClass] = useState(false);
  const [sleeperClass, setSleeperClass] = useState(false);
  const [secondsleeperClass, setSecondSleeperClass] = useState(false);
  const [buisness, setBuisness] = useState(false);

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

  const formatTime = (minutes: any) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}`;
  };

  const handleDepartureTime = (e: any) => {
    set_deptminValue(e.minValue);
    set_deptmaxValue(e.maxValue);
  };

  const handleArrivalTime = (e: any) => {
    set_arrivalminValue(e.minValue);
    set_arrivalmaxValue(e.maxValue);
  };

  const handleFirstClassChange = () => {
    setFirstClass(!firstClass);
  };

  const handleSecondClassChange = () => {
    setSecondClass(!secondClass);
  };

  const handleSleeperClassChange = () => {
    setSleeperClass(!sleeperClass);
  };

  const handleSecondsleeperClassChange = () => {
    setSecondSleeperClass(!secondsleeperClass);
  };

  const handleBuisnessChange = () => {
    setBuisness(!buisness);
  };

  return (
    <div className="w-56 ml-10 mt-2">
      <div>
        <h3
          style={{
           
            color: "#0c2f54",
            fontSize: "25px",
          }}
        >
          Filter
        </h3>
        <hr />

        <div className="mb-4 pt-5">
          <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
            <AccordionHeader
              // className={`Accordion__Header--${
              //   open === 1 ? "opened" : "closed"
              // }`}
              onClick={() => handleOpen(1)}
            >
              <h2
                className="text-[16px] font-normal text-[#4c4d4d]"
                // style={{
                //   fontFamily: "sans-serif",
                //   fontWeight: "normal",

                //   color: "#4c4d4d",
                //   fontSize: "16px",
                // }}
              >
                Departure Time
              </h2>
            </AccordionHeader>
            <AccordionBody>
              <div>
                <span>{formatTime(deptminValue)} - </span>
                <span>{formatTime(deptmaxValue)}</span>
              </div>
              <div className="ml-1">
                <MultiRangeSlider
                  min={0}
                  max={1439}
                  minValue={0}
                  maxValue={1439}
                  onInput={(e:any) => {
                    handleDepartureTime(e);
                  }}
                />
              </div>
            </AccordionBody>
          </Accordion>
        </div>

        <div className="mb-4">
          <Accordion open={open2 === 2} icon={<Icon id={2} open={open2} />}>
            <AccordionHeader
              // className={`Accordion__Header--${
              //   open === 2 ? "opened" : "closed"
              // }`}
              onClick={() => handleOpen2(2)}
            >
              <h2
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "normal",

                  color: "#4c4d4d",
                  fontSize: "16px",
                }}
              >
                Arrival Time
              </h2>
            </AccordionHeader>
            <AccordionBody>
              <div>
                <span>{formatTime(arrivalminValue)} - </span>
                <span>{formatTime(arrivalmaxValue)}</span>
              </div>
              <div className="ml-1">
                <MultiRangeSlider
                  min={0}
                  max={1439}
                  minValue={0}
                  maxValue={1439}
                  onInput={(e:any) => {
                    handleArrivalTime(e);
                  }}
                />
              </div>
            </AccordionBody>
          </Accordion>
        </div>

        <div>
          <Accordion open={open3 === 3} icon={<Icon id={3} open={open3} />}>
            <AccordionHeader
              // className={`Accordion__Header--${
              //   open === 3 ? "opened" : "closed"
              // }`}
              onClick={() => handleOpen3(3)}
            >
              <h2
                style={{
                  fontFamily: "sans-serif",
                  fontWeight: "normal",
                  // fontStyle:"sans-serif"
                  color: "#4c4d4d",
                  fontSize: "16px",
                }}
              >
                Fare Class{" "}
              </h2>
            </AccordionHeader>
            <AccordionBody>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={firstClass}
                  onChange={handleFirstClassChange}
                />
                <span
                  style={{
                    fontFamily: "Poppins ,sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  First Class
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={secondClass}
                  onChange={handleSecondClassChange}
                />
                <span
                  style={{
                    fontFamily: "Poppins ,sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  Second Class
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={sleeperClass}
                  onChange={handleSleeperClassChange}
                />
                <span
                  style={{
                    fontFamily: "Poppins ,sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  First Class Sleeper (SL)
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={secondsleeperClass}
                  onChange={handleSecondsleeperClassChange}
                />
                <span
                  style={{
                    fontFamily: "Poppins ,sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  Second Class Sleeper (SL)
                </span>
              </label>

              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={buisness}
                  onChange={handleBuisnessChange}
                />
                <span
                  style={{
                    fontFamily: "Poppins ,sans-serif",
                    fontSize: "14px",
                    lineHeight: "22px",
                  }}
                >
                  Buisness
                </span>
              </label>
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
