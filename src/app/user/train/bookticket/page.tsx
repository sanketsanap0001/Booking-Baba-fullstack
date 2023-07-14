"use client";
import BBButton from "@/app/components/BBButton";
import BBDropdown from "@/app/components/BBDropdown";
import BBInput from "@/app/components/BBInput";
import { trainTicket } from "@/redux/action/trainAction";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";

import { useState } from "react";

export default function TrainTicketBookingForm() {
  const [name, setName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [passengerCount, setPassengerCount] = useState("");
  const [classType, setClassType] = useState("");

  const router = useRouter();
  const dispatch = useAppDispatch();

  const addTrainTicketDetails = () => {
    let data = {
      name: name,
      contactNo: contactNo,
      email: email,
      date: date,
      passengerCount: passengerCount,
      classType: classType,
    };
    dispatch(trainTicket(data));
    alert("Ticket Booked");
    // router.push("ticket");
  };

  return (
    <div>
      <div className="bg-white h-full mt-5 p-5 m-auto w-[70%] justify-center rounded-lg">
        <div className="flex justify-center  text-3xl">
          <h1>Ticket Booking</h1>
        </div>
        <div className="flex flex-row justify-center m-6">
          <div className="flex  flex-col mx-5 w-[300px] ">
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Contact No"
              value={contactNo}
              onChange={(e) => setContactNo(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="text"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="date"
              label="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
              label="Passenger Count"
              value={passengerCount}
              onChange={(e) => setPassengerCount(e.target.value)}
            />
            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Economy" },
                { label: "Business" },
                { label: "First Class" },
              ]}
              value={classType}
              onPress={(value: any) => {
                setClassType(value);
              }}
              label="Class Types"
            />
            <div className="flex justify-center mt-4">
              <BBButton
                color=""
                label="Book Ticket"
                size="lg"
                onClick={addTrainTicketDetails}
                className="h-12 bg-blackblue w-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
