"use client";

import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";
import "../../styles/hotel.css";

import { Typography, List } from "@material-tailwind/react";
import { useState } from "react";
import BBCheckbox from "@/app/components/BBCheckbox";
import BBDropdown from "@/app/components/BBDropdown";

import BBErrorDialog from "@/app/components/BBErrorDialog";
import { useAppDispatch } from "@/redux/store";
import { addBuses } from "@/redux/action/busaction";
import { useRouter } from "next/navigation";
import { BusType } from "@/utils/BusData";

export default function AddBus() {
  const dispatch = useAppDispatch();
  const [busname, setBusname] = useState<string>("");
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  const [busnumber, setBusnumber] = useState<string>("");
  const [time, setTime] = useState<string>("");
  const [seats, setSeats] = useState<string>("");
  const [ticketprice, setTicketPrice] = useState<string>("");
  const [operator, setOperator] = useState<string>("");
  const [busstops, setBusStops] = useState<string>("");
  const [noofstop, setNoOfStop] = useState("");
  const [bookingseats, setBookingSeats] = useState("");
  const [travelagencyname, setTravelAgencyName] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [pickUpPoint, setPickUpPoint] = useState("");
  const [busType, setBusType] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [duration, setDuration] = useState("");
  const [busImage, setBusImage] = useState<any>();
  const [wifi, setWifi] = useState<boolean>(true);
  const [cpoint, setCpoint] = useState<boolean>(true);
  const [system, setSystem] = useState<boolean>(true);
  const [lights, setLights] = useState<boolean>(true);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const router = useRouter();

  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const [errorDialogMessage, setErrorDialogMessage] = useState([]);

  const onFileUploadChange = (e: any) => {
    const fileInput = e?.target;

    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }

    const busImage = fileInput.files[0];

    setBusImage(busImage);
    console.log(busImage);
    // setPreviewUrl(URL.createObjectURL(busImage));
  };

  const addBus = (e: any) => {
    console.log("called add bus");
    if (!busImage) {
      return;
    }
    try {
      let isErrorFound = false;
      let error: any = [];
      if (!busname || !busname.trim()) {
        isErrorFound = true;
        error.push("plz add bus..");
      }

      if (!busnumber || !busnumber.trim()) {
        isErrorFound = true;
        error.push("Please add bus no..");
      }
      if (!from || !from.trim()) {
        isErrorFound = true;
        error.push("Please add route ");
      }
      if (!to || !to.trim()) {
        isErrorFound = true;
        error.push("Please add route ");
      }
      if (!arrivalDate || !arrivalDate.trim()) {
        isErrorFound = true;
        error.push("Please enter arrival date ");
      }
      if (!duration || !duration.trim()) {
        isErrorFound = true;
        error.push("Please enter duration time ");
      }
      if (!departureTime || !departureTime.trim()) {
        isErrorFound = true;
        error.push("Please enter departure time ");
      }
      if (!arrivalTime || !arrivalTime.trim()) {
        isErrorFound = true;
        error.push("Please enter arrival time");
      }
      if (!seats || !seats.trim()) {
        isErrorFound = true;
        error.push("Please enter total seats");
      }
      if (!ticketprice || !ticketprice.trim()) {
        isErrorFound = true;
        error.push("Please enter ticket price ");
      }
      if (!operator || !operator.trim()) {
        isErrorFound = true;
        error.push("Please enter bus operator name ");
      }
      if (!pickUpPoint || !pickUpPoint.trim()) {
        isErrorFound = true;
        error.push("Please enter pickup point");
      }

      if (!busstops || !busstops.trim()) {
        isErrorFound = true;
        error.push("Please enter busstops point");
      }

      if (!busType || !busType.trim()) {
        isErrorFound = true;
        error.push("Please enter bus type ");
      }
      if (!currentStatus || !currentStatus.trim()) {
        isErrorFound = true;
        error.push("Please enter current status");
      }

      if (isErrorFound) {
        setErrorDialogMessage(error);
        setShowErrorDialog(true);
        return;
      } else {
        let formData = new FormData();
        formData.append("busnumber", busnumber);
        formData.append("busname", busname);
        formData.append("from", from);
        formData.append("to", to);
        formData.append("arrivalDate", arrivalDate);
        formData.append("seats", seats);
        formData.append("departureTime", departureTime);
        formData.append("pickUpPoint", pickUpPoint);
        formData.append("arrivalTime", arrivalTime);
        formData.append("seats", seats);
        formData.append("ticketprice", ticketprice);
        formData.append("operator", operator);
        formData.append("currentStatus", currentStatus);
        formData.append("busType", busType);
        formData.append("busstops", busstops);
        formData.append("noofstop", noofstop);
        formData.append("bookingseats", bookingseats);
        formData.append("travelagencyname", travelagencyname);
        formData.append("duration", duration);
        formData.append("imageUrl", busImage);

        dispatch(addBuses(formData)).then(() => {
          router.push("/bus");
        });
      }
    } catch (error) {
      console.error(error);
      alert("Sorry! something went wrong inside catch");
    }
  };

  return (
    <div className="bg-white h-[550px] mt-5 p-5 m-auto w-[85%] justify-center rounded-lg ">
      <div className="flex items-center justify-center ">
        <Typography
          className="  font-castoro text-black"
          variant="h3"
          color="black"
        >
          Add Bus
        </Typography>
      </div>
      <div className="h-[450px] overflow-y-auto mt-1 ">
        <div className="flex  flex-wrap justify-center mx-6 mt-1 ">
          <div className="flex  flex-col mx-5 w-[300px] ">
            <BBInput
              containerProps={{ className: "mb-3" }}
              label="Bus Name"
              value={busname + ""}
              onChange={(e) => setBusname(e.target.value)}
            />

            <BBInput
              containerProps={{ className: "mb-3" }}
              label="Bus Number"
              value={busnumber + ""}
              onChange={(e) => setBusnumber(e.target.value)}
            />

            <BBDropdown
              containerProps={{ className: "mb-3" }}
              options={[
                { label: "Window-Seats" },
                { label: "Non_Window-Seats" },
              ]}
              value={bookingseats}
              onPress={(value: any) => {
                setBookingSeats(value);
              }}
              label="Booking Seats"
            />

            <BBDropdown
              containerProps={{ className: "mb-3" }}
              options={[
                { label: "Nashik" },
                { label: "Pune" },
                { label: "Mumbai" },
              ]}
              value={from}
              onPress={(value: any) => {
                setFrom(value);
              }}
              label="From"
            />

            <BBDropdown
              containerProps={{ className: "mb-3" }}
              options={[
                { label: "Nashik" },
                { label: "Pune" },
                { label: "Mumbai" },
              ]}
              value={to}
              onPress={(value: any) => {
                setTo(value);
              }}
              label="To"
            />

            <BBDropdown
              containerProps={{ className: "mb-3" }}
              options={[
                { label: "Sai-Travel-Agency" },
                { label: "Chhatrapati-Travel-Agency" },
                { label: "Ajit-Travel-Agency" },
                { label: "Adesh-Travel-Agency" },
              ]}
              value={travelagencyname}
              onPress={(value: any) => {
                setTravelAgencyName(value);
              }}
              label="Travel Agency Name"
            />

            <BBDropdown
              containerProps={{ className: "mb-3" }}
              options={[
                { label: "1:2 Hrs" },
                { label: "2:4 Hrs" },
                { label: "4:6 Hrs" },
                { label: "7:8 Hrs" },
              ]}
              value={duration}
              onPress={(value: any) => {
                setDuration(value);
              }}
              label="Duration"
            />
          </div>
          <div className="flex  flex-col mx-5 w-[300px]">
            <BBInput
              containerProps={{ className: "mb-3" }}
              type="time"
              label="Departure Time"
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
            />

            <BBInput
              containerProps={{ className: "mb-3" }}
              type="time"
              label="Arrival Time"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-3" }}
              label="Arrival Date"
              value={arrivalDate}
              onChange={(e) => setArrivalDate(e.target.value)}
              type="date"
            />
            <BBInput
              containerProps={{ className: "mb-3" }}
              type="text"
              label="Total Seats"
              value={seats + ""}
              onChange={(e) => setSeats(e.target.value)}
            />
            {/* <div className="flex  flex-col mx-5 w-[300px]"> */}
            <BBDropdown
              containerProps={{ className: "mb-3" }}
              options={[
                { label: "Non-Ac-500" },
                { label: "Ac-1000" },
                { label: "Express-1500" },
              ]}
              value={ticketprice}
              onPress={(value: any) => {
                setTicketPrice(value);
              }}
              label="Ticket Prise"
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="file"
              label="Bus Image"
              onChange={(e) => onFileUploadChange(e)}
            />
          </div>

          <div className="flex  flex-col mx-5 w-[300px]">
            <BBDropdown
              containerProps={{ className: "mb-3" }}
              options={[
                { label: "CBS" },
                { label: "New CBS" },
                { label: "mahamarg" },
              ]}
              value={pickUpPoint}
              onPress={(value: any) => {
                setPickUpPoint(value);
              }}
              label="PickUp Point"
            />
            <BBDropdown
              containerProps={{ className: "mb-3" }}
              options={[
                { label: "Nashik New CBS" },
                { label: "Sinner" },
                { label: "Sangmaner" },
                { label: "Chakan" },
                { label: "Nashik Phata" },
                { label: " Shivaji Nager" },
                { label: "Igatpuri" },
                { label: "Kasara" },
                { label: "Kalyan" },
                { label: "Thane" },
                { label: "Mumbai" },
              ]}
              value={busstops}
              onPress={(value: any) => {
                setBusStops(value);
              }}
              label=" View Bus Stops"
            />

            <BBDropdown
              containerProps={{ className: "mb-3" }}
              options={[
                { label: "Ac-Shivneri" },
                { label: "Semi-Luxury" },
                { label: "Night Express" },
                { label: "Ordinary-Express" },
                { label: "Day Ordinary" },
                { label: "Ac-Volvo" },
                { label: "Non-Ac-Shivneri" },
              ]}
              value={busType}
              onPress={(value: any) => {
                setBusType(value);
              }}
              label="BusType"
            />

            <BBDropdown
              containerProps={{ className: "mb-3" }}
              options={[{ label: "Available" }, { label: "Not-Availabel" }]}
              value={currentStatus}
              onPress={(value: any) => {
                setCurrentStatus(value);
              }}
              label="CurrentStatus"
            />

            <BBDropdown
              containerProps={{ className: "mb-3" }}
              options={[
                { label: "1" },
                { label: "2" },
                { label: "3" },

                { label: "4" },
                { label: "11" },
              ]}
              value={noofstop}
              onPress={(value: any) => {
                setNoOfStop(value);
              }}
              label="No Of Bus Stop"
            />
            <BBInput
              containerProps={{ className: "mb-3" }}
              label="Bus Operator"
              value={operator + ""}
              onChange={(e) => setOperator(e.target.value)}
            />
          </div>
        </div>

        <List className=" flex flex-row flex-wrap justify-center">
          <h3 className="my-auto"> Facilities:</h3>

          <BBCheckbox
            containerProps={{ className: "hover:before:opacity-0" }}
            ripple={false}
            id="1"
            onChange={(e) => setCpoint(!cpoint)}
            checked={cpoint}
            label="Charging Point"
          />

          <BBCheckbox
            containerProps={{ className: "hover:before:opacity-0" }}
            ripple={false}
            id="3"
            onChange={(e) => setLights(!lights)}
            checked={lights}
            label="Reading Lights"
          />

          <BBCheckbox
            containerProps={{ className: "hover:before:opacity-0" }}
            ripple={false}
            id="5"
            onChange={(e) => setWifi(!wifi)}
            checked={wifi}
            label="WiFi"
          />
        </List>
        <div className="flex justify-center mt-2">
          <BBButton
            color=""
            label="Add "
            size="lg"
            onClick={(e) => addBus(e)}
            className="h-10 bg-blackblue w-[500px] hover:bg-GreenBlue"
          />
        </div>

        <BBErrorDialog
          dialogHeader="Error"
          dialogMessage={errorDialogMessage}
          open={showErrorDialog}
          onOkClick={() => setShowErrorDialog(false)}
        />
      </div>
    </div>
  );
}
