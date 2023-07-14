import { Typography } from "@material-tailwind/react";
import { children } from "@material-tailwind/react/types/components/accordion";
import React from "react";

interface Props {
  variant?: string;
  color?: string;
  className?: string;
  text?: string;
  children?: any;
  as?: string;
  onClick?: (event: any) => any;
}

export default function BBTypography(props: Props) {
  return (
    <Typography
      as={props.as}
      variant={props.variant}
      color={props.color}
      onClick={props.onClick}
      className={`font-Poppins text-lightgrey mb-1 ${props?.className}`}
    >
      {props.text} {props.children}
    </Typography>
  );
}
