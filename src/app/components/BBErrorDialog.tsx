import {
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";
import BBButton from "./BBButton";
import { BellIcon } from "@heroicons/react/24/solid";

interface DialogProps {
  dialogHeader?: string;
  dialogMessage?: any;
  open: boolean;
  onOkClick?: () => void;
}

export default function BBErrorDialog(props: DialogProps) {
  return (
    <Dialog open={props.open} handler={() => console.log("")} className="">
      <DialogHeader className=" gap-3 bg-opacity-95 text-GreenBlue ">
        {/* <BellIcon className="h-10 w-10 text-red-500" /> */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-12 h-12 text-red-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
          />
        </svg>

        {props.dialogHeader}
      </DialogHeader>
      <DialogBody divider>
        {Array.isArray(props.dialogMessage) ? (
          <>
            {props.dialogMessage.map((obj: string) => (
              <p className="flex justify-center ]">{obj} </p>
            ))}
          </>
        ) : (
          <> {props.dialogMessage}</>
        )}
      </DialogBody>
      <DialogFooter>
        <BBButton label="Ok" size="md" color="" onClick={props.onOkClick} />
      </DialogFooter>
    </Dialog>
  );
}
