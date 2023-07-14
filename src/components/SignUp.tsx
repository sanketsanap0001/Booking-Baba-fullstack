"use-client";
import React, { useEffect, useState } from "react";
import BBInput from "../app/components/BBInput";

import { Radio } from "@material-tailwind/react";
import BBTypography from "../app/components/BBTypography";
import BBButton from "../app/components/BBButton";
import BBErrorDialog from "../app/components/BBErrorDialog";
import { useAppDispatch } from "@/redux/store";
import { login, signup } from "@/redux/action/user";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

function SignUp() {
  const dispatch = useAppDispatch();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [gender, setGender] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const [errorDialogMessage, setErrorDialogMessage] = useState([]);

  const router = useRouter();

  const signupStatus: any = useSelector((state: any) => state.user.createdUser);
  console.log("signupStatus ..", signupStatus);
  // console.log("Roll Type is ..", userData?.rollType);
  // const rollType = userData?.rollType;

  const userData: any = useSelector((state: any) => state.login.loginDetails);
  console.log("userData in sign up page ..", userData);
  console.log("Roll Type in sign up pagee ..", userData?.data?.data?.rollType);
  const rollType = userData?.data?.data?.rollType;

  const isNumberValid = (num: any) => {
    return /\d/.test(num);
  };

  useEffect(() => {
    if (signupStatus) {
      if (signupStatus.success === true) {
        //call login api
        let data: any = {
          email: email,
          password: password,
        };
        console.log("data is signup email and pass >>>>>>>>>>>>>>", data);

        dispatch(login(data));
      } else {
        console.log("inside else error  ");
      }
    }
  }, [signupStatus]);

  const signUpCredential = () => {
    let data = {
      rollType: 1, //for user and 1 is admin
      firstName: firstName,
      lastName: lastName,
      mobileNumber: mobileNumber,
      birthDate: birthDate,
      email: email,
      password: password,
    };
    let isErrorFound = false;
    let error: any = [];
    if (!firstName || !firstName.trim()) {
      isErrorFound = true;
      error.push("first name");
    }

    if (!lastName || !lastName.trim()) {
      isErrorFound = true;
      error.push("last name");
    }

    if (!mobileNumber || !mobileNumber.trim() || !isNumberValid(mobileNumber)) {
      isErrorFound = true;
      error.push("Mobile Number in number format");
    }

    if (!email || !email.trim()) {
      isErrorFound = true;
      error.push("Email Address");
    }
    if (
      !email.includes("@") ||
      (!email.includes(".com") && !email.includes(".in"))
    ) {
      isErrorFound = true;
      error.push("valid email address");
    }
    if (!birthDate || !birthDate.trim()) {
      isErrorFound = true;
      error.push("Birthdate");
    }
    if (!password || !password.trim()) {
      isErrorFound = true;
      error.push("Password");
    }
    if (!confirmPassword || !confirmPassword.trim()) {
      isErrorFound = true;
      error.push("Confirm Password");
    }
    if (password !== confirmPassword) {
      isErrorFound = true;
      error.push("Same Password and Confirm-Password");
    }
    if (isErrorFound) {
      setErrorDialogMessage(error);
      setShowErrorDialog(true);
      return;
    } else {
      dispatch(signup(data)).then(() => router.push("/user"));
    }
  };

  return (
    <>
      <form className="font-signika mt-0 flex flex-col gap-2 ">
        <div className="flex items-center gap-2 mt-2">
          <BBInput
            label="First Name"
            containerProps={{ className: "min-w-[30px]" }}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <BBInput
            label="Last Name"
            containerProps={{ className: "min-w-[30px]" }}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-2">
          <BBInput
            label="Mobile Number "
            containerProps={{ className: "min-w-[30px]" }}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ""))}
          />
          <BBInput
            type="date"
            label="Birth-Date"
            containerProps={{ className: "min-w-[30px]" }}
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
          />
        </div>

        <div>
          <BBInput
            type="email"
            label="Email Address "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-1">
          <BBInput
            containerProps={{ className: "min-w-[30px]" }}
            type="password"
            label="Password "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <BBInput
            type="password"
            label="Confirm-Password "
            containerProps={{ className: "min-w-[30px]" }}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div>
          <BBTypography
            variant="small"
            color="blue-gray"
            className="font-signika mb-0 font-medium"
            text="Gender"
          />

          <Radio
            id="male"
            label="Male"
            name="gender"
            color="blue"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
          <Radio
            id="Female"
            label="Female"
            name="gender"
            color="blue"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>
        <BBButton
          color=""
          label="Sign Up"
          size="lg"
          onClick={signUpCredential}
          className="relative h-12 bg-blackblue hover:bg-GreenBlue"
        />
      </form>
      <BBErrorDialog
        dialogHeader="Please Enter"
        dialogMessage={errorDialogMessage}
        open={showErrorDialog}
        onOkClick={() => setShowErrorDialog(false)}
      />
    </>
  );
}

export default SignUp;
