"use client";
import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";
import validator from "validator";
import bus2 from "../../../images/Buses/carousel/bus2.png";
import password from "../../../images/other/password.jpg";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { error } from "console";
import React, { useState, useEffect } from "react";
import { useAppDispatch } from "@/redux/store";
import { login, reset } from "@/redux/action/user";
import { useSelector } from "react-redux";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const dispatch = useAppDispatch();

  const router: any = useRouter();

  const userData: any = useSelector((state: any) => state.user.resetPassword);
  console.log("Reset Password data : ", userData);

  const id = userData?.data?.data?._id;
  console.log("Reset Password id     : ", id);

  useEffect(() => {
    if (id) {
      router.push("auth/resetpassword/resetnow/" + id);
    }
  }, [userData]);

  const forgetpwd = () => {
    let data = {
      email: email,
    };
    console.log("form data", email);

    if (!validator.isEmail(email)) {
      setError("*Enter valid email Address");
    } else {
      dispatch(reset(data));
    }
  };

  return (
    <div className="flex justify-center items-center py-[5px]">
      <Card className="flex flex-row flex-wrap w-auto  m-10 ">
        {/* <CardHeader className=" m-0 p-2 rounded-b-none place-items-center bg-GreenBlue">
          <Typography className="font-castoro text-white " variant="">
            BOOKING BABA
          </Typography>
        </CardHeader> */}

        <CardBody>
          <Typography className="font-castoro text-black " variant="">
            Forget password
          </Typography>
          <Image src={password} alt="fgg" height={250} width={250}></Image>
        </CardBody>

        <CardFooter className="flex flex-col m-10 gap-5 lg:gap-5">
          <Typography className="font-castoro text-black " variant="">
            <p> Please Enter Registered email </p>
          </Typography>

          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 font-medium"
          >
            Email Id *
          </Typography>
          <BBInput
            type="email"
            label="Email Details"
            value={email}
            onChange={(e) => {
              setError("");
              setEmail(e.target.value);
            }}
          />
          <p className="text-red-500">{error}</p>
          <div className="flex justify-around gap-2">
            <BBButton
              color=""
              label="Back"
              size="md"
              onClick={() => router.back()}
              className=" m-0 p-3 w-[50%] rounded-md place-items-center bg-GreenBlue hover:bg-blackblue"
            />

            <BBButton
              color=""
              label="Change Password"
              size="md"
              onClick={() => forgetpwd()}
              className=" m-0 p-3 w-[50%] rounded-md place-items-center bg-GreenBlue hover:bg-blackblue"
            />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ResetPassword;
