import react from "react";

interface Props {
  header: any;
  subHeader: any;
}
export default function UHeader(props: Props) {
  return (
    <>
      <div className="bg-headcolor py-10 text-white text-[32px] font-Poppins ">
        <div className="max-w-screen-xl mx-auto flex flex-row justify-between items-center">
          <div className="text-[32px]">{props.header}</div>
          <div className="text-[13px]">{props.subHeader}</div>
        </div>
      </div>
    </>
  );
}
