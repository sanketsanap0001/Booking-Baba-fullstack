"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import BBCarousel from "../components/BBCarousel";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  return (
    <div className="bg-white">
      <BBCarousel />
      <div className="flex flex-row my-4">
        <div>
          <Card className=" mx-6 w-[400px] h-[400px]">
            <CardHeader
              floated={false}
              color="blue-gray"
              className="relative h-30"
            >
              <img
                src="/image/kkk.jpg"
                alt="img-blur-shadow"
              />
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
              <img
                src="/image/bus1.jpg"
                alt="img-blur-shadow"
              />
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
            <img
              src="/image/train2.jpg"
              alt="img-blur-shadow"
            />
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
