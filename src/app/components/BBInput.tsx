import { Input } from "@material-tailwind/react";
import React from "react";

interface Props {
  label?: string;
  value?: string;
  type?: string;
  className?: string;
  onChange?: (e: any) => void; // for function type
  containerProps?: any;
  color?: any;
  max?:number;
  min?:number;
 required?:boolean
}

export default function BBInput(props: Props) {
  return (
    <Input
      // {...props}
      label={props.label}
      value={props.value}
      type={props.type}
      color="blue"
      required
      max={props.max}
      min={props.min}
      //   className="bg-sky-500 hover:bg-sky-700"
      onChange={props.onChange}
      containerProps={
        props.containerProps
          ? props.containerProps
          : {
              className: "min-w-[30px] bg-sky-500 hover:bg-sky-700 ",
            }
      }
    />
  );
}
