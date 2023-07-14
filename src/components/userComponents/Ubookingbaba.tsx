"use client";
import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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

export default function Example() {
  const [open, setOpen] = useState(0);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <div className="text-3xl text-[#0c2f54] w-full py-5">
        What is Booking Baba?
      </div>

      <div>
        <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
          {" "}
          <AccordionHeader onClick={() => handleOpen(1)}>
            <div className="text-[21px] font-normal  text-[#0c2f54] w-full">
              {" "}
              Why choose us?{" "}
            </div>
          </AccordionHeader>
          <AccordionBody>
            <div className="text-sm font-normal  text-[#535b61] w-full">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </div>
          </AccordionBody>
        </Accordion>
      </div>

      <div>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(2)}>
            <div className="text-[21px] font-normal  text-[#0c2f54] w-full">
              Our mission
            </div>
          </AccordionHeader>

          <AccordionBody>
            <div className="text-sm font-normal  text-[#535b61] w-full">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </div>
          </AccordionBody>
        </Accordion>
      </div>
      <div>
        <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader onClick={() => handleOpen(3)}>
            <div className="text-[21px] font-normal  text-[#0c2f54] w-full">
              Our vision
            </div>
          </AccordionHeader>
          
          <AccordionBody>
            <div  className="text-sm font-normal  text-[#535b61] w-full">   
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  );
}
