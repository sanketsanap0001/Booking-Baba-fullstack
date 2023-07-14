import BBTypography from "@/app/components/BBTypography";
import React from "react";
import { FaBullhorn, FaLock, FaThumbsUp } from "react-icons/fa";
import HiSupport, { HiOutlineSupport } from "react-icons/hi";

export default function UBannerFooter() {
  return (
    <>
      <div className=" max-w-screen-xl mx-auto flex flex-row p-3 py-7 text-center">
        <div className="w-1/4 flex flex-col">
          <div className="flex justify-center text-[35px] text-uficon mb-3">
            <FaLock />
          </div>
          <div className="p-3 flex flex-col justify-center">
            <BBTypography className=" text-[21px] text-headcolor mb-[10px] font-medium">
              100% Secure Payments
            </BBTypography>
            <BBTypography className="text-greycommon text-[14px] leading-7">
              Moving your card details to a much more secured place.
            </BBTypography>
          </div>
        </div>
        <div className=" w-1/4 flex flex-col">
          <div className="flex justify-center text-[35px] text-uficon mb-3">
            <FaThumbsUp />
          </div>
          <div className="p-3 flex flex-col justify-center">
            <BBTypography className=" text-[21px] text-headcolor mb-[10px] font-medium">
              Trust pay
            </BBTypography>
            <BBTypography className="text-greycommon text-[14px] leading-7">
              100% Payment Protection. Easy Return Policy.{" "}
            </BBTypography>
          </div>
        </div>
        <div className="w-1/4 flex flex-col">
          <div className="flex justify-center text-[35px] text-uficon mb-3">
            <FaBullhorn />
          </div>
          <div className="p-3 flex flex-col justify-center">
            <BBTypography className=" text-[21px] text-headcolor mb-[10px] font-medium">
              Refer & Earn
            </BBTypography>
            <BBTypography className="text-greycommon text-[14px] leading-7">
              Invite a friend to sign up and earn up to $100.{" "}
            </BBTypography>
          </div>
        </div>
        <div className=" w-1/4 flex flex-col">
          <div className="flex justify-center text-[35px] text-uficon font-extrabold mb-3">
            <HiOutlineSupport />
          </div>
          <div className="p-3 flex flex-col justify-center ">
            <BBTypography className=" text-[21px] text-headcolor mb-[10px] font-medium ">
              24X7 Support
            </BBTypography>
            <BBTypography className="text-greycommon text-[14px] leading-7">
              We're here to help. Have a query and need help ?
              <a href="/a_new" className="text-blue-900">
                Click here
              </a>
            </BBTypography>
          </div>
        </div>
      </div>
    </>
  );
}
