"use client";

import { Button, Carousel, Typography } from "@material-tailwind/react";
import React from "react";

export default function BBCarousel() {
  return (
    <Carousel className="rounded-xl " loop={true} autoplay={true}>
      <div className="relative h-[400px] w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl3wdesisjn3uwRAAEYTJPeL13_hJauInmYQ&usqp=CAU"
          alt="image 1"
          className=" h-[400px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-3/4 text-center ">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Hotel Booking
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 text-2xl opacity-80"
            >
              Your Kind of holiday, in your kind of place
            </Typography>

            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Start Exploring
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] w-full">
        <img
          src="https://static.toiimg.com/thumb/msid-79934070,width-400,resizemode-4/79934070.jpg"
          alt="image 1"
          className=" h-[400px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-3/4 text-center ">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
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
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Start Exploring
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] w-full">
        <img
          src="https://images.pexels.com/photos/325200/pexels-photo-325200.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="image 1"
          className=" h-[400px] w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center ">
          <div className="w-3/4 text-center ">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Welcome to Train Booking
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
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Start Exploring
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
