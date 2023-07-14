import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Accordion from "./userComponents/UCounter";
import { type } from "os";
import UInput from "./userComponents/UInput";
import UDatePicker from "./userComponents/UDatePicker";
import BBButton from "@/app/components/BBButton";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { getTrainBySearch } from "@/redux/action/trainAction";
import { getBusBySearch } from "@/redux/action/busaction";
import { HiLocationMarker } from "react-icons/hi";

interface Props {
  from?: string;
  to?: string;
  departDate?: Date | any;
  checkoutDate?: Date | any;
  travelType?: any;
  dropDownValue?: string | any;
  placeholder?: any;
  title?: string;
}

const SearchComponent = (props: Props) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [dropdownValue, setDropdownValue] = useState("");
  const [departDate, setDepartDate] = useState<Date | any>(null);
  const [checkoutDate, setCheckoutDate] = useState<Date | any>(null);
  const dispatch = useAppDispatch();
  const router = useRouter();

  console.log("from", props.from);
  console.log("from", arrivalDate);

  const handleSearch = () => {
    console.log("from nd to ", from, to);
    if (!from && !to) {
      alert("plz enter details");
    } else {
      if (from) {
        if (props.travelType === "train") {
          let data = { from_Stn: from, to_Stn: to };
          console.log("Searching for trains:", data);
          dispatch(getTrainBySearch(data)).then((res: any) => {
            console.log("response train ???????????????????????", res);
            router.push("/user/train/newtrain/list");
          });
        } else if (props.travelType === "hotel") {
        } else if (props.travelType === "bus") {
          let data = { from: from, to: to };
          dispatch(getBusBySearch(data)).then((res: any) => {
            console.log("response  bus     ???????????????????????", res);
            // setShowBox(true);
            router.push("/user/bus/buslist");
          });
        }
      } else {
        alert("Please Insert Fields");
      }
    }

    const searchData = {
      from,
      to,
      departDate,
      checkoutDate,
    };

    console.log("data", searchData);
    console.log("from", props.travelType);
    console.log("gefhgrhrhhrhrhryn r hrhethn", window.location.pathname);
  };

  return (
    <div>
      <div className="w-full flex flex-row gap-2 text-sm">
        <UInput
          type="text"
          id="from"
          value={from}
          required
          placeholder={
            props.travelType === "hotel" ? "Enter Locality , City " : "From"
          }
          onChange={(e) => {
            setFrom(e.target.value);
          }}
          // className="min-w-fit"
          icon={<HiLocationMarker />}
        />
        {props.travelType === "hotel" ? null : (
          <UInput
            type="text"
            id="to"
            value={to}
            placeholder="To"
            onChange={(e) => {
              setTo(e.target.value);
            }}
            icon={<HiLocationMarker />}
          />
        )}
        {props.travelType === "hotel" ? (
          <div className="flex flex-row gap-2">
            <div>
              <UDatePicker
                id="departDate"
                placeholder="Check In"
                minDate={new Date()}
                selected={departDate}
                onChange={(date: any) => {
                  setDepartDate(date);
                }}
              />
            </div>
            <div>
              <UDatePicker
                id="checkoutDate"
                placeholder="Check Out"
                minDate={new Date()}
                selected={checkoutDate}
                onChange={(date: any) => {
                  setCheckoutDate(date);
                }}
              />
            </div>
          </div>
        ) : (
          <div>
            <UDatePicker
              id="departDate"
              placeholder="Depart Date"
              minDate={new Date()}
              selected={departDate}
              onChange={(date: any) => {
                setDepartDate(date);
              }}
            />
          </div>
        )}
        {/* <div> */}
        <Accordion travelType={props.travelType} />
        {/* </div> */}

        <BBButton
          label="Search"
          type="button"
          onClick={handleSearch}
        ></BBButton>
      </div>
    </div>
  );
};

export default SearchComponent;
