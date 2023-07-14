import { Checkbox, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import BBInput from "../app/components/BBInput";
import BBButton from "../app/components/BBButton";
import BBErrorDialog from "../app/components/BBErrorDialog";
import { useAppDispatch } from "@/redux/store";
import { login } from "@/redux/action/user";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

export default function Login() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const [errorDialogMessage, setErrorDialogMessage] = useState([]);
  const userData: any = useSelector((state: any) => state.login.loginDetails);
  console.log("userData is ..", userData);
  console.log("Roll Type is ..", userData?.data?.data?.rollType);
  const rollType = userData?.data?.data?.rollType;
  const router: any = useRouter();

  // useEffect(() => {
  //   if (userData) {
  //     if (rollType === 1) {
  //       console.log("called  if ");

  //       router.push("/dashboard");
  //     } else if (rollType != 1) {
  //       console.log("called else if ");
  //       router.push("/user");
  //     }
  //   }
  // }, [userData]);

  const loginCredential = () => {
    let data = {
      email: email,
      password: password,
    };

    let isErrorFound = false;
    let error: any = [];
    console.log("API userData is ..", userData);
    if (!email || !email.trim()) {
      isErrorFound = true;
      error.push("Valid Email Address");
    }

    if (!password || !password.trim()) {
      isErrorFound = true;
      error.push("Valid Password");
    }
    if (isErrorFound) {
      setErrorDialogMessage(error);
      setShowErrorDialog(true);
      return;
    } else {
      dispatch(login(data)).then(() => router.push("/user"));
    }
  };

  return (
    <>
      <form className="my-6 flex flex-col gap-2">
        <div>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Email Id
          </Typography>
          <BBInput
            type="email"
            label="Email Details"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="my-2">
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-2 font-medium"
          >
            Password
          </Typography>
          <BBInput
            type="password"
            label="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex flex-row justify-between items-center">
          <Checkbox label="Remember Me" color="blue" className=" left-0" />
          <h1
            onClick={() => router.push("auth/resetpassword")}
            className="cursor-pointer font-medium text-blue-500 transition-colors hover:text-GreenBlue hover:text-lg"
          >
            Forget Password?
          </h1>
        </div>
        <BBButton
          color=""
          label="Login"
          size="lg"
          onClick={() => loginCredential()}
          className="relative h-12 bg-blackblue hover:bg-GreenBlue"
        />
      </form>
      <BBErrorDialog
        dialogHeader="Please enter"
        dialogMessage={errorDialogMessage}
        open={showErrorDialog}
        onOkClick={() => setShowErrorDialog(false)}
      />
    </>
  );
}
