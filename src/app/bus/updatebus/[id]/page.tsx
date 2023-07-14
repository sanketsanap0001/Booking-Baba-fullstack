"use client";

import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";
import {
  Card,
  Typography,
  Select,
  Option,
  Checkbox,
  List,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import BBCheckbox from "@/app/components/BBCheckbox";
import BBDropdown from "@/app/components/BBDropdown";
import BBErrorDialog from "@/app/components/BBErrorDialog";
import { useAppDispatch } from "@/redux/store";
import {
  addBuses,
  getBusesById,
  updateBusAction,
} from "@/redux/action/busaction";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { BusType } from "@/utils/BusData";

export default function UpdateBus({ params }: any) {
  const dispatch = useAppDispatch();
  const [busname, setBusname] = useState<String>("");
  const [from, setFrom] = useState<String>("");
  const [to, setTo] = useState<String>("");
  const [busnumber, setBusnumber] = useState<String>("");
  const [time, setTime] = useState<String>("");
  const [seats, setSeats] = useState<String>("");
  const [ticketprice, setTicketPrice] = useState<String>("");
  const [operator, setOperator] = useState<String>("");
  const [busstops, setBusStops] = useState<String>("");
  const [noofstop, setNoOfStop] = useState("");
  const [bookingseats, setBookingSeats] = useState("");
  const [travelagencyname, setTravelAgencyName] = useState("");

  const [arrivalDate, setArrivalDate] = useState("");
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [pickUpPoint, setPickUpPoint] = useState("");
  const [duration, setDuration] = useState("");
  const [busType, setBusType] = useState("");
  const [currentStatus, setCurrentStatus] = useState("");
  const [wifi, setWifi] = useState<boolean>(true);
  const [cpoint, setCpoint] = useState<boolean>(true);
  const [system, setSystem] = useState<boolean>(true);
  const [lights, setLights] = useState<boolean>(true);
  const router = useRouter();

  const [showErrorDialog, setShowErrorDialog] = useState(false);

  const [errorDialogMessage, setErrorDialogMessage] = useState([]);

  const busState = useSelector((state: any) => state.bus.getBusById);

  console.log("Bus Id Is>>>>>>>>>>>>>>>>>", params.id);

  useEffect(() => {
    dispatch(getBusesById(params.id));
  }, []);

  console.log("Bus Data Is???????????????", busState);
  const updatebus = () => {
    let data = {
      _id: params.id,
      busname,
      busnumber,
      from,
      to,
      arrivalTime,
      arrivalDate,
      pickUpPoint,
      departureTime,
      seats,
      ticketprice,
      operator,
      currentStatus,
      busType,
      busstops,
      noofstop,
      bookingseats,
      travelagencyname,
      duration,
    };
    dispatch(updateBusAction(data)).then(() => {
      router.push("/bus");
    });
  };
  useEffect(() => {
    let bus_data = busState?.data;
    if (bus_data) {
      const {
        busname,
        from,
        to,
        busnumber,
        seats,
        ticketprice,
        operator,
        busstops,
        noofstop,
        bookingseats,
        travelagencyname,
        arrivalDate,
        arrivalTime,
        departureTime,
        pickUpPoint,
        busType,
        currentStatus,
        duration,
        // photos,
        // wifi,
      } = bus_data;
      setBusname(busname);
      setFrom(from);
      setTo(to);
      setBusnumber(busnumber);
      setSeats(seats);
      setTicketPrice(ticketprice);
      setOperator(operator);
      setBusStops(busstops);
      setNoOfStop(noofstop);
      setBookingSeats(bookingseats);
      setTravelAgencyName(travelagencyname);
      setArrivalDate(arrivalDate);
      setArrivalTime(arrivalTime);
      setDepartureTime(departureTime);
      setPickUpPoint(pickUpPoint);
      setBusType(busType);
      setCurrentStatus(currentStatus);
      setDuration(duration);
      // setPhotos(photos)
      // setWifi(wifi)
    }
  }, [busState]);

  // console.log("///////////////", busState.updateBusDetails)

  return (
    <div className="bg-white h-[550px] mt-5 p-5 m-auto w-[90%] justify-center rounded-lg">
      <div className="flex items-center justify-center ">
        <Typography
          className="  font-castoro text-black"
          variant="h3"
          color="black"
        >
          Update Bus
        </Typography>
      </div>
      <div className="h-[450px] overflow-y-auto mt-1">
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
            {/* <BBInput
            containerProps={{ className: "mb-3" }}
            type="file"
            label="file"
            value={file + ""}
            onChange={(e) => setFile(e.target.value)}
          /> */}

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
              options={[{ label: "Nashik" }, { label: "Pune" }]}
              value={from}
              onPress={(value: any) => {
                setFrom(value);
              }}
              label="From"
            />

            <BBDropdown
              containerProps={{ className: "mb-3" }}
              options={[{ label: "Nashik" }, { label: "Pune" }]}
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
              ]}
              value={travelagencyname}
              onPress={(value: any) => {
                setTravelAgencyName(value);
              }}
              label="Travel Agency Name"
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
            <BBInput
              containerProps={{ className: "mb-3" }}
              label="Ticket Price"
              value={ticketprice + ""}
              onChange={(e) => setTicketPrice(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-3" }}
              label="Bus Operator"
              value={operator + ""}
              onChange={(e) => setOperator(e.target.value)}
            />
          </div>

          <div className="flex  flex-col mx-5 w-[300px]">
            <BBDropdown
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
            <br />
            <BBDropdown
              options={[
                { label: "Nashik New CBS" },
                { label: "Sinner" },
                { label: "Shirdi" },
                { label: "Nimgoan" },
                { label: "Shirdi Local" },
                { label: "New Pune Mahamarge" },
                { label: "Devpure" },
                { label: "Pune Shivaji Nager" },
              ]}
              value={busstops}
              onPress={(value: any) => {
                setBusStops(value);
              }}
              label=" View Bus Stops"
            />
            <br />

            <BBDropdown
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
            <br />
            <BBDropdown
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

            <br />

            <BBDropdown
              options={[{ label: "Available" }, { label: "Not-Availabel" }]}
              value={currentStatus}
              onPress={(value: any) => {
                setCurrentStatus(value);
              }}
              label="CurrentStatus"
            />
            <br />
            <BBDropdown
              options={[
                { label: "1" },
                { label: "2" },
                { label: "3" },
                { label: "4" },
                { label: "5" },
              ]}
              value={noofstop}
              onPress={(value: any) => {
                setNoOfStop(value);
              }}
              label="No Of Bus Stop"
            />
            <br />
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
            checked={system}
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
            label="UPDATE "
            size="lg"
            onClick={(e) => updatebus()}
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
