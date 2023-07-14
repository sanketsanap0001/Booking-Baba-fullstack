// import { Input } from "@material-tailwind/react";
import react from "react";

interface Props {
  type?: string;
  id?: any;
  required?: boolean;
  value?: string;
  placeholder?: any;
  className?: any;
  onChange?: (e: any) => void; // for function type
  style?: any;
  label?: any;
  icon?: any;
}

export default function UInput(props: Props) {
  return (
    <div className="w-full relative">
      <input
        required={props.required}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
        onChange={props.onChange}
        className={`w-full  border border-gray-500 rounded-[4px] focus:outline-none focus:ring-1 focus:ring-blue-400 py-[11px] px-[14.5px] ${props?.className}`}
        style={props.style}
      >
        {props.label}
      </input>
      <span className="absolute right-4 z-[3px] pointer-events-none text-[#c4c3c3] top-3 text-2xl">
        {props.icon}
      </span>
    </div>
  );
}
