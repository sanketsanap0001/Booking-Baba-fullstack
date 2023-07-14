import { Button } from "@material-tailwind/react";
import React from "react";

interface button {
  label?: any;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e: any) => void; // for function type
  size?: "sm" | "lg" | "md";
  color?: any;
  className?: string;
  children?: any;
}

export default function BBButton(props: button) {
  return (
    <Button
      type={props.type}
      onClick={props.onClick}
      color={props.color || "blue"}
      size={props.size}
      className={` w-full text-white text-sm bg-blue-600 border border-blue-600 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[11.5px] px-[14.5px] ${props?.className}`}
    >
      {props.children}
      {props.label}
    </Button>
  );
}
