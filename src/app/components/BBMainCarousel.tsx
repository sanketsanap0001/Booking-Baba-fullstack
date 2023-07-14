"use client";

import { Button, Carousel, Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import Image from "next/image";
import booking from "../../images/booking.png";
import top from "../../images/top.jpg";
import rail from "../../images/Trains/home.jpg";
import busimg from "../../images/Buses/banner.jpg";
import { useRouter } from "next/navigation";

export default function BBMainCarousel() {
  const router = useRouter();
  return (
    <Carousel className="h-[400px] w-full" loop={true} autoplay={true}>
      <div className="h-[400px] w-full">
        <Image
          className=" h-[400px] w-full"
          src={booking}
          alt="Multi-services-booking"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-3/4 text-center ">
            <div className="flex align-baseline -mx-7 mt-[200px]">
              <Button
                size="lg"
                color="white"
                className=""
                onClick={() => {
                  router.push("/auth");
                }}
              >
                *** Let's Start Exploring Booking baba ***
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] w-full">
        <Image
          className="h-[400px] w-full"
          src={top}
          alt="Multi-services-booking"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-top ">
          <div className="w-3/4 text-left ml-12">
            <Typography
              variant="h1"
              color="black"
              className="mb-4 mt-12 text-3xl md:text-4xl lg:text-4xl font-castoro"
            >
              Welcome to Hotel Booking
            </Typography>
            <Typography
              variant="lead"
              color="blue-gray"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="relative flex  gap-2">
              <Button
                size="lg"
                color="white"
                onClick={() => {
                  router.push("/auth");
                }}
              >
                Start Exploring
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] w-full">
        <Image
          className=" h-[400px] w-full"
          src={rail}
          alt="Multi-services-booking"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-top ">
          <div className="w-3/4 text-left ml-12">
            <Typography
              variant="h1"
              color="black"
              className="mb-4 mt-12 text-3xl md:text-4xl lg:text-4xl font-castoro"
            >
              Welcome to Train Booking
            </Typography>
            <Typography
              variant="lead"
              color="blue-gray"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className=" flex gap-2">
              <Button
                size="lg"
                color="white"
                onClick={() => {
                  router.push("/auth");
                }}
              >
                Start Exploring
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] w-full">
        <Image
          className=" h-[400px] w-full"
          src={busimg}
          alt="Multi-services-booking"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-top ">
          <div className="w-3/4 text-left ml-12">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 mt-12 text-3xl md:text-4xl lg:text-4xl font-castoro"
            >
              Welcome to Bus Booking
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that quality
              of air that emanation from old trees, that so wonderfully changes
              and renews a weary spirit.
            </Typography>
            <div className="flex gap-2">
              <Button
                size="lg"
                color="white"
                onClick={() => {
                  router.push("/auth");
                }}
              >
                Start Exploring
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
