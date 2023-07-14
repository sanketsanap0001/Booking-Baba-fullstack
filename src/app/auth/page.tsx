"use client";
import React, { useEffect } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Avatar,
} from "@material-tailwind/react";

import SignUp from "../../components/SignUp";
import Login from "../../components/Login";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  const [type, setType] = React.useState("login");

  // const userData: any = useSelector((state: any) => state.user.createdUser);
  // console.log("userData is in auth page ..", userData);
  const userData: any = useSelector((state: any) => state.login.loginDetails);
  console.log("userData in container Page  ..", userData);

  // useEffect(() => {
  //   localStorage.clear();
  //   router.refresh();
  // }, [userData]);

  return (
    <div className="flex justify-center items-center mt-5">
      <Card className="w-full max-w-[24rem] ">
        <CardHeader
          floated={false}
          shadow={false}
          className="m-0 grid place-items-center rounded-b-none py-2 px-4 text-center bg-GreenBlue "
        >
          <div className="mb-1 rounded-full border border-white/10 bg-white/10  text-white">
            <Avatar
              src="data:image/jpeg;base64,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"
              alt="imagee"
              className="h-[100px] w-[100px]"
            />
          </div>
          <Typography className="font-castoro" variant="h5" color="white">
            Booking Baba
          </Typography>
        </CardHeader>
        <CardBody className="">
          <Tabs value={type} className="overflow-auto p-2">
            <TabsHeader
              className="p-0 z-0"
              indicatorProps={{
                className: "bg-[#4fb291] shadow-none p-0",
              }}
            >
              <Tab
                value="login"
                onClick={() => setType("login")}
                className={
                  type === "login"
                    ? "text-white font-bold font-castoro pt-2"
                    : "text-black font-bold  font-castoro pt-2"
                }
              >
                Log-In
              </Tab>
              <Tab
                value="signup"
                className={
                  type === "signup"
                    ? "text-white font-bold font-castoro pt-2"
                    : "text-black font-bold font-castoro pt-2"
                }
                onClick={() => setType("signup")}
              >
                Sign Up
              </Tab>
            </TabsHeader>
            <TabsBody
              className="!overflow-x-hidden !overflow-y-hidden"
              animate={{
                initial: {
                  x: type === "login" ? 400 : -400,
                },
                mount: {
                  x: 0,
                },
                unmount: {
                  x: type === "login" ? 400 : -400,
                },
              }}
            >
              <TabPanel value="login" className="p-0">
                <Login />
              </TabPanel>
              <TabPanel value="signup" className="p-0">
                <SignUp />
              </TabPanel>
            </TabsBody>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  );
}
