"use client";

import React from "react";
import { useSelector } from "react-redux";
import Navigationbar from "@/app/components/Navbar";
import { RotatingLines } from "react-loader-spinner";
import { useRouter } from "next/navigation";
import { Dialog, DialogBody, DialogHeader } from "@material-tailwind/react";

interface ContainerProps {
  children: any;
}

const Container = (props: ContainerProps) => {
  // console.log("Window Location ", window.location.pathname);
  const loading: boolean = useSelector((state: any) => state.app.loading);
  const router = useRouter();

  const userData: any = useSelector((state: any) => state.login.loginDetails);
  console.log("userData in container Page  ..", userData);

  // useEffect(() => {
  //   setPathname(window?.location?.pathname);
  console.log("userData.rollType-----", userData?.data?.data?.rollType);
  // }, []);
  return (
    <div className="relative  ">
      {userData?.data?.data?.rollType === 2 ? <Navigationbar /> : ""}
      {userData?.data?.data?.rollType === 2 ? "" : router.push("/auth")}
      {/* {!["/auth", "/"]?.includes(window?.location?.pathname) && (
        <Navigationbar />
      )} */}
      {/* 
      {!["/auth", "/"]?.includes(pathname) && <Navigationbar />}  */}
      {props.children}
      {/* <div className=" "> */}
      {loading ? (
        <>
          <Dialog
            open
            handler={() => console.log("")}
            className="bg-opacity-0 bg-none border-none shadow-none "
          >
            <DialogBody className="bg-opacity-0 border-none shadow-none">
              <div className="flex w-full justify-center  ">
                <div className="w-fit h-fit border-[5px] border-blue-500 p-4 rounded-full border-x-transparent animate-spin ">
                  {/* <div
                    className="w-fit h-fit rounded-full animate-spin
                     border-[25px] border-solid border-x-blue-500 border-y-gray-100  "
                  ></div> */}
                </div>
              </div>
            </DialogBody>
          </Dialog>
        </>
      ) : null}
    </div>
    // </div>
  );
};

export default Container;
