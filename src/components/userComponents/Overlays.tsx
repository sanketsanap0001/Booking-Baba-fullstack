import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

interface Props {
  children: any;
  title: any;
}
export default function Overlays(props: Props) {
  return (
    <OverlayTrigger
      placement="top"
      delay={{ show: 250, hide: 400 }}
      overlay={
        <Tooltip
          id="button-tooltip"
          className="relative bg-black text-white rounded-md w-fit mb-2"
        >
          <div className="px-2 py-1 text-sm"> {props.title}</div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-black border-r border-b border-indigo-500"></div>
        </Tooltip>
      }
    >
      {props.children}
    </OverlayTrigger>
  );
}
