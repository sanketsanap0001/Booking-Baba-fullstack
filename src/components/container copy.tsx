"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import Navigationbar from "@/app/components/Navbar";
import { RotatingLines } from "react-loader-spinner";

interface ContainerProps {
  children: any;
}

const Container = (props: ContainerProps) => {
  // console.log("Window Location ", window.location.pathname);
  const loading: boolean = useSelector((state: any) => state.app.loading);
  const [pathname, setPathname] = useState("");

  // useEffect(() => {
  //   setPathname(window?.location?.pathname);
  //   console.log("Path Is::>>", window?.location?.pathname);
  // }, []);
  return (
    <div className="relative">
      {!["/auth", "/"]?.includes(window?.location?.pathname) && (
        <Navigationbar />
      )}

      {/* {!["/auth", "/"]?.includes(pathname) && <Navigationbar />} */}
      {props.children}
      <>
        {loading ? (
          <div className="absolute top-0 z-50 flex h-full w-full items-center justify-center bg-white bg-opacity-30">
            {/* <Spinner className="h-12 w-12" /> */}
            <RotatingLines
              strokeColor="green"
              strokeWidth="5"
              animationDuration="0.75"
              width="96"
              visible={true}
            />
          </div>
        ) : null}
      </>
    </div>
  );
};

export default Container;
