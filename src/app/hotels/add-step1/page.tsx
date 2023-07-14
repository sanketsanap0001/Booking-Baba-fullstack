"use client";

import BBButton from "@/app/components/BBButton";
import BBInput from "@/app/components/BBInput";

import "../../styles/hotel.css";

import {
  Card,
  Typography,
  Select,
  Option,
  Checkbox,
  List,
} from "@material-tailwind/react";
import { Input } from "postcss";
import { useEffect, useState } from "react";
import BBCheckbox from "@/app/components/BBCheckbox";
import { useAppDispatch } from "@/redux/store";
import { addHotels, savePreviousData } from "@/redux/action/hotelaction";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import BBErrorDialog from "@/app/components/BBErrorDialog";
import Multiselect from "multiselect-react-dropdown";
import {
  Basic_Facilities,
  Safety,
  food_facilities,
  general_services,
  mode_of_payment,
  propert_type,
} from "@/utils/Data";

export default function AddHotels() {
  const [hotelname, setHotelname] = useState<String>("");
  const [adress, setAdress] = useState<String>("");
  const [street, setStreet] = useState<String>("");
  const [contactno, setContactNo] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [ownerName, setOwnerName] = useState<String>("");
  const [city, setCity] = useState("");
  const [pin, setPin] = useState("");
  const [file, setFile] = useState<any>();
  const [pool, setPool] = useState<boolean>(true);
  const [wifi, setWifi] = useState<boolean>(true);
  const [kids, setKids] = useState<boolean>(true);
  const [lunch, setLunch] = useState<boolean>(true);
  const [dinner, setDinner] = useState<boolean>(true);
  const [country, setCountry] = useState("");
  const [date, setDate] = useState("");

  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");

  const [food, setFood] = useState([]);
  const [basics, setBasics] = useState([]);
  const [generalService, setGeneral] = useState([]);
  const [safety, setSafety] = useState([]);
  const [payment, setPayment] = useState([]);
  const [property, setProperty] = useState([]);

  const [selectedFoodName, setSelectedFoodName] = useState(
    "Select foods & drinks"
  );
  const select_food_facilities = (selectedList: any, selectedItem: any) => {
    setFood(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedFoodName(names.toString());
  };
  const remove_food_facilities = (selectedList: any, removedItem: any) => {
    setFood(selectedList);
    console.log(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedFoodName(names.toString());
  };

  const [selectedFoodBasics, setSelectedFoodBasics] = useState(
    "Select foods & drinks"
  );
  const selectBasic_Facilities = (selectedList: any, selectedItem: any) => {
    setBasics(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedFoodBasics(names.toString());
    console.log(selectedList);
  };
  const removeBasic_Facilities = (selectedList: any, removedItem: any) => {
    setBasics(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedFoodBasics(names.toString());
  };

  const [selectedGeneral, setSelectedGeneral] = useState(
    "Select General Servicess"
  );
  const select_general_services = (selectedList: any, selectedItem: any) => {
    setGeneral(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedGeneral(names.toString());
  };
  const remove_general_services = (selectedList: any, removedItem: any) => {
    setGeneral(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedGeneral(names.toString());
  };

  const [selectedSafety, setSelectedSafety] = useState(
    "Select Safety & Security"
  );
  const select_safety = (selectedList: any, selectedItem: any) => {
    setSafety(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedSafety(names.toString());
  };
  const remove_safety = (selectedList: any, removedItem: any) => {
    setSafety(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectedSafety(names.toString());
  };

  const [selectPayment, setSelectPayment] = useState("Select Mode Of Payment");
  const selectModePayment = (selectedList: any, selectedItem: any) => {
    setPayment(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectPayment(names.toString());
  };
  const removeModePayment = (selectedList: any, removedItem: any) => {
    setPayment(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setSelectPayment(names.toString());
  };

  const [selectProperty_Type, setPropertyType] = useState(
    "Select Property Type"
  );
  const selectPropertyType = (selectedList: any, selectedItem: any) => {
    setProperty(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setPropertyType(names.toString());
  };
  const removePropertyType = (selectedList: any, removedItem: any) => {
    setProperty(selectedList);
    let names = selectedList.map((element: any) => element.name);
    setPropertyType(names.toString());
  };

  const dispatch = useAppDispatch();
  const [errorDialogMessage, setErrorDialogMessage] = useState([]);
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  const router = useRouter();

  //name type adress location  services wifi dinner kunch swiimmingparling gym kids
  const hotelData: any = useSelector((state: any) => state.hotel.hotelDetails);
  console.log("hotel data is ..", hotelData);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation(position.coords.latitude + ", " + position.coords.longitude);
      // if (hotelData) {
      //   router.push("/hotels/add-step2")
      // }
    });
  }, []);

  const onFileUploadChange = (e: any) => {
    const fileInput = e?.target;

    if (!fileInput.files) {
      alert("No file was chosen");
      return;
    }

    debugger;
    let selectedImg = fileInput.files[0];

    const url = URL.createObjectURL(selectedImg);

    debugger;
    setFile(url);
    // setFile(selectedImg)
  };

  const addHotelDetails = () => {
    // debugger
    let data: any = {
      hotelname: hotelname,
      ownerName: ownerName,
      contactno: contactno,
      email: email,
      file: "",
      adress: adress,
      street: street,
      city: city,
      pin: pin,
      country: country,
      date: date,
      location: location,
      dinner: dinner,
      lunch: lunch,
      pool: pool,
      kids: kids,
      wifi: wifi,
      food: food,
      basics: basics,
      generalService: generalService,
      safety: safety,
      payment: payment,
      property: property,
      min_order_price: price,
    };

    let isErrorFound = false;
    let error: any = [];
    if (!hotelname || !hotelname.trim()) {
      isErrorFound = true;
      error.push("Please enter Hotel Name");
    }
    if (!ownerName || !ownerName.trim()) {
      isErrorFound = true;
      error.push("Please enter Owner Name");
    }

    if (!contactno || !contactno.trim()) {
      isErrorFound = true;
      error.push("Please enter Contact No");
    }

    if (!email || !email.trim()) {
      isErrorFound = true;
      error.push("Please enter valid email address");
    }

    if (!file) {
      isErrorFound = true;
      error.push("Please Select File");
    }

    if (!pin || !pin.trim()) {
      isErrorFound = true;
      error.push("Please enter Address");
    }

    if (isErrorFound) {
      setErrorDialogMessage(error);
      setShowErrorDialog(true);
      return;
    } else {
      console.log(data);
      // let ldata={...data}
      // delete ldata.imageUrl
      dispatch(savePreviousData(data));
      router.push("/hotels/add-step2");
    }
  };
  return (
    <>
      <div className="bg-white h-[40%] pb-4 mt-5 m-auto w-[800px] justify-center rounded-lg">
        <div className="flex justify-center h-12 bg-GreenBlue text-white px-5  text-3xl">
          <h1>Add Hotel</h1>
        </div>
        <div className="flex  flex-row justify-center m-6">
          <div className="flex  flex-col mx-4 w-[300px] ">
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Hotel Name"
              value={hotelname + ""}
              onChange={(e) => setHotelname(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Hotel Owner"
              value={ownerName + ""}
              onChange={(e) => setOwnerName(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="number"
              label="Contact No"
              value={contactno + ""}
              onChange={(e) => setContactNo(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              type="email"
              label="Email"
              value={email + ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "w-[300px] mb-4" }}
              type="file"
              label="Hotel Photos"
              //  value={file}
              //   onChange={(e) => setFile(e.target.value)}
              onChange={(e) => onFileUploadChange(e)}
            />
            <BBInput
              containerProps={{ className: "" }}
              label="Latitude & Longitude"
              value={location}
              onChange={(e) => setLocation(location)}
            />
          </div>
          <div className="flex  flex-col mx-5 w-[300px]">
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Adress Line1"
              value={adress + ""}
              onChange={(e) => setAdress(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Adress Line2 & Street"
              value={street + ""}
              onChange={(e) => setStreet(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="PinCode"
              value={pin}
              type="nunmber"
              onChange={(e) => setPin(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Established Date"
              value={date}
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="flex  flex-col mx-4 w-[300px] ">
            <BBInput
              containerProps={{ className: "mb-4" }}
              label="Min Price"
              value={price}
              type="number"
              onChange={(e) => setPrice(e.target.value)}
            />
            <div className="my-2 w-60  font-sm ">
              <Multiselect
                placeholder={selectedFoodBasics || "Select Basic Facilities"}
                options={Basic_Facilities}
                onSelect={selectBasic_Facilities}
                onRemove={removeBasic_Facilities}
                displayValue="name"
                avoidHighlightFirstOption={true}
                showCheckbox={true}
                hideSelectedList={true}
              />
            </div>

            <div className="my-2">
              <Multiselect
                // placeholder={food?food[0]?.name  :"Select FooD & Drinks"}
                placeholder={selectedFoodName || "Select Food & Drinks"}
                options={food_facilities}
                onSelect={select_food_facilities}
                onRemove={remove_food_facilities}
                displayValue="name"
                avoidHighlightFirstOption={true}
                showCheckbox={true}
                hideSelectedList={true}
              />
            </div>
            <div className="my-2 w-60">
              <Multiselect
                placeholder={selectedGeneral || "Select General Services"}
                options={general_services}
                onSelect={select_general_services}
                onRemove={remove_general_services}
                displayValue="name"
                avoidHighlightFirstOption={true}
                showCheckbox={true}
                hideSelectedList={true}
              />
            </div>

            <div className="my-2 w-60">
              <Multiselect
                placeholder={selectedSafety || "Select Safety & Security"}
                options={Safety}
                onSelect={select_safety}
                onRemove={remove_safety}
                displayValue="name"
                avoidHighlightFirstOption={true}
                showCheckbox={true}
                hideSelectedList={true}
              />
            </div>
            <div className="my-2 w-60">
              <Multiselect
                placeholder={selectPayment || "Select Mode Of Payment"}
                options={mode_of_payment}
                onSelect={selectModePayment}
                onRemove={removeModePayment}
                displayValue="name"
                avoidHighlightFirstOption={true}
                showCheckbox={true}
                hideSelectedList={true}
              />
            </div>
            <div className="my-2 w-60">
              <Multiselect
                placeholder={selectProperty_Type || "Select Property Type"}
                options={propert_type}
                onSelect={selectPropertyType}
                onRemove={removePropertyType}
                displayValue="name"
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
            label="NEXT"
            size="lg"
            onClick={addHotelDetails}
            className="h-12 bg-blackblue w-[500px] hover:bg-GreenBlue"
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
