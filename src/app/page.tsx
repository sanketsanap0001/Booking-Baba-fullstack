"use client";
import Link from "next/link";

import booking from "../images/booking.png";
import Image from "next/image";

import { useRouter } from "next/navigation";
import react, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import BBMainCarousel from "./components/BBMainCarousel";
import h1 from "../images/hotel/h1.jpg";
import bus1 from "../images/Buses/bus1.png";
import rail from "../images/Trains/rail.jpg";
import Navigationbar from "./components/Navbar";
import { useSelector } from "react-redux";
// import { Modal } from "react-bootstrap";



export default function Home() {
  const userData: any = useSelector((state: any) => state.login.loginDetails);
  console.log("8080 Page ..", userData);
  console.log("8080 page Roll Type is ..", userData?.data?.data?.rollType);
  let rollType = userData?.data?.data?.rollType;
  const router = useRouter();

  // useEffect(() => {
  //   if (rollType === 1) {
  //     router.push("/dashboard");
  //   } else if (rollType === 2) {
  //     router.push("/user");
  //   } else {
  //     setTimeout(() => {
  //       router.push("/auth");
  //     }, 10000);
  //   }
  // }, [userData]);

  return (
    <div className="">
      <Navigationbar />
      <BBMainCarousel />
      {/* <div className="flex flex-col gap-4">
        <div>
          <Card className="flex flex-row mx-6 w-full h-auto ">
            <CardHeader
              floated={false}
              color="blue-gray"
              className=" h-[400px] w-[600px] "
            >
              <Image
                className="h-[400px] object-cover"
                src={h1}
                alt="Multi-services-booking"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Hotel Booking
              </Typography>
              <Typography>
                Search best prices on hotels,home and much more
              </Typography>
              <Button onClick={() => router.push("/user/hotels")}>
                Book Now
              </Button>
            </CardBody>
          </Card>
        </div>

        <div>
          <Card className="flex flex-row mx-6 w-full h-auto ">
            <CardHeader
              floated={false}
              color="blue-gray"
              className=" h-[400px] w-[600px] "
            >
              <Image
                className="h-[400px] object-cover"
                src={rail}
                alt="Multi-services-booking"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Train Booking
              </Typography>
              <Typography>
                Make Your Train Booking Smoother with Baba-Booking
              </Typography>
              <Button onClick={() => router.push("/user/train")}>
                Book Now
              </Button>
            </CardBody>
          </Card>
        </div>

        <div>
          <Card className="flex flex-row mx-6 w-full h-auto ">
            <CardHeader
              floated={false}
              color="blue-gray"
              className="relative h-30"
            >
              <Image
                className="h-[400px] object-cover"
                src={bus1}
                alt="Multi-services-booking"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bus Booking
              </Typography>
              <Typography>
                Make Your Bus Booking Smoother with Baba-Booking
              </Typography>
              <Button onClick={() => router.push("/user/bus")}>Book Now</Button>
            </CardBody>
          </Card>
        </div>
      </div> */}
      <div className="flex flex-row my-4">
        <div>
          <Card className=" mx-6 w-[400px] h-[400px]">
            <CardHeader
              floated={false}
              color="blue-gray"
              className="relative h-30"
            >
              <Image src={h1} alt="img-blur-shadow" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Hotel Booking
              </Typography>
              <Typography>
                Search best prices on hotels,home and much more...
              </Typography>
            </CardBody>
            <CardFooter className="pt-0 ">
              <Button onClick={() => router.push("/user/hotels")}>
                Book Now
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div>
          <Card className="  w-[400px] h-[400px]">
            <CardHeader
              floated={false}
              color="blue-gray"
              className="relative h-30"
            >
              <Image src={bus1} alt="img-blur-shadow" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Bus Booking
              </Typography>
              <Typography>
                Make Your Bus Booking Smoother with Baba-Booking
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button onClick={() => router.push("/user/bus")}>Book Now</Button>
            </CardFooter>
          </Card>
        </div>
        <Card className="mx-6 w-[400px] h-[400px]">
          <CardHeader
            floated={false}
            color="blue-gray"
            className="relative h-30"
          >
            <Image src={rail} alt="img-blur-shadow" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              Train Booking
            </Typography>
            <Typography>
              Make Your Train Booking Smoother with Baba-Booking
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={() => router.push("/user/train")}>Book Now</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
