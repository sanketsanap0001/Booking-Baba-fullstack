"use client";
import {
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import react, { useState } from "react";

import { FaBed, FaBus, FaTrain } from "react-icons/fa";

import Hotel from "../components/Hotel";
import Train from "../components/Train";
import Bus from "../components/Bus";
import UBannerFooter from "@/components/userComponents/UBannerFooter";
import UFooter from "@/components/userComponents/UFooter";

export default function Page() {
  const [type, setType] = useState("hotel");

  return (
    <div>
      <div className="">
        <div className=" ">
          <Tabs value={type} className=" ">
            <div className=" !bg-[#0C2F55]">
              <TabsHeader
                className="container rounded-none !bg-[#0C2F55] gap-12 lg:max-w-screen-xl mx-auto  px-5 pt-4 pb-0  shadow-none"
                indicatorProps={{
                  className: "rounded-b-none rounded-t-md shadow-none -mx-3 ",
                }}
              >
                <Tab
                  value="hotel"
                  onClick={() => setType("hotel")}
                  className={
                    type === "hotel"
                      ? "text-[#0071cc] w-fit"
                      : "text-[#8298AF] w-fit "
                  }
                >
                  <span className=" text-sm">
                    <FaBed color="" size="30" title="Hotel" className="mt-2" />
                    <>Hotel</>
                  </span>
                </Tab>
                <Tab
                  value="train"
                  onClick={() => setType("train")}
                  className={
                    type === "train"
                      ? "text-[#0071cc] w-fit"
                      : "text-[#8298AF] w-fit"
                  }
                >
                  <span className="text-sm ">
                    <FaTrain
                      color=""
                      size="30"
                      title="train"
                      className="mt-2"
                    />
                    Train
                  </span>
                </Tab>
                <Tab
                  value="bus"
                  onClick={() => setType("bus")}
                  className={
                    type === "bus"
                      ? "text-[#0071cc] w-fit"
                      : "text-[#8298AF] w-fit"
                  }
                >
                  <span className=" text-sm">
                    <FaBus color="" size="30" title="bus" className="mt-2" />
                    Bus
                  </span>
                </Tab>
              </TabsHeader>
            </div>

            <TabsBody className="lg:max-w-screen-xl mx-auto  rounded-b-md overflow-auto   container ">
              <TabPanel value="hotel" className="p-0 flex flex-row">
                <Hotel type={type} />
              </TabPanel>
              <TabPanel value="train" className="p-0 flex flex-row">
                <Train type={type} />
              </TabPanel>
              <TabPanel value="bus" className="p-0 flex flex-row">
                <Bus type={type} />
              </TabPanel>
            </TabsBody>
          </Tabs>
          <div className="bg-white flex flex-col justify-center  mb-10">
            <UBannerFooter />
          </div>
        </div>
        <div className="mb-10">
          <UFooter />
        </div>
      </div>
    </div>
  );
}
