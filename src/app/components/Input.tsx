import { Input } from "@material-tailwind/react";
import React from "react";

interface Props {
  label: string;
  placeholder?: string
  value: string;
  type?: string;
  className?: string;
  onChange: (e: any) => void; // for function type
  containerProps?: any;
  color?: any;
}

export default function (props: Props) {
  return (
    <Input
      label={props.label}
      value={props.value}
      type={props.type}
      color={props.color ? props.color : "orange"}
         className={props.className}
placeholder={props.placeholder}
      
      onChange={props.onChange}
      containerProps={
        props.containerProps
          ? props.containerProps
          : { className: "min-w-[30px] border border-gray-300 rounded-md p-5 " }
      }
    />
  );
}
