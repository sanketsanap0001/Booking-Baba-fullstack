"use client";

import HomeSearch from "@/components/HomeSearch";
import BAdCarousel from "./BAdCarousel";
import UFeatures from "@/components/userComponents/UFeatures";

interface Props {
  type?: any;
}

export default function Hotel(props: Props) {
  return (
    <div>
      <div className=" ">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-[45%]">
            <HomeSearch
              title="Book Domestic and International Hotels"
              travelType={props.type}
            />
          </div>
          <div className="w-full lg:w-[55%]">
            <BAdCarousel travelType={props.type} />
          </div>
        </div>
        <div>
          <UFeatures
            title="Why Book hotels with Booking Baba"
            subtitle="Book Hotels Online. Save Time and Money!"
            travelType={props.type}
          />
        </div>
      </div>
    </div>
  );
}
