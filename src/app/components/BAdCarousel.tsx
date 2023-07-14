"use client";

import { Button, Carousel, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import Image from "next/image";
import booking from "../../images/booking.png";
import top from "../../images/top.jpg";
import rail from "../../images/Trains/home.jpg";
import busimg from "../../images/Buses/banner.jpg";
import { useRouter } from "next/navigation";
import trainbanner1 from "../../images/Trains/train-banner.jpg";
import busbanner2 from "../../images/Buses/bus-banner2.jpg";
import hotelbanner1 from "../../images/hotel/hotel-banner-1.jpg";
import hotelbanner2 from "../../images/hotel/hotel-banner-2.jpg";
import BBTypography from "./BBTypography";

interface Props {
  travelType?: any;
}

export default function BAdCarousel(props: Props) {
  const router = useRouter();
  return (
    <div>
      {props.travelType === "hotel" ? (
        <Carousel className="h-[325px] w-full" loop={true} autoplay={true}>
          <div className="relative h-[325px] w-full">
            <Image
              className=" h-[325px] w-full"
              src={hotelbanner1}
              alt="Multi-services-booking"
            />
          </div>
          <div className="relative h-[325px] w-full">
            <Image
              className=" h-[325px] w-full"
              src={hotelbanner2}
              alt="Multi-services-booking"
            />
          </div>
        </Carousel>
      ) : props.travelType === "train" ? (
        <Carousel className="h-[325px] w-full" loop={true} autoplay={true}>
          <div className="h-[325px] w-full">
            <Image
              className=" h-[325px] w-full"
              src={trainbanner1}
              alt="Multi-services-booking"
            />
          </div>
          <div className="relative h-[325px] w-full">
            <Image
              className=" h-[325px] w-full"
              src={rail}
              alt="Multi-services-booking"
            />
            <div className="absolute inset-0 grid h-full w-full text-white bg-headcolor bg-opacity-50">
              <div className="w-2/4 ml-12 text-center flex flex-col justify-center items-center">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4  text-3xl md:text-4xl lg:text-4xl font-castoro"
                >
                  FLAT 10% CASHBACK
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  on Train Ticket Bookings
                  {/* <div>.......... </div> */}
                  <hr className="my-3" />
                  <div>
                    {" "}
                    Promocode: <span className="text-2xl">Train10</span>
                  </div>
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
      ) : props.travelType === "bus" ? (
        <Carousel className="h-[325px] w-full" loop={true} autoplay={true}>
          <div className="relative h-[325px] w-full">
            <Image
              className="h-[325px] w-full"
              src={busbanner2}
              alt="Multi-services-booking"
            />
          </div>

          <div className="relative h-[325px] w-full">
            <Image
              className=" h-[325px] w-full"
              src={busimg}
              alt="Multi-services-booking"
            />
            <div className="absolute inset-0 grid h-full w-full ">
              <div className="w-2/4 text-center flex flex-col justify-center items-center">
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 ml-12 text-3xl md:text-4xl lg:text-4xl font-castoro"
                >
                  Book Bus Tickets Online!
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80"
                >
                  Save Time & Money
                </Typography>
              </div>
            </div>
          </div>
        </Carousel>
      ) : (
        ""
      )}
    </div>
  );
}
