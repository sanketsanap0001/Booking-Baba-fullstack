"use client";
import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";

import { useEffect, useState } from "react";
import { useAppDispatch } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import BBErrorDialog from "@/app/components/BBErrorDialog";
import BBDropdown from "@/app/components/BBDropdown";
import { addTrain } from "@/redux/action/trainAction";
import { dateData } from "@/utils/TrainData";
import Multiselect from "multiselect-react-dropdown";

export default function AddTrain() {
  const [trainNo, setTrainNo] = useState<string>("");
  const [trainName, setTrainName] = useState<string>("");
  const [from_Stn, setFrom_Stn] = useState<string>("");
  const [to_Stn, setTo_Stn] = useState<string>("");
  const [fare, setFare] = useState<any>("");
  const [stops, setStops] = useState<any>("");
  const [seats, setSeats] = useState<string>("");
  const [coach, setCoach] = useState<any>("");
  const [depTime, setDepTime] = useState<string>("");
  const [arrivalTime, setArrivalTime] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [classType, setClassType] = useState<string>("");
  const [trainType, setTrainType] = useState<string>("");
  const [operationDays, setOperationDays] = useState<string>("");
  const [trainRoute, setTrainRoute] = useState<string>("");
  const [trainDesc, setTrainDesc] = useState<string>("");
  const [distance, setDistance] = useState<string>("");
  const [depDate, setDepDate] = useState<string>("");
  const [arrDate, setArrDate] = useState<string>("");
  const [trainImage, setTrainImage] = useState<any>();
  // const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const dispatch = useAppDispatch();

  const [errorDialogMessage, setErrorDialogMessage] = useState([]);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const router = useRouter();

  const { trainDetails }: any = useSelector((state: any) => state.train);
  // console.log("add train page::::::::*****", trainDetails);

  const [date, setDate] = useState<any>([
    {
      date: "",
      id: "",
    },
  ]);

  const selectDates = (selectedList: any) => {
    setDate(selectedList);
  };
  const removeDates = (selectedList: any) => {
    setDate(selectedList);
  };

  useEffect(() => {
    if (trainDetails?.status === 200) {
      // console.log("traindetails in useeffect :: ", trainDetails);
      router.push("/train");
    }
  }, [trainDetails]);

  const onFileUploadChange = (e: any) => {
    const fileInput = e?.target;

    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }

    const trainImage = fileInput.files[0];

    setTrainImage(trainImage);
    console.log(trainImage);
    // setPreviewUrl(URL.createObjectURL(trainImage));
  };
  // let dateData = {
  //   firstDate: moment().format("LL"),
  //   secondDate: moment().add(1, "day").format("LL"),
  //   thirdDate: moment().add(2, "day").format("LL"),
  //   fourthDate: moment().add(3, "day").format("LL"),
  //   fifthDate: moment().add(4, "day").format("LL"),
  // };

  console.log("date data", dateData);

  const addTrainDetails = async (e: any) => {
    console.log("insidde func");
    console.log("date ", date);
    e.preventDefault();

    if (!trainImage) {
      return;
    }
    try {
      var formData = new FormData();
      console.log("trainImage::", trainImage);
      formData.append("trainNo", trainNo);
      formData.append("trainName", trainName);
      formData.append("from_Stn", from_Stn);
      formData.append("to_Stn", to_Stn);
      formData.append("fare", fare);
      formData.append("stops", stops);
      formData.append("seats", seats);
      formData.append("coach", coach);
      formData.append("depTime", depTime);
      formData.append("arrivalTime", arrivalTime);
      formData.append("duration", duration);
      formData.append("classType", classType);
      formData.append("operationDays", operationDays);
      formData.append("trainRoute", trainRoute);
      formData.append("trainDesc", trainDesc);
      formData.append("imageUrl", trainImage);
      formData.append("depDate", depDate);
      formData.append("arrDate", arrDate);
      formData.append("distance", distance);
      formData.append("date", JSON.stringify(date));
      formData.append("imageUrl", trainImage);

      console.log("formData>>>>>>>>>>>", formData);

      // const res = await fetch("/api/trainApi/trainApi?action=ADD_TRAIN", {
      //   method: "POST",
      //   body: formData,
      // });

      dispatch(addTrain(formData))
        .then((res: any) => {
          console.log("response>>>>>>>>>>>>>>", res);
          alert("123");

          if (res) {
            console.log("response>>>>>>>>>>>>>>", res);

            router.push("/train");

            const {
              data,
              error,
            }: {
              data: { url: string | string[] } | null;
              error: string | null;
            } = res.json();

            console.log("File was uploaded successfylly:", data);

            if (error || !data) {
              alert(error || "Sorry! something went wrong.");
              return;
            }
          }
        })
        .catch((err: any) => {
          console.log("error ::::::::::::", err);
        });
    } catch (error) {
      console.error(error);
      alert("Sorry! something went wrong inside catch");
    }
  };

  return (
    <>
      <div className="bg-white h-full mt-5 p-5 m-auto w-[85%] justify-center rounded-lg">
        <div className="flex justify-center  text-3xl">
          <h1>Add Train</h1>
        </div>
        <div className="flex flex-row justify-center m-6">
          <div className="flex  flex-col mx-5 w-[300px] ">
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="text"
              label="Train No"
              value={trainNo}
              onChange={(e) => setTrainNo(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Train Name"
              value={trainName}
              onChange={(e) => setTrainName(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="time"
              label="Departure Time"
              value={depTime}
              onChange={(e) => setDepTime(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="time"
              label="Arrival Time"
              value={arrivalTime}
              onChange={(e) => setArrivalTime(e.target.value)}
            />

            <BBInput
              containerProps={{ className: "mb-4" }}
              type="date"
              label="Departure Date"
              value={depDate}
              onChange={(e) => setDepDate(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="date"
              label="Arrival Date"
              value={arrDate}
              onChange={(e) => setArrDate(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="text"
              label="Train Description"
              value={trainDesc}
              onChange={(e) => setTrainDesc(e.target.value)}
            />
          </div>

          <div className="flex  flex-col mx-5 w-[300px]">
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="text"
              label="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Mumbai" },
                { label: "Pune" },
                { label: "Nashik" },
                { label: "Nagpur" },
                { label: "Hydrabad" },
              ]}
              value={from_Stn}
              onPress={(value: any) => {
                setFrom_Stn(value);
              }}
              label="Source Station"
            />

            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Mumbai" },
                { label: "Pune" },
                { label: "Nashik" },
                { label: "Nagpur" },
                { label: "Hydrabad" },
              ]}
              value={to_Stn}
              onPress={(value: any) => {
                setTo_Stn(value);
              }}
              label="Destination Station"
            />

            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
              label="No of Coaches"
              value={coach}
              onChange={(e) => setCoach(e.target.value)}
            />

            <BBInput
              containerProps={{ className: "mb-4" }}
              type="text"
              label="Total Distance"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
            />

            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Mumbai To Nashik" },
                { label: "Mumbai To Nagpur" },
                { label: "Mumbai To Pune" },
                { label: "Mumbai To Hydrabad" },
                { label: "Pune To Nagpur" },
                { label: "Pune To Mumbai" },
                { label: "Pune To Nashik" },
                { label: "Pune To Hydrabad" },
                { label: "Nashik To Pune" },
                { label: "Nashik To Mumbai" },
                { label: "Nashik To Nagpur" },
                { label: "Nashik To Hydrabad" },
              ]}
              value={trainRoute}
              onPress={(value: any) => {
                setTrainRoute(value);
              }}
              label="Train Route"
            />

            <BBInput
              containerProps={{ className: "mb-4" }}
              type="file"
              label="Train Image"
              // value="kjjjjs"
              // onChange={(e) => setTrainImage(e.target.files[0])}
              // onChange={() => {}}
              onChange={
                (e) => onFileUploadChange(e)

                // {
                //   if (e.target.files) {
                //     setTrainImage(e.target.files[0]);
                //   }
                // }
              }
            />
          </div>

          <div className="flex  flex-col mx-5 w-[300px] ">
            {/* <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Economy-140" },
                { label: "Business-250" },
                { label: "First Class-400" },
              ]}
              value={fare}
              onPress={(value: any) => {
                setFare(value);
              }}
              label="Fare"
            /> */}
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="text"
              label="Fare"
              value={fare + ""}
              onChange={(e) => setFare(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
              label="Stops"
              value={stops + ""}
              onChange={(e) => setStops(e.target.value)}
            />

            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
              label="Seats"
              value={seats + ""}
              onChange={(e) => setSeats(e.target.value)}
            />
            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Business" },
                { label: "First Class" },
                { label: "Second Class" },
                { label: "First Class Sleeper(SL)" },
                { label: "Second Class Sleeper(SL)" },
              ]}
              value={classType}
              onPress={(value: any) => {
                setClassType(value);
              }}
              label="Class Types"
            />

            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Express" },
                { label: "Superfast" },
                { label: "Local" },
              ]}
              value={trainType}
              onPress={(value: any) => {
                setTrainType(value);
              }}
              label="Train Type"
            />

            <BBDropdown
              containerProps={{ className: "mb-4" }}
              options={[
                { label: "Daily" },
                { label: "Mon to Fri" },
                { label: "Mon To Sat" },
              ]}
              value={trainType}
              onPress={(value: any) => {
                setOperationDays(value);
              }}
              label="Operational Days"
            />
            <div className="mb-4 ">
              <Multiselect
                placeholder={"Unavailable Dates"}
                options={dateData}
                onSelect={selectDates}
                onRemove={removeDates}
                displayValue="date"
                avoidHighlightFirstOption={true}
                showCheckbox={true}
                hideSelectedList={true}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <BBButton
            color=""
            label="ADD "
            size="lg"
            onClick={(e) => addTrainDetails(e)}
            className="h-12 bg-blackblue hover:bg-GreenBlue w-[500px] "
          />
        </div>
      </div>

      <BBErrorDialog
        dialogHeader="Error"
        dialogMessage={errorDialogMessage}
        open={showErrorDialog}
        onOkClick={() => setShowErrorDialog(false)}
      />
    </>
  );
}
