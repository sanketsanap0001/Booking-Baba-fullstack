"use client";
import BBButton from "@/app/components/BBButton";
import BBErrorDialog from "@/app/components/BBErrorDialog";
import BBInput from "@/app/components/BBInput";
import { updatepasswordAction } from "@/redux/action/user";
import { useAppDispatch } from "@/redux/store";
import { updatePwd } from "@/service/services";
import { Card } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Reset({ params }: any) {
  const dispatch = useAppDispatch();
  const [password, setPassword] = useState<any>();
  const [confirmPassword, setConfirmPassword] = useState<any>();
  const [errorDialogMessage, setErrorDialogMessage] = useState([]);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const router: any = useRouter();

  const userData: any = useSelector((state: any) => state.user.resetPassword);
  console.log("updating Password data : ", userData);
  console.log("id id data : ", params.id);

  const passwordCredential = () => {
    let data = {
      _id: params.id,
      password: password,
    };
    console.log("email for changing password   : ", data);

    let isErrorFound = false;
    let error: any = [];
    if (!password || !password.trim()) {
      isErrorFound = true;
      error.push("Please Enter Password");
    }
    if (!confirmPassword || !confirmPassword.trim()) {
      isErrorFound = true;
      error.push("Please Enter Confirm Password");
    }
    if (password !== confirmPassword) {
      isErrorFound = true;
      error.push(
        " Password Not Matching ..!! ","Password and Confirm-Password Should Be Same"
      );
    }

    if (isErrorFound) {
      setErrorDialogMessage(error);
      setShowErrorDialog(true);
      return;
    } else {
      dispatch(updatepasswordAction(data));
      alert("Password Updated Successfully");
      router.push("/auth");
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <Card className=" w-[500px]">
        {/* <div className="flex ju">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QtnR4miEHA_V3TwiYfnEMiFPFXBPYVuUzg&usqp=CAU"
            alt="efb"
            className="x border border-black"
            height={250}
            width={250}
          ></img>
        </div> */}
        <form className="relative p-5 font-signika mt-0 flex flex-col  w-[400px] h-[400px] gap-10">
          <div className="text-3xl">Great! </div>
          <div className="text-lg">Please enter new password</div>

          <div className="flex flex-col justify-center items-center gap-5">
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

            <BBButton
              color=""
              label="Update Pasword"
              size="lg"
              onClick={passwordCredential}
              className="relative h-12 bg-blackblue hover:bg-GreenBlue"
            />
          </div>
        </form>
      </Card>
      <BBErrorDialog
        dialogHeader="Error"
        dialogMessage={errorDialogMessage}
        open={showErrorDialog}
        onOkClick={() => setShowErrorDialog(false)}
      />
    </div>
  );
}
