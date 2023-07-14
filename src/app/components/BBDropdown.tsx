import { Option, Select } from "@material-tailwind/react";

interface Props {
  options?: any;
  label: any;
  value?: any;
  type?: string;
  onChange?: (e: any) => any; // for function type
  color?: any;
  onPress?: (event: any) => any;
  containerProps?: any;
  returnType?: "value";
  onClick?: (event: any) => any;
  className?: any;
  displayValue?: any;
}

export default function BBDropdown(props: Props) {
  return (
    <Select
      color="blue"
      label={props.label}
      onChange={(e: any) => (props.onChange ? props.onChange("") : null)}
      value={props.value}
      containerProps={props.containerProps}
      className={props.className}
    >
      {props.options.map((ele: any) => (
        <Option
          onClick={() => {
            props.onPress
              ? props.onPress(props?.returnType ? ele.value : ele.label)
              : null;
            props.onClick ? props.onClick(ele.label) : null;
          }}
          value={ele.label}
        >
          {ele.label}
        </Option>
      ))}
    </Select>
  );
}
